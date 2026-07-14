# UI Kit — DeflockOnSol website

Interactive recreation of the DeflockOnSol site (upstream, private), rebuilt on the
DeFlock Design components + generated tokens. Open `index.html`: all five tabs work
(routing persists), the ZIP checker simulates its four states, Profile signs in/out,
watches a wallet (toast), and opens the verify Sheet; Library filters.

Files: `index.html` (shell) · `data.js` (verbatim site copy + frozen fixture data —
doctrine 5: live RPC numbers render as "—", never invented) · `why.screen.js` ·
`donations.screen.js` · `profile.screen.js` · `library.screen.js` (also RaidScreen) ·
`app.screen.js` · `img/` (real library assets + marks). The .js extension is deliberate:
any .jsx is swept into the DS component bundle (Babel transpiles by the script type
attribute, so JSX inside .js works).

Faithfulness notes: layout/values lifted from `globals.css` + module CSS; where the spec
FIXES shipped drift the kit follows the spec (1.5px borders in library cards, no
synthesized 800/900 weights, Space Mono footer ticker, reduced-motion). Share-card
carousel is omitted (renders via a live API route); the verify panel (its flag-on
sibling) stands in. Icons: lucide via CDN, as in production (lucide-react).

Dev flag: append `?presscheck` to the URL to run the register press check in ui mode
(verdict stamp top-right + per-rule console table).
