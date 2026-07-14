(() => {
const D = window.DF_DATA;
const u = (n) => `calc(var(--df-space-unit)*${n})`;
const meta = { margin: 0, fontFamily: "var(--df-font-meta)", fontSize: "clamp(12.2px,1.4vw,14.7px)", fontWeight: 700, letterSpacing: "0.14em", lineHeight: 1.2, textTransform: "uppercase" };
const slamH = { margin: 0, fontFamily: "var(--df-font-slam)", fontWeight: 400, letterSpacing: 0, lineHeight: 1.05, textTransform: "uppercase" };

function LibraryScreen() {
  const { Button, Panel } = window.DeFlockDesign_d58f76;
  const L = D.library;
  const [filter, setFilter] = React.useState("ALL");
  const shown = L.assets.filter((a) => filter === "ALL" || a.kind === filter);
  return (
    <section aria-labelledby="library-title" style={{ display: "grid", gap: "clamp(28px,5vw,56px)" }}>
      <div style={{ display: "grid", gap: 16 }}>
        <header style={{ display: "grid", gap: 8 }}>
          <p style={meta}>{L.kicker}</p>
          <h1 id="library-title" style={{ ...slamH, fontSize: "var(--df-size-title-page)", maxWidth: 820 }}>{L.title}</h1>
          <p style={{ margin: 0, fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: "clamp(15.2px,2vw,19.2px)", lineHeight: 1.25, maxWidth: 680, textWrap: "pretty" }}>{L.framing}</p>
        </header>
        <nav aria-label="Library actions" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Button variant="accent" onClick={() => {}}>{L.actions[0]}</Button>
          <Button onClick={() => {}}>{L.actions[1]}</Button>
          <Button variant="quiet" onClick={() => {}}>{L.actions[2]}</Button>
        </nav>
        <nav aria-label="Library categories" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {L.filters.map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={f === filter}
              style={{ display: "inline-flex", minHeight: 44, alignItems: "center", justifyContent: "center", padding: "10px 12px", cursor: "pointer", border: "var(--df-border-default)", borderRadius: 0, background: f === filter ? "var(--df-color-ink)" : "var(--df-color-paper)", color: f === filter ? "var(--df-color-paper)" : "var(--df-color-ink)", fontFamily: "var(--df-font-meta)", fontSize: 12.5, fontWeight: 700, letterSpacing: "var(--df-tracking-meta)", lineHeight: 1, textTransform: "uppercase", transition: "transform var(--df-dur-ui) ease-out" }}>{f}</button>
          ))}
        </nav>
      </div>
      {shown.length === 0 ? (
        <Panel variant="empty" style={{ padding: "clamp(28px,6vw,56px)", fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: "clamp(16px,2.5vw,22.4px)", letterSpacing: "var(--df-tracking-label)", textTransform: "uppercase" }}>{L.empty}</Panel>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "clamp(14px,2.4vw,24px)" }}>
          {shown.map((a) => (
            <Panel as="article" key={a.title} pad={0} surface="quiet" style={{ display: "grid", padding: 0 }}>
              <div style={{ display: "grid", minHeight: "clamp(132px,28vw,260px)", alignItems: "center", overflow: "hidden", borderBottom: "var(--df-border-default)", backgroundImage: "var(--df-halftone-image)", backgroundSize: "var(--df-halftone-size)" }}>
                <img src={a.src} alt={a.title} style={{ display: "block", width: "100%", height: "auto", maxHeight: "clamp(180px,34vw,340px)", objectFit: "contain" }} />
              </div>
              <div style={{ display: "grid", gap: 12, padding: "clamp(12px,2vw,18px)" }}>
                <h2 style={{ margin: 0, fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: "clamp(13px,1.8vw,16px)", letterSpacing: "var(--df-tracking-label)", lineHeight: 1.2, textTransform: "uppercase", overflowWrap: "anywhere" }}>{a.title}</h2>
                <Button size="md" onClick={() => {}} style={{ justifySelf: "start", fontSize: 12.5 }}>DOWNLOAD</Button>
                <p style={{ ...meta, fontSize: 11.5, letterSpacing: "var(--df-tracking-meta)", color: "var(--df-text-muted)", lineHeight: 1.45 }}>{a.tags}</p>
              </div>
            </Panel>
          ))}
        </div>
      )}
    </section>
  );
}
window.LibraryScreen = LibraryScreen;

function RaidScreen() {
  const { Button, Panel, Badge } = window.DeFlockDesign_d58f76;
  const R = D.raid;
  return (
    <section aria-labelledby="raid-station-title" style={{ display: "grid", gap: "clamp(28px,5vw,56px)" }}>
      <header style={{ display: "grid", gap: 16, maxWidth: 960 }}>
        <p style={meta}>{R.kicker}</p>
        <h1 id="raid-station-title" style={{ ...slamH, fontSize: "var(--df-size-title-page)", maxWidth: 1100, textShadow: "var(--df-misreg-shadow)" }}>{R.title}</h1>
        <p style={{ margin: 0, fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: "clamp(16.8px,2.4vw,24.8px)", letterSpacing: "0.04em", lineHeight: 1.25, textTransform: "uppercase", maxWidth: 700 }}>{R.mission}</p>
      </header>
      <div aria-label="Curated X targets" style={{ display: "grid", gap: 12 }}>
        {R.targets.map((t) => (
          <Panel as="article" key={t.author} pad={0} style={{ display: "grid", gap: 16, padding: "clamp(14px,2.6vw,22px)", background: "linear-gradient(90deg, color-mix(in srgb, var(--df-color-gadsden) 16%, transparent), transparent 42%), var(--df-surface-card)" }}>
            <div style={{ display: "grid", gap: 8, minWidth: 0 }}>
              <p style={{ ...meta, fontSize: 12.5 }}>@{t.author}</p>
              <h2 style={{ margin: 0, fontFamily: "var(--df-font-label)", fontWeight: 700, fontSize: "clamp(16.8px,2.4vw,23.2px)", letterSpacing: "0.04em", lineHeight: 1.12, textTransform: "uppercase", overflowWrap: "anywhere" }}>{t.why}</h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <Button variant="primary" onClick={() => {}}>OPEN ON X</Button>
              <Badge variant="chip" style={{ minHeight: 44, padding: "13px 14px" }}>{t.kit}</Badge>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
window.RaidScreen = RaidScreen;
})();
