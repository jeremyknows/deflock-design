Form row in the $DeFlock grammar: meta label, input + submit on one row, error line in ink meta with a red ▲ marker (red type fails AA at meta size; the invalid input border carries the red).

```jsx
import { FormRow } from "./FormRow"; import { Input } from "./Input";
import { Button } from "../actions/Button";
<FormRow label="ZIP code" htmlFor="zip" error={err}>
  <Input id="zip" size="xl" inputMode="numeric" maxLength={5} placeholder="90210"
    value={zip} onChange={e => setZip(e.target.value)} style={{ flex: "1 1 160px" }} />
  <Button size="xl" type="submit">CHECK MAP</Button>
</FormRow>
```

Input sizes: `lg` 48px (panel forms), `xl` 56px bold Oswald (hero forms). Error copy is declarative watchdog, uppercase-friendly, no apologies. Inputs never get rounded corners or drop shadows.
