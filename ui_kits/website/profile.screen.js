(() => {
const D = window.DF_DATA;
const u = (n) => `calc(var(--df-space-unit)*${n})`;
const meta = { margin: 0, fontFamily: "var(--df-font-meta)", fontSize: "var(--df-size-meta-sm)", fontWeight: 700, letterSpacing: "var(--df-tracking-meta)", lineHeight: 1.1, textTransform: "uppercase", overflowWrap: "anywhere" };
const slamH = { margin: 0, fontFamily: "var(--df-font-slam)", fontWeight: 400, letterSpacing: 0, lineHeight: "var(--df-leading-slam-max)", textTransform: "uppercase", textWrap: "balance" };
const copyS = { margin: `${u(1.5)} 0 0`, fontFamily: "var(--df-font-label)", fontSize: "clamp(15.2px,1.55vw,19.2px)", lineHeight: 1.25, maxWidth: "592px", textWrap: "pretty" };
const short = (a) => `${a.slice(0, 4)}…${a.slice(-4)}`;

function ProfileScreen() {
  const { Button, Panel, Badge, FormRow, Input, Sheet, Toast } = window.DeFlockDesign_d58f76;
  const p = D.profile;
  const [signedIn, setSignedIn] = React.useState(true);
  const [wallets, setWallets] = React.useState([D.accounts.claimWallet]);
  const [addr, setAddr] = React.useState("");
  const [err, setErr] = React.useState(null);
  const [sheet, setSheet] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const watch = (e) => {
    e.preventDefault();
    const a = addr.trim();
    if (a.length < 32) { setErr("Enter a valid Solana address."); return; }
    if (wallets.includes(a)) { setErr(p.watch.dupError); return; }
    setErr(null); setWallets([a]); setAddr(""); setToast("PINNED · WALLET WATCH SAVED.");
    setTimeout(() => setToast(null), 2600);
  };
  return (
    <section aria-labelledby="profile-title" style={{ display: "grid", gap: u(3), width: "min(100%, 1184px)", margin: "0 auto" }}>
      <Panel as="section" surface="quiet" halftone pad={4} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(272px,0.45fr)", gap: u(3), alignItems: "stretch" }}>
        <div>
          <p style={meta}>{p.kicker}</p>
          <h1 id="profile-title" style={{ ...slamH, fontSize: "var(--df-size-title-page)", marginTop: u(1), maxWidth: "880px" }}>{p.title}</h1>
          <p style={copyS}>{p.copy}</p>
        </div>
        <Panel as="article" pad={2.5} surface="bright" aria-label="Signed in identity" style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gridTemplateRows: "1fr auto", gap: u(2), minHeight: u(30) }}>
          {signedIn ? <>
            <span aria-hidden="true" style={{ display: "grid", width: "var(--df-avatar-size)", aspectRatio: "1", placeItems: "center", borderRadius: "var(--df-radius-avatar)", overflow: "hidden", background: "var(--df-color-ink)" }}>
              <img src="img/mascot-pfp-400.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </span>
            <div style={{ display: "grid", minWidth: 0, alignContent: "center", gap: u(0.75) }}>
              <span style={{ fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: "clamp(17.6px,2.6vw,26px)", lineHeight: 1.1, overflowWrap: "anywhere" }}>@you</span>
              <span style={meta}>{wallets.length ? p.roleBadgeSaved : p.roleBadge}</span>
            </div>
            <Badge variant="stamp" style={{ gridColumn: "1 / -1", justifySelf: "start" }}>HOLDER</Badge>
            <Button size="sm" onClick={() => setSignedIn(false)} style={{ gridColumn: "1 / -1", justifySelf: "start" }}>SIGN OUT</Button>
          </> : (
            <div style={{ display: "grid", gridColumn: "1 / -1", gridRow: "1 / -1", alignContent: "center", gap: u(1.5) }}>
              <p style={meta}>{p.signedOut.kicker}</p>
              <Button variant="primary" size="sm" onClick={() => setSignedIn(true)} style={{ justifySelf: "start" }}>{p.signedOut.button}</Button>
            </div>
          )}
        </Panel>
      </Panel>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(272px,0.8fr)", gap: u(3), alignItems: "start" }}>
        <Panel aria-labelledby="watch-wallet-title" surface="quiet" halftone style={{ display: "grid", gap: u(3) }}>
          <div>
            <p style={meta}>{p.watch.kicker}</p>
            <h2 id="watch-wallet-title" style={{ ...slamH, fontSize: "clamp(28.8px,5vw,52px)", marginTop: u(1) }}>{p.watch.title}</h2>
          </div>
          <form onSubmit={watch}>
            <FormRow label={p.watch.label} htmlFor="wallet-address" error={err}>
              <Input id="wallet-address" placeholder={short(D.accounts.feeVault)} value={addr} onChange={(e) => setAddr(e.target.value)} style={{ flex: "1 1 200px" }} />
              <Button size="lg" variant="primary" type="submit">{p.watch.button}</Button>
            </FormRow>
          </form>
          {wallets.length === 0 ? (
            <Panel as="div" variant="empty" style={{ display: "grid", minHeight: u(25), alignContent: "center", gap: u(1.5) }}>
              <span style={meta}>{p.watch.empty}</span>
            </Panel>
          ) : wallets.map((w) => (
            <Panel as="article" key={w} pad={2} surface="quiet" style={{ display: "grid", gap: u(2) }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: u(1.5), alignItems: "start", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ margin: `0 0 ${u(0.75)}`, fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: u(2.8), lineHeight: 1, overflowWrap: "anywhere" }}>{short(w)}</h3>
                  <span style={{ ...meta, display: "inline-block", padding: `${u(0.75)} ${u(1)}`, border: "var(--df-border-default)", background: "var(--df-color-gadsden)" }}>WATCHED</span>
                </div>
                <Button size="sm" variant="primary" style={{ fontSize: 10.8 }}>REFRESH</Button>
              </div>
              <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(144px, 1fr))", gap: u(1), margin: 0 }}>
                {[["$DEFLOCK", "—"], ["SOL", "—"]].map(([k, v]) => (
                  <div key={k} style={{ display: "grid", gap: u(0.75), padding: u(1.5), border: "var(--df-border-default)" }}>
                    <dt style={meta}>{k}</dt>
                    <dd style={{ margin: 0, fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: u(2.2), fontVariantNumeric: "tabular-nums" }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <p style={{ ...copyS, margin: 0 }}>{p.watch.pending}</p>
            </Panel>
          ))}
        </Panel>

        <Panel variant="stamp" aria-labelledby="verify-title" style={{ display: "grid", gap: u(3) }}>
          <div>
            <p style={meta}>{p.verify.kicker}</p>
            <h2 id="verify-title" style={{ ...slamH, fontSize: "clamp(28.8px,5vw,52px)", marginTop: u(1) }}>{p.verify.title}</h2>
            <p style={copyS}>{p.verify.body}</p>
          </div>
          <Button variant="primary" size="lg" onClick={() => setSheet(true)} style={{ justifySelf: "start" }}>{p.verify.button}</Button>
        </Panel>
      </div>

      <Sheet open={sheet} onClose={() => setSheet(false)} title={p.verify.sheetTitle}>
        <p style={{ ...copyS, margin: 0 }}>{p.verify.sheetBody}</p>
        <p style={{ ...copyS, margin: 0 }}>{p.verify.sheetHint}</p>
        <Button variant="primary" size="lg" onClick={() => setSheet(false)} style={{ justifySelf: "start" }}>{p.verify.sheetButton}</Button>
      </Sheet>
      {toast && <Toast variant="neutral" fixed>{toast}</Toast>}
    </section>
  );
}
window.ProfileScreen = ProfileScreen;
})();
