#!/usr/bin/env node
// Verifies a DeFlock press receipt's internal integrity: id recomputation, PASSED
// verdict, all rules pass, well-formed dom hash. Artifact BINDING (re-rendering the
// HTML and re-running the register) is browser work — use register/verify-receipt.html.
// Zero dependencies. Spec: register/RECEIPTS.md.
// Usage: node scripts/verify-receipt.mjs <receipt.json>
// NOTE: stableStringify must stay byte-identical to the copy in register/press-check.js.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

function stableStringify(v) {
  if (v === null || typeof v !== "object") return JSON.stringify(v);
  if (Array.isArray(v)) return "[" + v.map(stableStringify).join(",") + "]";
  return "{" + Object.keys(v).sort().map(k => JSON.stringify(k) + ":" + stableStringify(v[k])).join(",") + "}";
}

const file = process.argv[2];
if (!file) {
  console.error("usage: node scripts/verify-receipt.mjs <receipt.json>");
  process.exit(1);
}

let receipt;
try {
  receipt = JSON.parse(readFileSync(file, "utf8"));
} catch (e) {
  console.error("✗ cannot read/parse " + file + ": " + e.message);
  process.exit(1);
}

const errs = [];
if (!receipt || typeof receipt !== "object" || !receipt.id || !receipt.payload) {
  errs.push("missing id/payload");
} else {
  const p = receipt.payload;
  if (p.spec !== "df-press-receipt/1") errs.push("unknown spec: " + p.spec);
  const id = "DF-" + createHash("sha256").update(stableStringify(p), "utf8").digest("hex").slice(0, 16);
  if (id !== receipt.id) errs.push("id mismatch — payload was altered (computed " + id + ", claimed " + receipt.id + ")");
  if (p.verdict !== "PASSED THE PRESS") errs.push("verdict is not PASSED THE PRESS: " + p.verdict);
  if (!Array.isArray(p.rules) || p.rules.length === 0) errs.push("no rule results");
  else {
    const failed = p.rules.filter(r => !r.pass);
    if (failed.length) errs.push("failed rules inside a PASSED receipt: " + failed.map(r => r.id).join(", "));
  }
  if (!/^[0-9a-f]{64}$/.test(p.domSha256 || "")) errs.push("malformed domSha256");
  if (!["marked", "clean"].includes(p.set)) errs.push("unknown set: " + p.set);
  if (!["expressive", "ui"].includes(p.mode)) errs.push("unknown mode: " + p.mode);
}

if (errs.length) {
  console.error("✗ INVALID RECEIPT — " + file);
  for (const e of errs) console.error("  · " + e);
  process.exit(1);
}

const p = receipt.payload;
console.log("✓ receipt internally valid");
console.log("  " + receipt.id + " · " + p.mode + "/" + p.set + " · " + p.rules.length + " rules · " + p.createdAt);
console.log("  register " + p.register + " · " + p.checker + " · tokens locked " + p.tokensLocked);
console.log("  artifact binding: serve the repo and open register/verify-receipt.html to");
console.log("  re-render the artifact, re-run the register, and match dom sha256 " + p.domSha256.slice(0, 16) + "…");
