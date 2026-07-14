# Press Receipts — df-press-receipt/1

WE KEEP RECEIPTS. A press receipt is a tamper-evident, self-verifiable record of how a
specific artifact ran against the composition register. It is minted by the same
executable check that enforces the register (`press-check.js`) — the check is the
authority, not a key.

## Two kinds of receipt — the register is the house style, not a cage

- **PRESS** (`"kind": "PRESS"`, verdict `PASSED THE PRESS`) — the artifact passes the
  full register. The house-style badge; what official channels look for.
- **ARTIST'S PROOF** (`"kind": "ARTISTS_PROOF"`, verdict `ARTIST'S PROOF`) — the
  artifact departs from the register **on purpose**. In printmaking, an artist's proof
  is a print pulled outside the numbered edition: legitimate, often more collectible,
  deliberately non-standard. The receipt records the departures (`departures: [...]`)
  as provenance, not judgment. Remix loudly — the proof keeps your receipts.

The only thing that refuses a receipt is the **keel** — the honesty layer: work flying
the `$DEFLOCK` ticker must carry the exact line
`COMMUNITY-MADE · UNAFFILIATED WITH DEFLOCK.ORG`. Everything aesthetic is remixable.

## Mint one

Render your artifact (served over localhost/https — WebCrypto needs a secure context),
then in the console:

```js
await pressReceipt({ mode: "expressive", set: "marked" })   // ui/clean as appropriate
copy(JSON.stringify(window.__lastPressReceipt, null, 1))     // save as my-artifact.receipt.json
```

Full pass mints a PRESS receipt; departures mint an ARTIST'S PROOF automatically —
only a keel violation is refused (add the disclaimer line and re-mint). Share the
receipt JSON alongside the artifact, and share the artifact's HTML source (the receipt
binds to it).

## What a receipt contains

```json
{
  "id": "DF-<first 16 hex of sha256(canonical payload)>",
  "payload": {
    "spec": "df-press-receipt/1",
    "checker": "press-check/1.1.0",
    "register": "1.1.0",
    "tokensLocked": "2026-07-11",
    "mode": "expressive",
    "set": "marked",
    "kind": "PRESS",
    "verdict": "PASSED THE PRESS",
    "departures": [],
    "rules": [{ "id": "R1 tilt", "pass": true, "detail": "…" }],
    "domSha256": "<sha256 of the serialized document (html element) with ALL script tags and the press-stamp stripped>",
    "createdAt": "<ISO timestamp, informational>"
  }
}
```

Canonicalization: JSON with recursively sorted keys, UTF-8, SHA-256 (`stableStringify`
in press-check.js; byte-identical copy in `scripts/verify-receipt.mjs`).

## Verify one

- **Full verification (browser):** serve the repo root, open
  `register/verify-receipt.html`, give it the artifact path + receipt JSON. It checks
  four things: the receipt recomputes (integrity), the recorded verdict is PASS, the
  artifact re-passes the register at the receipt's mode/set, and the re-rendered
  document hash matches `domSha256` (binding). Verification is **script-free**: the
  verifier fetches the artifact source, strips every `<script>`, renders it in a
  sandboxed iframe (no JS executes), and runs its OWN copy of press-check against that
  DOM — a malicious artifact cannot substitute a fake checker or fake serializer.
- **Quick integrity check (CI/bots, no browser):** `node scripts/verify-receipt.mjs
  my-artifact.receipt.json` — validates structure, recomputes the id, confirms all rules
  pass. Exit 0/1. It does NOT re-render; binding needs the browser page.

## What a receipt proves — and what it doesn't

**Proves:** this exact artifact document (head, styles, and body — everything except
`<script>` tags), rendered, produced exactly the recorded rule table against register
`1.1.0` under the recorded mode/set — a full pass for PRESS, the recorded departures
for an ARTIST'S PROOF. Any edit to the receipt, or any non-script edit to the
artifact, breaks verification (the verifier requires the re-run to REPRODUCE the
recorded table, and re-checks the keel for proofs). External resources
(linked CSS, images) are not hashed — but an external edit that changes composition is
caught by the register re-run.

**Does not prove:** who made it, when it was really made (the timestamp is the minting
browser's clock), that maintainers endorsed it, or that it has register *energy* — a
receipt is necessary, not sufficient; humans still rule on energy. It binds the HTML
source, not exported pixels: a PNG is a render *of* a receipted source, so keep the
source shareable. Because verification strips scripts, receipts are for **static HTML
artifacts** — if your artifact needs JS to render (React hydration), export the
rendered result to static HTML and receipt that.

**No keys, on purpose.** There is no secret to steal and no signature to forge — anyone
can mint a receipt *by actually passing the check*, which is exactly the norm this
system wants. The threat model is "did this really pass?", and that is answerable by
anyone with the repo. Official-channel acceptance (per LICENSE-assets.md) = valid
receipt + maintainer judgment.

## Gotchas

- `file://` and plain http on a non-localhost host have no WebCrypto — mint and verify
  from `npx serve` / `python3 -m http.server` (localhost) or any https host.
- The document hash is computed **after** render with every `<script>` tag, the
  `.press-stamp`, and injected verify elements stripped — script-generated DOM will
  differ between mint (scripts ran) and verify (scripts stripped), and client-side
  randomness breaks binding; artifacts are static by doctrine anyway.
- Receipts bind whole documents: `pressReceipt` refuses a custom `root` — mint from the
  artifact page itself, one artifact per page.
- Re-verification must use the same register version; a receipt minted on register
  `1.1.0` may legitimately fail re-check on a future register. The receipt records its
  versions so you know what you're holding.
