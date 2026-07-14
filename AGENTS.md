# AGENTS.md — DeFlock Design · implementation handoff

For local/coding agents consuming this system (building DeflockOnSol UI or brand
artifacts) or maintaining it. Read this, then only what your task needs.
$DeFlock: community memecoin backing the anti-surveillance movement around deflock.org
(community-made, unaffiliated). Identity: riso/screen-print protest ephemera.
Voice: declarative watchdog — "THEY MAP YOUR PLATES. WE MAP THE CAMERAS."

**Authority ladder (conflicts resolve upward):** operator ruling > `tokens/tokens.json`
(locked machine truth, 2026-07-11) > `register/register.json` (composition law) >
component specs (`components/*/`) > the shipped DeflockOnSol site (upstream, private;
which carries known drift — see `docs/migration-map.md`).

**Two modes, one system:** *expressive* artifacts (posters, stickers, cards, social)
REQUIRE tilt/occlusion/figure (rules R1–R5); *ui* surfaces stay disciplined (R6:
straight containers, texture at budget, tilt only on stamp-class accents).

## 1. Index

| Path | What it is |
|---|---|
| `styles.css` | The one consumer entry — @imports fonts + generated tokens + base |
| `tokens/tokens.json` | LOCKED creative truth (plates, type, texture recipes, doctrine). Cite, never re-transcribe |
| `tokens/web-tokens.source.json` | Three-tier web token definitions (tier1 primitives → tier2 semantic → tier3 component), with provenance notes |
| `tokens/generated/df-tokens.css` | GENERATED output — never hand-edit |
| `tokens/fonts.css` · `tokens/base.css` | @font-face (5 statics + Oswald variable) · element baseline, focus ring, reduced-motion |
| `register/register.json` | Machine-readable rules R1–R6 + per-artifact acceptance checklists (share-card, poster, sticker, x-post, ui-screen) |
| `register/press-check.js` | Executable enforcement — audits a rendered DOM, stamps PASSED/PULLED |
| `register/REGISTER.md` | Human gloss + contribution model |
| `components/` | actions/Button · forms/Input,FormRow · surfaces/Panel · feedback/Badge,Toast · data/Metric,StatRow · navigation/SiteHeader,FooterStrip · overlay/Sheet — each `<Name>.jsx` + `.d.ts` (props contract) + `.prompt.md` (usage) + a specimen card |
| `ui_kits/website/` | Interactive 5-tab recreation of DeflockOnSol (reference implementation; `?presscheck` runs the ui audit) |
| `templates/` | `site-page/` (page shell) + `share-card/` (1080² expressive artifact, press-check wired) — seeds for consuming projects |
| `guidelines/` | 23 specimen cards (plates, type, texture, spacing, motion, brand, register, voice, press check) |
| `docs/` | `migration-map.md` (shipped→spec, the 6→1 button table) · `accessibility.md` (computed contrast law) · `responsive.md` (breakpoint behavior) |
| `assets/` | fonts/ · marks/ (emblem, coin badge) · motifs/ (murmuration) · cameras/ (subject glyphs) · mascot/ (plate remakes) · exemplars/ (register reference) |
| `scripts/` | `generate-tokens.mjs` (compile tokens) · `verify-tokens.mjs` (CI drift guard, exit 1) |
| `SKILL.md` · `readme.md` | Agent-skill entry · full design guide (voice, foundations, iconography) |

## 2. Needs-to-know: BUILDING with the system

Load: link `styles.css` (or ship `tokens/generated/df-tokens.css` + `tokens/fonts.css`
+ `tokens/base.css`) and self-host the 6 font binaries in `assets/fonts/`.

Hard rules, compressed (full detail: readme.md + docs/):
- **Plates only.** Paper `#f2ede3`, ink `#14100a` (never `#000`), red `#d92b1c`,
  gadsden `#e8b63a`. In code: semantic tokens (`--df-surface-*`, `--df-text-*`), never
  raw hexes. Red is rationed: 1–2 hits per view. NEVER red type on ink.
- **Red type is display-only** (4.2:1 on paper — fails normal-text AA): ≥24px, or
  ≥18.66px bold. Smaller = ink type + red non-text accent (ring, border, ▲ marker).
  Gadsden carries ink text only. Muted floor is `--df-text-muted` (7.1:1).
- **Type:** Archivo Black = slam (uppercase, `--df-leading-slam`); Oswald = labels
  (500/700 upper, +.08em) + body (400 sentence-case); Space Mono = meta/chrome
  (700 upper, +.12em, tabular numerals). Italics never; weights only 400/500/600/700
  (`font-synthesis: none` guards). Page titles: `--df-size-title-page` + misreg shadow.
- **Structure:** radius 0 (avatar circle is the sole exception); borders
  `--df-stroke-hairline` 1.5px ink (3px heavy for feature panels; dashed empty states);
  shadows are hard offsets only, never blurred.
- **States:** hover = `--df-hover-lift` + `--df-shadow-hover`; press = scale(.96)
  (icons .92) 120ms ease-out, transform-only; focus = 2px ink outline offset 2
  (paper ring on ink surfaces); disabled = opacity .55. Tap targets ≥44px.
- **Motion:** PRESS/REWARD/PLATE/CUT eases only; 120ms ui micro-interactions; no
  infinite loops; `prefers-reduced-motion` collapses to CUT (already in base.css).
- **Layout:** 8px unit; gutters `--df-chrome-margin` (4.5% short side); content column
  1184px; breakpoints 860 (panels stack) / 720 (bottom tab bar) / 430 (register floor —
  gutters and texture budgets hold). Z: header 10 · grain 20 · nav 30 · sheet 40.
- **Voice:** disclaimer wording exact (`COMMUNITY-MADE · UNAFFILIATED WITH DEFLOCK.ORG`);
  `$DEFLOCK` one line, never wrapped; `$DeFlock` in sentences; separators `·` or
  periods — no emdashes in artifact copy; no emoji; sound words CLICK/PING/PINNED/
  FLAGGED/SPOTTED/LOGGED; no invented numbers — unknown renders `—` + reason;
  uppercase via `text-transform`, never typed.
- **Components first.** Never hand-roll a button (that's how the site got 6 copies —
  `docs/migration-map.md` §2 maps every legacy class to a `Button` variant). Compose
  Panel/Badge/Toast/Metric/etc.; the kit screens show idiomatic composition.
- **Ship gate:** run the `ui-screen` checklist in `register/register.json`, or load
  `register/press-check.js` and require PASSED (kit: append `?presscheck`).

Icons: Lucide (production uses `lucide-react`; kits load the UMD). Brand glyphs and
marks: copy from `assets/` — never redraw; geometry SoT is the upstream Icons v2 master.

## 3. Needs-to-know: UPDATING the system

What is **operator-locked** (change only with a recorded ruling: date + ruling in the
value's `note`): plates, type classes, texture recipes, mark roles, doctrine wording,
register rules. What agents may **propose freely**: web tokens (tier2/3), component
specs, cards, templates, kit screens, docs — always with a `src:`/provenance note.
What is **never edited by hand**: `tokens/generated/df-tokens.css`, `_ds_bundle.js`,
`_ds_manifest.json` (build artifacts). Note: `_ds_bundle.js`, `_ds_manifest.json`, and
`templates/*/support.js` were generated by the upstream design harness, which is NOT in
this repo — they ship committed and cannot be rebuilt locally. Editing `components/*.jsx`
does not update the bundle; rendered surfaces stay on the committed bundle until an
upstream re-export. Only `tokens/generated/` is rebuildable here (`scripts/generate-tokens.mjs`).

Recipes:
- **Web token (add/change):** edit `tokens/web-tokens.source.json` in the right tier —
  tier1 physical primitives (may pointer into tokens.json via `{json:path}`), tier2
  semantic `{ref}` aliases, tier3 per-component. Add a provenance `note`. Then
  `node scripts/generate-tokens.mjs` → `node scripts/verify-tokens.mjs`. Never a raw
  hex in tier2/3 — reference tier1.
- **Locked value:** operator ruling first; edit `tokens/tokens.json`, record the ruling
  in `note`, regenerate, then sweep affected cards/docs for stale claims.
- **New component:** `components/<group>/<Name>.jsx` (named `export function <Name>`,
  React-only, style via `--df-*` vars, no raw hexes) + `<Name>.d.ts` (props contract —
  required) + `<Name>.prompt.md` (one-liner, JSX example, variants) + a `*.card.html`
  specimen. Card pattern: `<!-- @dsCard group="Components" viewport="700x<h>" ... -->`
  on line 1, link `../../styles.css`, load `../../_ds_bundle.js`, destructure the
  namespace INSIDE the render function, and keep the poll-guard before mounting (the
  bundle can load late; ungated destructure = blank card). One export home per name.
- **Component edit:** if it diverges from the shipped site, decide drift-vs-spec and
  log the row in `docs/migration-map.md`; update `.d.ts` + `.prompt.md` with the code.
- **Specimen card:** any `.html` with `@dsCard` line 1; ~700px wide, dense, no titles
  inside (the name renders outside).
- **Template:** `templates/<slug>/<Slug>.dc.html` with `@template` as the first
  template line + `<helmet><script src="./ds-base.js"></script></helmet>`; inline
  literal styles (paint-while-streaming), `hint-size` on every import, and gate any
  `{{ }}`-valued `img src` behind `sc-if` (an ungated hole fires a literal
  `%7B%7B...%7D%7D` request). `ds-base.js` holds the one `base` line consumers repoint.
- **Register rule:** requires a rejected-artifact example or operator ruling. Add to
  `register.json` (rule + checklist line) AND a matching assertion in `press-check.js`
  AND, if visual, a card. Law without enforcement is how the first system failed.
- **Assets:** copy binaries in; mascot recolors are scripted plate-posterizations
  (silhouette untouched) — keep originals for provenance. New fonts: never — the three
  families are locked; missing weights come from the family's canonical upstream only
  (`google/fonts`), license file alongside.
- **Upstream-harness constraint** (the bundler is not in this repo; kept so re-exports
  stay compatible): any PascalCase `.jsx` anywhere is swept into the component
  bundle — demo/kit scripts must be lowercase `.js` (Babel transpiles by `type`
  attribute, so JSX inside `.js` is fine).

Pitfalls that actually bit (don't repeat): ungated bundle destructure in cards; kit
screens as `.jsx` self-mounting inside the bundle; asserted-not-computed contrast
ratios; small red type (kickers/errors); prose emdashes inside specimen copy; a static
`node:fs` import in a script (the upstream harness's in-browser bundler sweeps `.mjs`
too — keep node imports dynamic inside a guarded `main()`).

## 4. Escalate, don't improvise

Operator-only: doctrine wording, plate/type/texture/mark changes, new register rules,
amounts/dates/claims of fact, mascot redesign (re-inking ≠ redesign). If a needed
fact, number, or asset does not exist: flag it and stop — never invent it.
