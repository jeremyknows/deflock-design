Panel/card surface — every boxed region of a $DeFlock page. Hairline 1.5px ink border, no radius, no soft shadows (hard offsets only).

```jsx
import { Panel } from "./Panel";
<Panel>…default card…</Panel>
<Panel variant="raised" halftone>…feature panel (zip widget)…</Panel>
<Panel variant="stamp" aria-labelledby="verify-title">…red stamp verify panel…</Panel>
<Panel variant="accent">…gadsden wash result panel…</Panel>
<Panel variant="empty">No assets in this set yet.</Panel>
```

Rules: panels sit straight (register R6 — tilt is for stamps/badges, never containers). `raised` is for at most 1–2 feature panels per page. The red `stamp` panel is the loudest allowed UI treatment; one per view.
