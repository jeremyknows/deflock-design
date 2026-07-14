Data display: `Metric` (KPI cards) + `StatRow` (ledger rows). Doctrine 5: only operator-verified numbers — never invent amounts, deadlines, or prices; use the frozen fixtures.

```jsx
import { Metric } from "./Metric"; import { StatRow } from "./StatRow";
<div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"calc(var(--df-space-unit)*2)"}}>
  <Metric eyebrow="CLAIMED SOL" label="Claimed by wallet" value="2.417633 SOL" sub="$542.09 mark-to-market" wash="accent"/>
  <Metric eyebrow="CLAIMABLE SOL" label="Claimable now" value="0.412808 SOL" sub="unclaimed vault estimate" nudge/>
  <Metric eyebrow="NEEDS RECEIPTS" label="Needs receipts" value="$211.05" sub="50% allocation minus receipts" wash="red"/>
</div>
<Panel><StatRow date="2026-07-12" title="$120.00" note="VPS hosting receipt" valueLabel="STATUS" value="Confirmed"/></Panel>
```

All numbers `tabular-nums`. The `nudge` prop is the hand-set vertical offset from the shipped donations grid — keep it on at most one card per row.
