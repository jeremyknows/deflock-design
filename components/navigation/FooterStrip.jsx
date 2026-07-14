import React from "react";

const item = { whiteSpace: "nowrap" };

/** Footer strip: disclaimer (exact wording, doctrine 2/3) · quiet ticker · risk note · contact.
 * Quiet wordmark = Space Mono 700 per Identity law (the shipped slam-family ticker is drift). */
export function FooterStrip({ contactEmail, extra, style }) {
  return (
    <footer style={{
      display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center",
      gap: "calc(var(--df-space-unit)*1) calc(var(--df-space-unit)*2)",
      padding: "calc(var(--df-space-unit)*2) var(--df-chrome-margin) calc(var(--df-space-unit)*2.5)",
      borderTop: "var(--df-border-default)",
      fontFamily: "var(--df-footer-font)", fontSize: "clamp(10px, 2vw, 16px)",
      fontWeight: "var(--df-weight-meta-strong)", letterSpacing: "var(--df-tracking-meta)",
      lineHeight: "var(--df-leading-slam-max)", textAlign: "center", textTransform: "uppercase", ...style,
    }}>
      <span style={item}>COMMUNITY-MADE · UNAFFILIATED WITH DEFLOCK.ORG</span>
      <span style={{ ...item, fontFamily: "var(--df-footer-ticker-font)", fontSize: "clamp(16px, 2.2vw, 24px)", letterSpacing: 0 }}>$DEFLOCK</span>
      <span style={item}>Not financial advice.</span>
      {contactEmail && (
        <span style={item}>Content or takedown requests:{" "}
          <a href={`mailto:${contactEmail}`} style={{ display: "inline-flex", minHeight: "44px", alignItems: "center", paddingInline: "calc(var(--df-space-unit)*0.5)", textDecorationLine: "underline", textDecorationThickness: "var(--df-stroke-hairline)", textUnderlineOffset: "calc(var(--df-space-unit)*0.4)" }}>{contactEmail}</a>
        </span>
      )}
      {extra}
    </footer>
  );
}
