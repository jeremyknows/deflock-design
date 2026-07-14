Modal sheet — the profile wallet-sheet pattern. Sheets dock bottom-right like a slip of paper on the pile; never centered glass modals, never rounded, never blurred backdrops.

```jsx
import { Sheet } from "./Sheet";
<Sheet open={open} onClose={() => setOpen(false)} title="Link a wallet">
  <p>Paste a Solana address to watch it on this profile.</p>
  <FormRow label="Wallet address"><Input id="addr"/><Button variant="primary">PIN IT</Button></FormRow>
</Sheet>
```

Backdrop is ink at 48% — flat, no blur. One sheet at a time. Keep titles slam-short ("LINK A WALLET").
