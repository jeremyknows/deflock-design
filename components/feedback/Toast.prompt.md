Alert strip / docked toast. Confirmation copy uses the sanctioned sound words only: CLICK · PING · PINNED · FLAGGED · SPOTTED · LOGGED.

```jsx
import { Toast } from "./Toast";
<Toast icon={<i data-lucide="shield-check"/>}>USD values are mark-to-market estimates unless tied to a concrete receipt.</Toast>
<Toast variant="alert">QUERY DID NOT LAND · Try the ZIP again in a minute.</Toast>
<Toast variant="neutral" fixed>PINNED · Wallet added to your watch list.</Toast>
```

warning = gadsden wash (data caveats); alert = red wash (failures; red is rationed); neutral = card fill. No success-green exists in this system — confirmations are neutral + sound word.
