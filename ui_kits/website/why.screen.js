(() => {
const D = window.DF_DATA;
const u = (n) => `calc(var(--df-space-unit)*${n})`;
const metaL = { margin: 0, fontFamily: "var(--df-font-meta)", fontSize: "clamp(10px,1.8vw,16px)", fontWeight: 700, letterSpacing: "var(--df-tracking-meta)", lineHeight: 1, textTransform: "uppercase" };
const body = { margin: 0, fontFamily: "var(--df-font-label)", fontSize: "clamp(16px,2.1vw,24px)", fontWeight: "var(--df-weight-label-body)", lineHeight: 1.39, maxWidth: "656px", textWrap: "pretty" };
const slam = { margin: 0, fontFamily: "var(--df-font-slam)", fontWeight: 400, letterSpacing: 0, textTransform: "uppercase", textWrap: "balance" };

function ZipPanel({ state, zip }) {
  const { Panel } = window.DeFlockDesign_d58f76;
  const z = D.why.zip;
  const pair = state === "loading" ? z.loading : state === "empty" ? z.empty : state === "error" ? z.error : z.idle;
  return (
    <Panel as="div" variant="accent" pad={2} role={state === "error" ? "alert" : "status"} aria-live="polite"
      style={{ display: "grid", gridColumn: "2", gap: u(1.25), alignContent: "center", minHeight: u(21), ...(state === "loading" ? { boxShadow: "var(--df-stamp-inset-ink)", transform: "rotate(var(--df-tilt-stamp-max))" } : {}) }}>
      {state === "ready" ? <>
        <span style={{ ...slam, fontSize: "clamp(48px,10vw,96px)", lineHeight: "var(--df-leading-slam)", fontVariantNumeric: "tabular-nums" }}>47</span>
        <span style={{ ...body, fontSize: "clamp(16px,2.2vw,21px)", maxWidth: "none" }}>{z.readySuffix} {zip}</span>
        <a href="#" onClick={(e) => e.preventDefault()} style={{ ...metaL, fontSize: 13, width: "fit-content", display: "inline-flex", minHeight: u(5.5), alignItems: "center", padding: `${u(1)} ${u(1.5)}`, border: "var(--df-border-default)", background: "var(--df-surface-wash-ink)", textDecoration: "none" }}>{z.mapLink}</a>
      </> : <>
        <span style={metaL}>{pair[0]}</span>
        <span style={{ ...body, fontSize: "clamp(16px,2.2vw,19px)", maxWidth: "none" }}>{pair[1]}</span>
      </>}
    </Panel>
  );
}

function WhyScreen() {
  const { Button, Panel, Badge, FormRow, Input } = window.DeFlockDesign_d58f76;
  const [zip, setZip] = React.useState("");
  const [state, setState] = React.useState("idle");
  const submit = (e) => {
    e.preventDefault();
    if (!/^\d{5}$/.test(zip)) { setState("error"); return; }
    setState("loading");
    setTimeout(() => setState(zip === "00000" ? "empty" : "ready"), 900);
  };
  const w = D.why;
  return (
    <div style={{ display: "grid", gap: u(6), width: "100%", minWidth: 0 }}>
      <section aria-label="Hero" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.35fr) minmax(176px,0.65fr)", alignItems: "center", gap: u(4), minHeight: u(56), paddingBlock: u(2) }}>
        <div style={{ display: "grid", gap: u(2), minWidth: 0, justifyItems: "start" }}>
          <Badge variant="kicker">{w.kicker}</Badge>
          <div style={{ display: "grid", gap: u(0.75) }}>
            <p style={{ margin: 0, fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: "clamp(24px,4.8vw,44px)", letterSpacing: "var(--df-tracking-label)", lineHeight: "var(--df-leading-slam-max)", textTransform: "uppercase" }}>{w.heroLabel}</p>
            <h1 style={{ ...slam, fontSize: "var(--df-size-title-hero)", lineHeight: "var(--df-leading-slam)" }}>{w.heroTitle}</h1>
          </div>
          <p style={{ ...body, maxWidth: "624px" }}>{w.heroValue}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: u(1) }} aria-label="Primary actions">
            <Button variant="primary" href="#zip-check" style={{ minWidth: u(18) }}>{w.ctas[0]}</Button>
            <Button href="#thesis" style={{ minWidth: u(18) }}>{w.ctas[1]}</Button>
          </div>
        </div>
        <Panel as="div" surface="accent" halftone pad={4} aria-hidden="true" style={{ display: "grid", placeItems: "center", background: "var(--df-halftone-image), color-mix(in srgb, var(--df-color-gadsden) 22%, var(--df-color-paper))", backgroundSize: "var(--df-halftone-size), auto" }}>
          <img src="img/emblem-breakthrough.svg" alt="" style={{ width: "min(100%, 384px)", height: "auto" }} />
        </Panel>
      </section>

      <Panel id="zip-check" variant="raised" aria-label="Live map check" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)", gap: u(3), alignItems: "stretch" }}>
        <div style={{ display: "grid", alignContent: "start", gap: u(2), minWidth: 0 }}>
          <p style={metaL}>{D.why.zip.label}</p>
          <h2 style={{ ...slam, fontSize: "clamp(32px,7vw,96px)", lineHeight: "var(--df-leading-slam)" }}>{D.why.zip.title}</h2>
          <p style={body}>{D.why.zip.body}</p>
        </div>
        <form onSubmit={submit} style={{ display: "grid", alignContent: "start", gap: u(1.25), minWidth: 0 }}>
          <FormRow label="ZIP code" htmlFor="zip-input" error={state === "error" ? D.why.zip.invalid : undefined}>
            <Input id="zip-input" size="xl" inputMode="numeric" maxLength={5} placeholder="90210" value={zip}
              onChange={(e) => { setZip(e.target.value.replace(/\D/g, "").slice(0, 5)); if (state === "error") setState("idle"); }} style={{ flex: "1 1 160px" }} />
            <Button size="xl" variant="primary" type="submit">CHECK MAP</Button>
          </FormRow>
        </form>
        <ZipPanel state={state} zip={zip} />
        <p style={{ ...metaL, gridColumn: "2", fontSize: 12, color: "var(--df-text-muted)", lineHeight: 1.5 }}>
          <a href={D.links.osm} target="_blank" rel="noreferrer" style={{ textDecorationLine: "underline", textDecorationThickness: "var(--df-stroke-hairline)", textUnderlineOffset: u(0.45) }}>© OpenStreetMap contributors</a> plus DeFlock project data.
        </p>
      </Panel>

      <section id="thesis" aria-label="Why DeFlock thesis" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "var(--df-stroke-hairline)", border: "var(--df-border-default)", background: "var(--df-color-ink)" }}>
        {D.why.thesis.map((t) => (
          <article key={t.label} style={{ display: "grid", gap: u(1.5), alignContent: "start", minWidth: 0, padding: u(2.5), background: "var(--df-halftone-image), var(--df-color-paper)", backgroundSize: "var(--df-halftone-size), auto" }}>
            <h2 style={{ margin: 0, fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: "clamp(24px,3.5vw,44px)", letterSpacing: "var(--df-tracking-label)", lineHeight: "var(--df-leading-slam-max)", textTransform: "uppercase" }}>{t.label}</h2>
            <p style={body}>{t.body}</p>
          </article>
        ))}
        <div aria-label="Community links" style={{ display: "flex", flexWrap: "wrap", gap: u(1), alignItems: "center", padding: u(2.5), background: "var(--df-halftone-image), var(--df-color-paper)", backgroundSize: "var(--df-halftone-size), auto" }}>
          {D.why.thesisActions.map(([label, key]) => <Button key={label} variant="quiet" href={D.links[key]} target="_blank">{label}</Button>)}
        </div>
      </section>

      <Panel aria-label="The real project" surface="wash-ink" halftone style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(144px,0.35fr)", gap: u(4), alignItems: "center" }}>
        <div style={{ display: "grid", gap: u(2), minWidth: 0, justifyItems: "start" }}>
          <p style={metaL}>{D.why.realProject.label}</p>
          <h2 style={{ ...slam, fontSize: "clamp(32px,7vw,96px)", lineHeight: "var(--df-leading-slam)" }}>{D.why.realProject.title}</h2>
          <p style={body}>{D.why.realProject.body}</p>
          <Button variant="quiet" href={D.links.deflockOrg} target="_blank">{D.why.realProject.link}</Button>
        </div>
        <img src="img/cam-spider-eye-face.svg" alt="" aria-hidden="true" style={{ width: "min(100%, 280px)", height: "auto", justifySelf: "center" }} />
      </Panel>
    </div>
  );
}
window.WhyScreen = WhyScreen;
})();
