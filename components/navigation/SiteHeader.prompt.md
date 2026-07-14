Site chrome: `SiteHeader` (sticky wordmark + tab nav, bottom tab bar ≤720px) and `FooterStrip` (disclaimer · quiet ticker · risk note · contact).

```jsx
import { SiteHeader } from "./SiteHeader"; import { FooterStrip } from "./FooterStrip";
const tabs = [
  { href: "/", label: "Why DeFlock", mobileLabel: "Why" },
  { href: "/raid-station", label: "Raid Station", mobileLabel: "Raid" },
  { href: "/library", label: "Library", mobileLabel: "Library" },
  { href: "/donations", label: "Donations", mobileLabel: "Donate" },
  { href: "/profile", label: "Profile", mobileLabel: "Profile" },
];
<SiteHeader tabs={tabs} activeHref="/library" onNavigate={setRoute}/>
…
<FooterStrip contactEmail="contact@deflockonsol.example"/>
```

Law: the wordmark is `$DEFLOCK`, one line, never hyphenated or stacked. The disclaimer wording is exact and non-editable. The footer ticker is the QUIET wordmark (Space Mono 700), not slam.
