/* DeFlock press check — executable enforcement of register/register.json.
   Zero-dep. Auto: <script src="…/press-check.js" data-press-auto data-press-mode="expressive" data-press-set="marked"></script>
   Programmatic: pressCheck({ root, mode: "expressive"|"ui", set: "marked"|"clean", stamp, quiet }) -> { verdict, fails, results }
   Receipts:     await pressReceipt({ mode, set, root }) -> tamper-evident proof-of-pass (register/RECEIPTS.md)
   Rule IDs match register.json checklists. A PASS is necessary, not sufficient. */
(() => {
  const SPEC = { receipt: "df-press-receipt/1", checker: "press-check/1.1.0", register: "1.1.0", tokensLocked: "2026-07-11" };
  const PL = { paper: [242, 237, 227], ink: [20, 16, 10], red: [217, 43, 28], gadsden: [232, 182, 58], white: [255, 255, 255] };
  const ALLOWED = Object.values(PL).slice();
  for (const [a, b] of [["paper", "white"], ["paper", "ink"], ["paper", "red"], ["paper", "gadsden"]])
    for (let w = 0.05; w < 1; w += 0.05) ALLOWED.push([0, 1, 2].map(i => PL[a][i] * w + PL[b][i] * (1 - w)));
  const dist = (c, d) => Math.hypot(c[0] - d[0], c[1] - d[1], c[2] - d[2]);
  const nearPlate = (c) => ALLOWED.some(a => dist(c, a) < 18);
  const isRed = (c) => c && dist(c, PL.red) < 40;
  function parseColor(s) {
    const m = s && s.match(/rgba?\(([\d.]+)[, ]+([\d.]+)[, ]+([\d.]+)(?:[,/ ]+([\d.]+))?\)/);
    if (!m) return null;
    const a = m[4] === undefined ? 1 : parseFloat(m[4]);
    if (a === 0) return null;
    let c = [+m[1], +m[2], +m[3]];
    if (a < 1) c = c.map((v, i) => v * a + PL.paper[i] * (1 - a));
    return c;
  }
  function rot(t) {
    if (!t || t === "none") return 0;
    try { const m = new DOMMatrixReadOnly(t); return Math.atan2(m.b, m.a) * 180 / Math.PI; } catch (e) { return 0; }
  }
  const ownText = (el) => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
  function pressCheck(opts = {}) {
    const mode = opts.mode || "ui", set = opts.set || "marked", root = opts.root || document.body, stamp = opts.stamp !== false;
    const doc = root.ownerDocument || document, win = doc.defaultView || window;
    const rr = root.getBoundingClientRect();
    const info = [...root.querySelectorAll("*")].filter(el => {
      if (el.closest(".press-stamp") || /^(SCRIPT|STYLE|NOSCRIPT|LINK|META)$/.test(el.tagName)) return false;
      const cs = win.getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden" || parseFloat(cs.opacity) === 0) return false;
      const r = el.getBoundingClientRect();
      return r.width > 1 && r.height > 1;
    }).slice(0, 1500).map(el => ({ el, cs: win.getComputedStyle(el), r: el.getBoundingClientRect() }));
    const res = [];
    const add = (id, pass, detail) => res.push({ id, pass, detail });
    // R1 / R6 — tilt
    const tilts = info.map(x => ({ x, a: rot(x.cs.transform) })).filter(t => Math.abs(t.a) >= 1 && Math.abs(t.a) <= 45);
    if (mode === "expressive") {
      add("R1 tilt", tilts.some(t => t.a > 0) && tilts.some(t => t.a < 0), tilts.length + " rotated element(s); need >=2 with opposing signs");
    } else {
      const big = tilts.filter(t => t.x.r.width * t.x.r.height > 0.25 * rr.width * rr.height);
      add("R6 tilt-discipline", big.length === 0, big.length ? big.length + " large container(s) tilted" : "containers straight \u00b7 " + tilts.length + " stamp-class tilt(s)");
    }
    // R2 — occlusion (frame-edge straddle)
    if (mode === "expressive") {
      const straddle = info.filter(x => {
        const r = x.r;
        const inside = r.right > rr.left && r.left < rr.right && r.bottom > rr.top && r.top < rr.bottom;
        const out = r.left < rr.left - 5 || r.right > rr.right + 5 || r.top < rr.top - 5 || r.bottom > rr.bottom + 5;
        return inside && out;
      });
      add("R2 occlusion", straddle.length > 0, straddle.length + " element(s) straddle the frame edge");
    }
    // R3 — figurative element
    if (mode === "expressive") {
      const figRe = /(motif-|emblem-|mascot|cam-pod|cam-spider|crow)/;
      const figs = info.filter(x => (x.el.tagName === "IMG" && figRe.test(x.el.src || "")) || figRe.test(x.cs.backgroundImage || ""));
      add("R3 figure", figs.length > 0, figs.length + " sanctioned figure(s) (murmuration/emblem/camera/mascot)");
    }
    // C2 — plates only
    const off = new Set();
    for (const x of info) for (const p of ["color", "backgroundColor", "borderTopColor"]) {
      const c = parseColor(x.cs[p]);
      if (c && !nearPlate(c)) off.add(x.cs[p]);
    }
    add("C2 plates", off.size === 0, off.size ? "foreign colors: " + [...off].slice(0, 4).join(" ") : "paper/ink/red/gadsden only");
    // C1 — disclaimer, ticker, emdash (doctrine 2: marked set carries both; clean set is artwork only)
    const txt = (root.textContent || "").toUpperCase();
    const hasDisc = txt.includes("COMMUNITY-MADE") && txt.includes("UNAFFILIATED WITH DEFLOCK.ORG");
    const tickers = info.filter(x => x.el.childElementCount === 0 && /\$DEFLOCK/i.test(x.el.textContent));
    if (set === "clean") {
      add("C1 clean-set", !hasDisc && tickers.length === 0, (hasDisc || tickers.length) ? "clean set is artwork only — found marked-set furniture (disclaimer/ticker)" : "artwork only · no disclaimer strip, no ticker");
    } else {
      add("C1 disclaimer", hasDisc, "exact wording present?");
      const broken = tickers.filter(x => { const rg = doc.createRange(); rg.selectNodeContents(x.el); return rg.getClientRects().length > 1; });
      add("C1 ticker", broken.length === 0, tickers.length ? tickers.length + " ticker(s), " + broken.length + " wrapped" : "no ticker found (ok if none intended)");
    }
    const prose = info.filter(x => x.el.childElementCount === 0 && /[A-Za-z][^\u2014]{0,8}\u2014[^\u2014]{0,8}[A-Za-z]/.test(x.el.textContent || ""));
    add("C1 emdash", prose.length === 0, prose.length ? prose.length + " prose emdash(es) \u00b7 banned in artifact copy" : "none in prose");
    // K — red type at large-text floor (decorative aria-hidden glyphs exempt)
    const redSmall = info.filter(x => {
      if (!ownText(x.el) || x.el.closest('[aria-hidden="true"]')) return false;
      if (!isRed(parseColor(x.cs.color))) return false;
      const fs = parseFloat(x.cs.fontSize), w = parseInt(x.cs.fontWeight) || 400;
      return !(fs >= 24 || (fs >= 18.66 && w >= 700));
    });
    add("K red-type", redSmall.length === 0, redSmall.length ? redSmall.length + " red text element(s) below large-text floor (>=24px, or >=18.66px bold)" : "red type at display sizes only");
    // L + T — expressive floors
    if (mode === "expressive") {
      const slams = info.filter(x => /archivo/i.test(x.cs.fontFamily) && ownText(x.el));
      const maxFs = Math.max(0, ...slams.map(x => parseFloat(x.cs.fontSize)));
      add("L slam-share", maxFs >= 0.08 * rr.height, slams.length ? "largest slam " + maxFs.toFixed(0) + "px vs 8% floor " + (0.08 * rr.height).toFixed(0) + "px" : "no slam line found");
      let redA = 0;
      for (const x of info) {
        const bg = parseColor(x.cs.backgroundColor);
        const pbg = x.el.parentElement && parseColor(win.getComputedStyle(x.el.parentElement).backgroundColor);
        if (isRed(bg) && !isRed(pbg)) redA += x.r.width * x.r.height;
      }
      add("T red-share", redA <= 0.15 * rr.width * rr.height, (100 * redA / (rr.width * rr.height)).toFixed(1) + "% of frame red-flooded (cap 15%)");
    }
    // A — ui accessibility
    if (mode === "ui") {
      const small = info.filter(x => x.el.matches("a[href],button,input,select,textarea,[role=button]") && x.cs.display !== "inline" && x.r.height < 43);
      add("A tap-targets", small.length === 0, small.length ? small.length + " interactive element(s) under 44px" : "all >=44px");
      let cssText = "";
      for (const sh of doc.styleSheets) { try { for (const r of sh.cssRules) cssText += r.cssText; } catch (e) {} }
      add("A reduced-motion", /prefers-reduced-motion/.test(cssText), "stylesheet handles prefers-reduced-motion?");
      add("A focus-visible", /:focus-visible/.test(cssText), "focus-visible ring defined?");
    }
    const fails = res.filter(r => !r.pass);
    const verdict = fails.length ? "PULLED" : "PASSED THE PRESS";
    if (!opts.quiet) {
      try { console.table(res.map(r => ({ rule: r.id, pass: r.pass ? "PASS" : "FAIL", detail: r.detail }))); } catch (e) {}
      console.log("[press-check] " + verdict + (fails.length ? " \u00b7 " + fails.map(f => f.id).join(", ") : ""));
    }
    if (stamp) {
      const ids = [...new Set(fails.map(f => f.id.split(" ")[0]))];
      const col = fails.length ? "#d92b1c" : "#14100a";
      const s = doc.createElement("div");
      s.className = "press-stamp";
      s.style.cssText = "position:" + (root === doc.body ? "fixed" : "absolute") + ";right:10px;top:10px;z-index:99999;transform:rotate(-4deg);padding:6px 10px;border:3px solid " + col + ";box-shadow:inset 0 0 0 2px #f2ede3,inset 0 0 0 4.5px " + col + ";background:#f2ede3;color:" + col + ";font:700 13px/1.2 'Space Mono',monospace;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;max-width:70%";
      s.textContent = fails.length ? "PULLED \u00b7 " + ids.join(" ") : "PASSED THE PRESS";
      s.title = res.map(r => (r.pass ? "PASS " : "FAIL ") + r.id + " \u2014 " + r.detail).join("\n");
      s.addEventListener("click", () => s.remove());
      (root === doc.body ? doc.body : root).appendChild(s);
    }
    return { verdict, fails: fails.map(f => f.id), results: res };
  }
  // ── Press receipts (register/RECEIPTS.md) — tamper-evident proof-of-pass ──
  function stableStringify(v) {
    if (v === null || typeof v !== "object") return JSON.stringify(v);
    if (Array.isArray(v)) return "[" + v.map(stableStringify).join(",") + "]";
    return "{" + Object.keys(v).sort().map(k => JSON.stringify(k) + ":" + stableStringify(v[k])).join(",") + "}";
  }
  async function sha256Hex(str) {
    if (typeof crypto === "undefined" || !crypto.subtle) throw new Error("[press-receipt] WebCrypto unavailable — serve over localhost or https (not file:// or plain http)");
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  }
  function serializeForReceipt(rootOrDoc) {
    const doc = (rootOrDoc && rootOrDoc.ownerDocument) || rootOrDoc || document;
    const node = (doc.documentElement || doc).cloneNode(true);
    node.querySelectorAll("script,.press-stamp,[data-press-inject]").forEach(n => n.remove());
    return node.outerHTML;
  }
  async function pressReceipt(opts = {}) {
    const root = opts.root || document.body, mode = opts.mode || "ui", set = opts.set || "marked";
    if (root !== document.body) {
      console.log("[press-receipt] REFUSED · receipts bind whole documents — mint from the artifact page itself (root must be document.body)");
      return null;
    }
    const check = pressCheck({ ...opts, root, mode, set });
    if (check.fails.length) {
      console.log("[press-receipt] REFUSED · artifact is PULLED (" + check.fails.join(", ") + ") · receipts mint only on PASS");
      return null;
    }
    const domSha256 = await sha256Hex(serializeForReceipt(document));
    const payload = {
      spec: SPEC.receipt, checker: SPEC.checker, register: SPEC.register, tokensLocked: SPEC.tokensLocked,
      mode, set, verdict: check.verdict,
      rules: check.results.map(r => ({ id: r.id, pass: r.pass, detail: r.detail })),
      domSha256, createdAt: new Date().toISOString()
    };
    const id = "DF-" + (await sha256Hex(stableStringify(payload))).slice(0, 16);
    const receipt = { id, payload };
    window.__lastPressReceipt = receipt;
    console.log("── PRESS RECEIPT ──\n" + id + " · " + mode + "/" + set + " · " + check.verdict + " · " + payload.createdAt +
      "\ndom sha256 " + domSha256 +
      "\nsave it:  copy(JSON.stringify(window.__lastPressReceipt, null, 1))" +
      "\nverify it: register/verify-receipt.html · node scripts/verify-receipt.mjs");
    return receipt;
  }
  window.pressCheck = pressCheck;
  window.pressReceipt = pressReceipt;
  window.__pressReceiptUtils = { stableStringify, sha256Hex, serializeForReceipt, SPEC };
  const tag = document.currentScript;
  if (tag && tag.hasAttribute("data-press-auto")) {
    const mode = tag.getAttribute("data-press-mode") || "ui";
    const set = tag.getAttribute("data-press-set") || "marked";
    window.addEventListener("load", () => setTimeout(() => pressCheck({ mode, set }), 150));
  }
})();
