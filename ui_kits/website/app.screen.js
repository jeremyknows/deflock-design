(() => {
const D = window.DF_DATA;
const SCREENS = { "/": window.WhyScreen, "/raid-station": window.RaidScreen, "/library": window.LibraryScreen, "/donations": window.DonationsScreen, "/profile": window.ProfileScreen };
const LS_KEY = "df-kit-route";

function App() {
  const { SiteHeader, FooterStrip } = window.DeFlockDesign_d58f76;
  const [route, setRoute] = React.useState(() => {
    try { const r = localStorage.getItem(LS_KEY); return SCREENS[r] ? r : "/"; } catch (e) { return "/"; }
  });
  const nav = (href) => {
    if (!SCREENS[href]) return;
    setRoute(href);
    try { localStorage.setItem(LS_KEY, href); } catch (e) {}
    window.scrollTo(0, 0);
  };
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  const Screen = SCREENS[route] || SCREENS["/"];
  return (
    <div data-screen-label={D.tabs.find((t) => t.href === route)?.label} style={{ position: "relative", minHeight: "100vh", overflowX: "clip", isolation: "isolate", background: "var(--df-halftone-image), var(--df-color-paper)", backgroundSize: "var(--df-halftone-size), auto", display: "grid", gridTemplateRows: "auto 1fr auto" }}>
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: "var(--df-z-grain)", pointerEvents: "none", opacity: "var(--df-grain-opacity)", backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`, backgroundSize: "120px 120px", mixBlendMode: "multiply" }}></div>
      <SiteHeader tabs={D.tabs} activeHref={route} onNavigate={nav} homeHref="/" />
      <main style={{ minHeight: "calc(100vh - 200px)", padding: "calc(var(--df-space-unit)*9) var(--df-chrome-margin) calc(var(--df-space-unit)*7)" }}>
        <Screen />
      </main>
      <FooterStrip contactEmail={D.footerEmail} />
    </div>
  );
}
let dfTries = 0;
function dfMount() {
  if (!window.DF_DATA) return; // not the kit page: bail silently
  if (window.DeFlockDesign_d58f76 && window.DeFlockDesign_d58f76.SiteHeader) {
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  } else if (dfTries++ < 100) {
    setTimeout(dfMount, 80);
  } else {
    document.getElementById("root").innerHTML = '<p style="padding:24px;font-family:monospace">_ds_bundle.js did not load - reload the page.</p>';
  }
}
dfMount();
})();
