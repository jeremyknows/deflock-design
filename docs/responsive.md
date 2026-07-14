# Responsive Rules — how the register adapts

Masters are desktop/print-first; these rules govern the web register at small sizes.
Breakpoints: `--df-bp-panel` 860 · `--df-bp-site` 720 · `--df-bp-tight` 430 (+ shipped
micro-floors 419/374). Values from the shipped upstream site CSS; keep exact.

## ≤860px (panel stack)
- Two-column grids (profile hero, contentGrid, holdings) → single column.
- Sheets stretch full-width (`justify-self: stretch`).

## ≤720px (site collapse)
- Header un-sticks and centers the wordmark; **nav docks as a fixed bottom tab bar**
  (5 equal columns, short labels, halftone paper ground, top hairline).
- `site-main` bottom padding grows to 80px; footer stacks vertically and adds 76px
  bottom padding so the tab bar never occludes the disclaimer.
- Wordmark drops to 24px (label-min). KPI/impact/account grids → single column.
- Form rows stack; submit buttons go full-width.

## ≤430px (register floor)
- **Chrome margin holds at 4.5%** — never collapse gutters to zero.
- Slam floors: page titles bottom out at 28px (1.75rem), hero at 40–45.6px
  (clamp floor); meta ≥11.6px, body ≥14.8px. Below these, cut words, not sizes.
- **Texture budgets do not scale down** — halftone pitch stays 9px, alpha .10–.16;
  grain .05. Texture is identity, not decoration.
- Misregistration stays .045em (em-relative, scales with type automatically).
- Tilt angles hold (−4°..4° stamps); occlusion elements may move inboard but one
  overlap survives on expressive artifacts.
- ≤419px: hero mark image may hide entirely. ≤374px: action rows go full-width grid.
- Ticker law is absolute at every width: `$DEFLOCK` never wraps — shrink or use the
  fallback ladder (slam wordmark → quiet wordmark → nothing).
