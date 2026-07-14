---
name: deflock-design
description: Use when creating ANY $DeFlock-branded output — production UI, prototypes, mocks, share cards, posters, stickers, X posts, or motion copy ($DeFlock — community memecoin, unaffiliated with deflock.org). Contains the locked plate palette, type + texture law, composition register with executable press-check, design tokens, React components, and the website ui kit. NOT for unbranded/generic design work, or for changing the locked law itself (that path is AGENTS.md §3).
license: MIT for code and docs; brand artwork under LICENSE-assets.md; fonts SIL OFL
compatibility: Any agent that can read files. Token scripts need Node >= 18 (zero npm deps); browser previews need a static HTTP server plus network for CDN dependencies.
metadata:
  author: the $DeFlock community
  version: "1.0.0"
  user-invocable: true
---

Riso/screen-print protest ephemera for a community memecoin (unaffiliated with
deflock.org). Work in this order; where a rule conflicts with instinct, the rule wins.

1. Read `readme.md` — context, voice, visual foundations, file index.
2. Take values only from tokens. Locked creative law: `tokens/tokens.json`. Web UI:
   `tokens/generated/df-tokens.css` — to change it, edit `tokens/web-tokens.source.json`
   and rerun `node scripts/generate-tokens.mjs`. Never hand-edit generated output; never
   re-type a hex.
3. Pick your mode in `register/register.json` and obey it:
   - expressive (posters, stickers, social, share cards): tilt, occlusion, and a
     figurative element are REQUIRED (rules R1-R5);
   - ui (pages, forms, dashboards): containers straight, texture at budget, tilt only on
     stamp-class accents (rule R6).
   Before presenting anything, run the acceptance checklist for your artifact class from
   that same file. Automated: load `register/press-check.js` into the rendered artifact
   (or call `pressCheck({mode})`) — it stamps PASSED/PULLED and logs a per-rule table;
   ship only on PASS.
4. Absolutes — no interpretation: cameras always intact · disclaimer wording exact · no
   URLs outside the disclaimer · no emdashes in artifact copy · no invented numbers
   (unknown renders as "—" plus the reason) · $DEFLOCK never wraps · plates only
   (paper/ink/red + sanctioned gadsden; red type only at display sizes) · no emoji ·
   never redraw marks — copy the files in `assets/`.
5. Build:
   - HTML artifacts and prototypes: link `styles.css`, compose from `components/` (each
     has a `.prompt.md` with usage), start from `templates/` (site-page, share-card) or
     crib full pages from `ui_kits/website/`;
   - production code: read `AGENTS.md` (implementation handoff + update playbook), then
     `docs/migration-map.md`, `docs/accessibility.md`, `docs/responsive.md`.
6. Missing fact, number, or asset? Ask. Never invent it.

If invoked with no other guidance, ask what the user wants to build, then act as an
expert $DeFlock designer producing HTML artifacts or production code as the need dictates.

## Worked example — a share card, end to end

1. Copy `templates/share-card/ShareCard.dc.html` (1080×1080, press-check pre-wired).
2. Mode = expressive → satisfy R1–R5: slam line in Archivo Black (e.g. "THE FLOCK
   WATCHES BACK."), ≥2 opposing tilted elements, one figurative element (mascot or
   camera glyph from `assets/`), one occlusion, red budget 1–2 hits.
3. Marked set (the default): footer strip carries `$DEFLOCK` + the exact disclaimer
   `COMMUNITY-MADE · UNAFFILIATED WITH DEFLOCK.ORG`.
4. Serve the repo root over HTTP and open the file (see Dependencies — `file://` fails).
5. In the console: `pressCheck({mode: "expressive"})` → fix any PULLED rows, re-run.
6. Ship only on PASSED THE PRESS.

## Dependencies

- **Node ≥ 18** for the token scripts (`scripts/*.mjs`) — zero npm installs required.
- **Any static HTTP server** for previews (`npx serve` or `python3 -m http.server` from
  the repo root) — specimen cards, the ui kit, and templates fetch local files over XHR
  and fail silently under `file://`.
- **Network access** when rendering cards/kit — React, Babel standalone, and Lucide load
  from CDN.
- **Production React work:** `lucide-react` for icons; self-host the fonts from
  `assets/fonts/` (SIL OFL — license texts alongside).

## Known Limitations & Gotchas

- `_ds_bundle.js`, `_ds_manifest.json`, and `templates/*/support.js` are upstream build
  artifacts: committed, NOT rebuildable from this repo. Editing `components/*.jsx` does
  not update them — rendered kit/cards stay on the committed bundle.
- press-check currently asserts the disclaimer (C1) in both sets, but doctrine 2 defines
  clean-set artwork as having no footer — sanctioned clean-set art false-fails C1. Until
  patched, judge C1 manually for clean-set artifacts and require every other row to pass.
- Red type below display sizes (≥24px, or ≥18.66px bold) fails contrast law — small text
  is always ink; express red as a non-text accent (ring, border, ▲ marker) instead.
- Uppercase is applied via CSS `text-transform`, never typed into content; `$DEFLOCK`
  must stay on one line (press-check verifies via Range rects — don't fight it, shorten
  the line).
- Unknown or unverifiable numbers render as "—" plus the reason. Doctrine 5 beats
  usefulness: never invent amounts, dates, or claims.
