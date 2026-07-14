(() => {
const D = window.DF_DATA;
const u = (n) => `calc(var(--df-space-unit)*${n})`;
const meta = { margin: 0, fontFamily: "var(--df-font-meta)", fontSize: "clamp(10px,1.2vw,16px)", fontWeight: 700, letterSpacing: "var(--df-tracking-meta)", lineHeight: 1.05, textTransform: "uppercase" };
const slamH = { margin: 0, fontFamily: "var(--df-font-slam)", fontWeight: 400, letterSpacing: 0, lineHeight: "var(--df-leading-slam-max)", textTransform: "uppercase" };
const short = (a) => `${a.slice(0, 4)}…${a.slice(-4)}`;
const Icon = ({ n, s = 14 }) => <i data-lucide={n} style={{ width: s, height: s, display: "inline-flex" }} aria-hidden="true"></i>;

function Head({ rows }) {
  return (
    <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", gap: u(2), marginBottom: u(2.5) }}>
      <div><p style={meta}>{rows[0]}</p><h2 style={{ ...slamH, fontSize: "clamp(24px,4.5vw,48px)" }}>{rows[1]}</h2></div>
      <span style={{ ...meta, display: "inline-flex", minHeight: u(5.5), alignItems: "center", padding: `${u(1)} ${u(1.25)}`, border: "var(--df-border-default)", fontSize: 12, letterSpacing: 0 }}>{rows[2]}</span>
    </div>
  );
}

function DonationsScreen() {
  const { Button, Panel, Badge, Metric, StatRow, Toast } = window.DeFlockDesign_d58f76;
  const d = D.donations;
  const acct = (label, address) => (
    <Button key={label} size="md" href={`${D.links.solscanAccount}${address}`} target="_blank" style={{ fontSize: 12, letterSpacing: 0, justifyContent: "center" }}>{label}: {short(address)} <Icon n="external-link" /></Button>
  );
  return (
    <div style={{ display: "grid", gap: u(3), width: "min(100%, 1184px)", margin: "0 auto" }}>
      <section aria-labelledby="donations-title" style={{ display: "grid", gap: u(2), padding: `0 0 ${u(1.5)}`, background: "linear-gradient(90deg, color-mix(in srgb, var(--df-color-gadsden) 18%, transparent), transparent 54%)" }}>
        <div>
          <p style={meta}>{d.meta}</p>
          <h1 id="donations-title" style={{ ...slamH, fontSize: "var(--df-size-title-page)", lineHeight: 1.05, textShadow: "var(--df-misreg-shadow)", maxWidth: "768px" }}>{d.title}</h1>
          <p style={{ margin: `${u(1.5)} 0 0`, fontFamily: "var(--df-font-label)", fontSize: "clamp(14.4px,1.5vw,19.2px)", lineHeight: 1.25, maxWidth: "656px" }}>{d.body}</p>
        </div>
        <div aria-label="Donation dashboard links" style={{ display: "flex", flexWrap: "wrap", gap: u(1), justifySelf: "start" }}>
          <Button variant="primary" href={D.links.buyCoffee} target="_blank" style={{ fontSize: 12, letterSpacing: 0 }}>Donate <Icon n="external-link" s={15} /></Button>
          {acct("Claim wallet", D.accounts.claimWallet)}
          {acct("Fee vault", D.accounts.feeVault)}
          <Button variant="accent" href={D.links.communityX} target="_blank" style={{ fontSize: 12, letterSpacing: 0 }}>Community X <Icon n="external-link" s={15} /></Button>
          <Button href={D.links.pumpfun} target="_blank" style={{ fontSize: 12, letterSpacing: 0 }}>Buy $DeFlock <Icon n="external-link" s={15} /></Button>
        </div>
      </section>

      <section aria-label="Donation metrics" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: u(2) }}>
        {d.kpis.map((k) => <Metric key={k.eyebrow} {...k} />)}
      </section>

      <Panel aria-labelledby="impact-title">
        <Head rows={d.impact.head} />
        <dl style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: u(2), margin: 0 }}>
          {d.impact.rows.map(([dt, dd]) => (
            <div key={dt} style={{ minWidth: 0, paddingTop: u(1.5), borderTop: "var(--df-border-default)" }}>
              <dt style={{ ...meta, fontSize: 12, letterSpacing: 0, lineHeight: 1.2 }}>{dt}</dt>
              <dd style={{ margin: `${u(0.5)} 0 0`, fontFamily: "var(--df-font-slam)", fontSize: "clamp(24px,4.6vw,44px)", lineHeight: "var(--df-leading-slam-max)", textTransform: "uppercase", fontVariantNumeric: "tabular-nums", overflowWrap: "anywhere" }}>{dd}</dd>
            </div>
          ))}
        </dl>
        <Toast icon={<Icon n="shield-check" s={16} />} style={{ marginTop: u(2), background: "transparent", border: "none", borderTop: "var(--df-border-default)", padding: `${u(2)} 0 0`, textTransform: "none", fontFamily: "var(--df-font-label)", fontSize: 15, fontWeight: 400, letterSpacing: 0 }}>{d.impact.note}</Toast>
      </Panel>

      <Panel aria-labelledby="receipts-title">
        <Head rows={d.receipts.head} />
        <div style={{ display: "grid", gap: u(1) }}>
          {d.receipts.rows.map((r) => <StatRow key={r.date} date={r.date} title={r.amount} note={r.note} valueLabel={r.status} />)}
        </div>
        <dl style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: u(2), margin: `${u(2)} 0 0` }}>
          {d.receipts.totals.map(([dt, dd]) => (
            <div key={dt} style={{ paddingTop: u(1.5), borderTop: "var(--df-border-default)" }}>
              <dt style={{ ...meta, fontSize: 12, letterSpacing: 0 }}>{dt}</dt>
              <dd style={{ margin: `${u(0.5)} 0 0`, fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: 18, fontVariantNumeric: "tabular-nums" }}>{dd}</dd>
            </div>
          ))}
        </dl>
      </Panel>

      <Panel aria-labelledby="legacy-title" surface="accent-strong" halftone raised style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(256px,auto)", gap: u(3) }}>
        <div>
          <Badge variant="solid" style={{ marginBottom: u(1.5) }}>{d.legacy.badge}</Badge>
          <p style={meta}>{d.legacy.meta}</p>
          <h2 id="legacy-title" style={{ ...slamH, fontSize: "clamp(24px,4.5vw,48px)" }}>{d.legacy.title}</h2>
          {d.legacy.paras.map((p, i) => <p key={i} style={{ margin: `${u(1.5)} 0 0`, fontFamily: "var(--df-font-label)", fontSize: "clamp(14.4px,1.5vw,19.2px)", lineHeight: 1.25, maxWidth: "656px" }}>{p}</p>)}
        </div>
        <Panel as="div" pad={2} surface="paper" style={{ display: "grid", alignContent: "start", gap: u(1), background: "color-mix(in srgb, var(--df-color-paper) 88%, white)" }}>
          {d.legacy.valueRows.map(([k, v]) => <React.Fragment key={k}>
            <span style={{ ...meta, fontSize: 12 }}>{k}</span>
            <strong style={{ fontFamily: "var(--df-font-slam)", fontWeight: 400, fontSize: "clamp(24px,3vw,44px)", lineHeight: "var(--df-leading-slam-max)", textTransform: "uppercase", fontVariantNumeric: "tabular-nums" }}>{v}</strong>
          </React.Fragment>)}
          {acct("Escrow account", D.accounts.legacyRecipient)}
          <Button href={D.links.githubFoggedLens} target="_blank" style={{ fontSize: 12, letterSpacing: 0 }}>github.com/FoggedLens <Icon n="external-link" /></Button>
          <Button href={D.links.pumpfun} target="_blank" style={{ fontSize: 12, letterSpacing: 0 }}>View on pump.fun <Icon n="external-link" /></Button>
        </Panel>
      </Panel>

      <Panel aria-labelledby="accounts-title">
        <Head rows={["Tracked public accounts", "Sources", "Updated 2026-07-14"]} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: u(2) }}>
          {acct("Claim wallet", D.accounts.claimWallet)}
          {acct("Fee vault", D.accounts.feeVault)}
          {acct("Token mint", D.accounts.tokenMint)}
          <span style={{ ...meta, display: "inline-flex", minHeight: u(5.5), alignItems: "center", justifyContent: "center", padding: `${u(1)} ${u(1.25)}`, border: "var(--df-border-default)", fontSize: 12, letterSpacing: 0, textAlign: "center" }}>CLAIMABLE SOL: —</span>
        </div>
      </Panel>

      <Panel aria-labelledby="meaning-title">
        <Head rows={d.meaning.head} />
        <ul style={{ display: "grid", gap: u(1.25), margin: 0, paddingLeft: u(2.5), fontFamily: "var(--df-font-label)", fontSize: 16, lineHeight: 1.25 }}>
          {d.meaning.items.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </Panel>
    </div>
  );
}
window.DonationsScreen = DonationsScreen;
})();
