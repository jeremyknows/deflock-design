# Examples — receipted reference artifacts

Two minimal artifacts that pass the register, each shipped with the actual press
receipt it minted (`*.receipt.json`). Use them three ways:

- **As starting points** — the smallest possible marked-set and clean-set expressive
  artifacts that PASS. Copy one and grow it.
- **As a receipts demo** — serve the repo root, open
  `/register/verify-receipt.html`, give it `/examples/marked-example.html` + the
  contents of `marked-example.receipt.json` → RECEIPT VERIFIED. Then change one
  character in the artifact and watch binding fail.
- **As CI fixtures** — `node scripts/verify-receipt.mjs examples/marked-example.receipt.json`
  exercises the integrity path without a browser.

| Artifact | mode/set | Kind | Receipt |
|---|---|---|---|
| `marked-example.html` | expressive/marked (disclaimer + $DEFLOCK ticker) | PRESS | `DF-95a14edb139c2ea8` |
| `clean-example.html` | expressive/clean (artwork only — no furniture) | PRESS | `DF-4ea0457cbbe17854` |
| `artists-proof-example.html` | expressive/marked, deliberately off-register (straight, borrowed blue) | ARTIST'S PROOF | `DF-fbf5d2990e01281e` |

The artist's proof shows the creativity path: it departs from four register rules on
purpose, keeps the keel (ticker + exact disclaimer), and still gets a fully verifiable
receipt — departures recorded as provenance, not judgment.

If `register/press-check.js` or the register rules change, these receipts may stop
re-verifying (they record register 1.1.0) — re-mint them as part of that change.
Spec: `../register/RECEIPTS.md`.
