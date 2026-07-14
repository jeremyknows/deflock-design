# Migration Map — moving the site onto DeFlock Design

Drift record for the upstream DeflockOnSol site codebase (private; not included in this
repo) — kept public as the rationale log for spec-vs-shipped decisions.
What changes in the Next.js app, and which design-system masters remain law untouched.
Every row is a **known production gap** (spec ≠ shipped) unless marked hygiene.

## 1. Token layer (root cause fix)
| Current | Action |
|---|---|
| `src/styles/tokens.css` (hand-synced mirror of tokens.json) | DELETE. Replace with generated `tokens/generated/df-tokens.css` produced by `scripts/generate-tokens.mjs` (add to build/CI: `node scripts/verify-tokens.mjs` fails on drift). |
| `--font-display/label/meta` from next/font | Keep next/font loading; point `--df-font-slam/label/meta` at those vars in one place, or self-host the 5 ttfs per `tokens/fonts.css`. |
| `src/app/api/share-card/route.tsx` hardcoded plate hexes (3rd copy) | Import values from `tokens/tokens.json` at build time. **Also fix reversed misregistration**: law is red down-right `.045em .03em` (recorded ruling: register.json > misregDirection). |

## 2. Buttons (6 → 1)
Replace with the `Button` component spec (or its CSS equivalent classes):
- `globals.css .why-cta(-primary/-secondary)` → Button primary/secondary md
- `globals.css .zip-form button` → Button primary xl (label font)
- `globals.css .donations-link-row a (+link-primary/link-accent)` → Button secondary/primary/accent sm–md
- `profile .signInButton/.signOutButton` → Button primary/secondary sm
- `profile .inputRow button, .verifyPanel button, .shareButton, .sheet>button, .shareArrow` → Button primary lg / iconOnly
- `library .filter/.download/.submitLink/.queueLink/.copyButton`, `raid .openLink/.kitChip`, `submit .submitButton`, `queue .actions button` → Button chip/secondary/accent per role
- Unify disabled opacity at .55 (sheet ships .45); unify press scale(.96)/(.92 icon).

## 3. Border drift
`library.module.css` hardcodes `2px solid` 11× (+ raid-station `2px`) where law is
`var(--df-stroke-hairline)` 1.5px (profile is correct). Find/replace + visual pass.

## 4. Type drift
- `library/raid` `font-weight: 800/900` on Oswald/Space Mono — weights that don't exist
  (synthesized). Set 700; global `font-synthesis: none` now guards this.
- Footer ticker `.footer-ticker` uses slam family → quiet wordmark is Space Mono 700 (P1-6).
- `library/raid` rem-based one-off sizes (0.78rem etc.) → nearest token (`--df-size-meta*`).

## 5. Missing states/standards (new, additive)
- Add `prefers-reduced-motion` block (tokens/base.css) — site has zero usage.
- Standardize hover = `--df-hover-lift` + `--df-shadow-hover` (library had it; globals pages have none).
- Focus: keep global 2px ink; add `--df-focus-ring-inverse` on ink surfaces.
- Sheet z-index 30 → `--df-z-sheet` 40 (currently ties the mobile nav).
- Small red type (kickers, error lines) is 4.2:1 → fails normal-text AA: render ink type;
  red moves to non-text accents (kicker ring, invalid input border, ▲ error marker).

## 6. Remains law elsewhere (do NOT migrate)
Print, stickers, posters, comics, X templates, motion beat grammar: the locked
upstream creative masters (not included in this repo) + `tokens.json`. This system ADDs
the web tier; it never edits locked creative law. Mascot art: new plate remakes in
`assets/mascot/` (superseded blue renders kept upstream for provenance).
