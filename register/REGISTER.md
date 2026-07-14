# The Register Layer — why work that "follows the tokens" still fails

`register.json` is machine law for **composition** — the layer the 2026-07-14 360 audit
found missing: `tokens.json` encodes *ingredients* (plates, type, texture recipes) but an
agent following it faithfully still produced work the operator rejected as sterile
("no rebellion"). These six rules ARE the rebellion. Parse `register.json`; this file is
the human gloss.

## The six rules

- **R1 tilt-default** — expressive artifacts lean. ≥2 rotated elements, opposing signs
  (stamps −4°..4°, blocks −1.5°..−2°). Axis-locked = off-brand. UI exception: tilt only
  on stamp-class accents.
- **R2 occlusion** — one element overlaps the frame border or the type. Hand-assembled,
  not templated. Never occlude the disclaimer, ticker, or camera anatomy.
- **R3 figurative-element** — every expressive artifact carries a figure: murmuration,
  breakthrough emblem, camera subject, mascot. Swooshes carry no meaning here.
- **R4 avatar-as-hero** — on personal artifacts the human is the hero: polaroid-slap or
  ring-break, never a corner glyph.
- **R5 case-follows-speech-act** — watchdog voice slams uppercase at the surveilled;
  first-person pledges run sentence case with misregistration. Both brand-true.
- **R6 expressive-ui-split** — R1–R4 are *requirements* for content and *violations* for
  body-level UI. A data table at −2° is as wrong as an axis-locked poster.

## Acceptance checklists

`register.json > checklists` carries the per-artifact-class QA gates (share-card, poster,
sticker, x-post, ui-screen): doctrine compliance (C), register (R), legibility floors (L),
texture budgets (T), accessibility (A), contrast (K), states (H). An agent finishing an
artifact runs its class checklist before showing the operator. Legibility floor of record:
slam ≥8% of frame height at feed scale.

## Contribution / change model

Team shape: 1–2 maintainers + AI agents produce; **the maintainers approve** ("operator"
elsewhere in this system = the maintainers' final human authority).

1. **Doctrine amendments are operator-only** (voice ruling, then codified in
   `tokens.json.doctrine` — the canonical wording — before any use).
2. **Locked values** (plates, type classes, texture recipes, mark roles) change only by
   operator ruling; record the date + ruling in the token's `note`, regenerate CSS.
3. **New web tokens/components**: agents propose in `tokens/web-tokens.source.json` +
   component spec with a `src:` provenance note; maintainer merges; operator sees the
   rendered specimen card, not the diff.
4. **Register rules** (this layer): amendments require a rejected-artifact example or an
   operator ruling — rules exist because token-compliant work failed without them.
5. Every generated artifact ships with its checklist verdict; a failed checklist is a
   do-not-ship, not a style note.

## Enforcement — press-check.js

The law executes. `press-check.js` audits a rendered DOM against this register and
stamps the verdict (tilted riso stamp, top-right: PASSED THE PRESS / PULLED · <rule ids>),
plus a per-rule console table. Zero dependencies.

```html
<script src="../register/press-check.js" data-press-auto data-press-mode="expressive" data-press-set="marked"></script>
<!-- or programmatic, e.g. per-frame: -->
<script>pressCheck({ root: document.getElementById('poster'), mode: 'expressive', set: 'marked' });</script>
```

Checked mechanically: R1 opposing tilts · R2 frame-edge occlusion · R3 sanctioned figure
· R6 straight containers (ui) · C2 plates-only computed colors · C1 disclaimer wording,
unbroken $DEFLOCK ticker, prose emdashes (marked set) or artwork-only furniture check
(clean set — doctrine 2) · K red type at large-text floor · L slam ≥8% of frame · T red
flood ≤15% · A tap targets, reduced-motion, focus-visible (ui).
A PASS is necessary, not sufficient — the maintainers still rule on register energy.

## Receipts — proof a piece passed

A PASS can mint a **press receipt**: `await pressReceipt({ mode, set })` returns a
tamper-evident record (rule table + artifact DOM hash, self-verifying id) that anyone
can check with `register/verify-receipt.html` (full re-run + binding) or
`node scripts/verify-receipt.mjs` (integrity, CI-friendly). Receipts mint only on PASS.
Official-channel submissions should carry one. Full spec + threat model: `RECEIPTS.md`.
