Ledger row for claims/receipts/holdings lists: hairline top rule, tabular numbers, meta value label right. Compose inside a Panel; first row usually drops its top rule.

```jsx
import { StatRow } from "./StatRow";
<Panel>
  <StatRow date="2026-07-09" title="$500.00" note="$DeFlock community confirmed donation via Discord." valueLabel="STATUS" value="Confirmed" style={{borderTop:"none",paddingTop:0}}/>
  <StatRow date="2026-07-11" title="$80.00" note="GitHub Sponsors contribution." valueLabel="STATUS" value="Confirmed"/>
</Panel>
```

Doctrine 5: only operator-verified rows — never invent amounts or dates.
