Text input — paper field, 1.5px ink border, 0 radius, Oswald label type. Usually composed inside FormRow.

```jsx
import { Input } from "./Input";
<Input id="zip" size="xl" inputMode="numeric" maxLength={5} placeholder="90210"/>
<Input invalid aria-invalid="true"/>
```

Sizes: lg 48px (default, panel forms) · xl 56px bold Oswald (hero forms). `invalid` = red hairline border — the red signal is non-text; the message itself renders via FormRow's error line in ink. Never rounded, never shadowed.
