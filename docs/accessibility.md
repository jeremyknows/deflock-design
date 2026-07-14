# Accessibility Standards — DeFlock web UI

New with this system (upstream creative handoff — not included in this repo); the shipped site had none. Checklist form lives in
`register/register.json > checklists.ui-screen` (A + K items).

## Contrast per plate pairing (computed WCAG ratios)
- **ink/paper 16.2:1** — unrestricted, both directions.
- **red on paper / paper on red 4.2:1** — FAILS normal-text AA. Red TYPE is
  large-text-only: **≥24px regular or ≥18.66px bold** (red is display/stamp material
  anyway). Non-text red (borders, rings, stamps, markers): fine (≥3:1).
  UI consequence: kickers and error lines render INK type; red moves to the non-text
  accent (Badge kicker ring, invalid input border, ▲ error marker).
- **ink on gadsden 10.1:1** — unrestricted. **Paper on gadsden 1.6:1 — banned.**
  Gadsden surfaces always carry ink.
- **red on ink — banned by plate law** (3.9:1 fails normal-text AA anyway).
- Muted text is `--df-text-muted` (ink 72% mix, 7.1:1); never go lighter for body.

## Focus
- Every interactive element: `outline: var(--df-focus-ring)` (2px solid ink) +
  `outline-offset: 2px` via global `:focus-visible` (tokens/base.css). On ink-filled
  controls the offset gap supplies contrast; on ink SURFACES use `--df-focus-ring-inverse`
  (paper). Never remove focus outlines; never replace with color-only shifts.

## Motion
- `prefers-reduced-motion: reduce` collapses ALL transitions/animations to instant
  (tokens/base.css, global). This is brand-coherent: riso has no tweens — reduce = CUT.
- Never animate on infinite loops in UI; specimen/demo loops must sit inside
  `@media (prefers-reduced-motion: no-preference)`.
- Press/hover transforms are `transform`-only (compositor-safe), 120ms.

## Targets + semantics
- Tap targets ≥44px (`--df-control-h-md` floor); icon buttons ≥44×44.
- Uppercase is applied via `text-transform`, never typed, so screen readers get
  sentence-case source text.
- Status strips use `role="status"`; failures `role="alert"` (Toast does this).
- Sheets: `role="dialog" aria-modal`, Escape + backdrop dismiss (Sheet does this).
- The grain overlay and all texture layers are `aria-hidden` / decorative CSS only.
- `font-synthesis: none` globally — fake bold/italic (the 800/900 drift) cannot render.
