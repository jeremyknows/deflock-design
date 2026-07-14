import React, { useEffect } from "react";

const CSS = `
.df-site-header{position:sticky;top:0;z-index:var(--df-z-header);display:flex;align-items:center;justify-content:space-between;gap:calc(var(--df-space-unit)*3);padding:calc(var(--df-space-unit)*2) var(--df-chrome-margin);border-bottom:var(--df-border-default);background:var(--df-halftone-image),var(--df-color-paper);background-size:var(--df-halftone-size),auto}
.df-ticker-wordmark{display:inline-flex;flex:0 0 auto;align-items:center;min-height:var(--df-nav-h);font-family:var(--df-font-slam);font-size:clamp(24px,4vw,44px);line-height:var(--df-leading-slam-max);text-transform:uppercase;white-space:nowrap;word-break:keep-all;text-decoration:none;transition:transform var(--df-dur-ui) ease-out}
.df-ticker-wordmark:active{transform:scale(var(--df-press-scale))}
.df-site-nav{display:flex;align-items:center;justify-content:flex-end;gap:calc(var(--df-space-unit)*1);min-width:0}
.df-site-nav a{position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:var(--df-nav-h);padding:calc(var(--df-space-unit)*1) calc(var(--df-space-unit)*1.5);border:var(--df-stroke-hairline) solid transparent;color:var(--df-text-primary);font-family:var(--df-font-meta);font-size:clamp(12px,1.08vw,16px);font-weight:var(--df-weight-meta-strong);letter-spacing:var(--df-tracking-meta);line-height:var(--df-leading-slam-max);text-transform:uppercase;white-space:nowrap;text-decoration:none;transition:transform var(--df-dur-ui) ease-out}
.df-site-nav a:active{transform:scale(var(--df-press-scale))}
.df-site-nav a[data-active="true"]{border-color:var(--df-color-ink);background:var(--df-nav-active-bg);box-shadow:var(--df-nav-active-ring);transform:rotate(var(--df-tilt-stamp-min))}
.df-site-nav a[data-active="true"]:active{transform:rotate(var(--df-tilt-stamp-min)) scale(var(--df-press-scale))}
.df-nav-short{display:none}
@media (max-width:720px){
.df-site-header{position:static;justify-content:center}
.df-ticker-wordmark{font-size:24px}
.df-site-nav{position:fixed;right:0;bottom:0;left:0;z-index:var(--df-z-nav-mobile);display:grid;grid-template-columns:repeat(var(--df-nav-count,5),minmax(0,1fr));gap:0;border-top:var(--df-border-default);background:var(--df-halftone-image),var(--df-color-paper);background-size:var(--df-halftone-size),auto}
.df-site-nav a{min-width:0;padding:calc(var(--df-space-unit)*0.75) calc(var(--df-space-unit)*0.25);font-size:clamp(8px,2.45vw,12px);letter-spacing:0}
.df-nav-full{display:none}
.df-nav-short{display:inline;white-space:nowrap}
}`;

function useHeaderCss() {
  useEffect(() => {
    if (!document.getElementById("df-siteheader-css")) {
      const el = document.createElement("style");
      el.id = "df-siteheader-css"; el.textContent = CSS;
      document.head.appendChild(el);
    }
  }, []);
}

/** Site chrome header: $DEFLOCK slam wordmark + meta nav. Active tab = ink stamp ring, −4° tilt.
 * ≤720px: header centers, nav docks as a fixed bottom tab bar. */
export function SiteHeader({ tabs = [], activeHref, onNavigate, homeHref = "#", style }) {
  useHeaderCss();
  return (
    <header className="df-site-header" style={style}>
      <a className="df-ticker-wordmark" href={homeHref} aria-label="DeflockOnSol home"
        onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(homeHref); } : undefined}>$DEFLOCK</a>
      <nav className="df-site-nav" aria-label="Primary navigation" style={{ "--df-nav-count": tabs.length || 5 }}>
        {tabs.map((t) => {
          const active = t.href === activeHref;
          return (
            <a key={t.href} href={t.href} data-active={active ? "true" : "false"} aria-current={active ? "page" : undefined}
              onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(t.href); } : undefined}>
              <span className="df-nav-full">{t.label}</span>
              <span className="df-nav-short">{t.mobileLabel || t.label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
