---
name: deflock-design
description: Use this skill to generate well-branded interfaces and assets for the $DeFlock community (DeflockOnSol; community-made, unaffiliated with deflock.org) — production UI, prototypes, mocks, or expressive content artifacts. Contains the locked plate palette, three type classes, texture recipes, composition-register rules, generated design tokens, React components, and the website UI kit.
user-invocable: true
---

Riso/screen-print protest ephemera for a community memecoin (unaffiliated with deflock.org). Work in this order; where a rule conflicts with instinct, the rule wins.

1. Read `readme.md` — context, voice, visual foundations, file index.
2. Take values only from tokens. Locked creative law: `tokens/tokens.json`. Web UI: `tokens/generated/df-tokens.css` — to change it, edit `tokens/web-tokens.source.json` and rerun `node scripts/generate-tokens.mjs`. Never hand-edit generated output; never re-type a hex.
3. Pick your mode in `register/register.json` and obey it:
   - expressive (posters, stickers, social, share cards): tilt, occlusion, and a figurative element are REQUIRED (rules R1-R5);
   - ui (pages, forms, dashboards): containers straight, texture at budget, tilt only on stamp-class accents (rule R6).
   Before presenting anything, run the acceptance checklist for your artifact class from that same file. Automated: load `register/press-check.js` into the rendered artifact (or call `pressCheck({mode})`) — it stamps PASSED/PULLED and logs a per-rule table; ship only on PASS.
4. Absolutes — no interpretation: cameras always intact · disclaimer wording exact · no URLs outside the disclaimer · no emdashes in artifact copy · no invented numbers (unknown renders as "—" plus the reason) · $DEFLOCK never wraps · plates only (paper/ink/red + sanctioned gadsden; red type only at display sizes) · no emoji · never redraw marks — copy the files in `assets/`.
5. Build:
   - HTML artifacts and prototypes: link `styles.css`, compose from `components/` (each has a `.prompt.md` with usage), start from `templates/` (site-page, share-card) or crib full pages from `ui_kits/website/`;
   - production code: read `AGENTS.md` (implementation handoff + update playbook), then `docs/migration-map.md`, `docs/accessibility.md`, `docs/responsive.md`.
6. Missing fact, number, or asset? Ask. Never invent it.

If invoked with no other guidance, ask what the user wants to build, then act as an expert $DeFlock designer producing HTML artifacts or production code as the need dictates.
