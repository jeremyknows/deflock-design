import React from "react";

const metaText = {
  margin: 0, fontFamily: "var(--df-stat-label-font)", fontWeight: "var(--df-weight-meta-strong)",
  letterSpacing: 0, lineHeight: 1.2, textTransform: "uppercase",
};

/** KPI metric card (donations pattern): meta eyebrow, Oswald label, slam value, meta sub.
 * wash: none | accent (gadsden 14%) | red (red 10%, ration to one per row). */
export function Metric({ eyebrow, label, value, sub, wash = "none", nudge = false, style, ...rest }) {
  const washes = {
    none: "var(--df-surface-card)",
    accent: "linear-gradient(135deg, color-mix(in srgb, var(--df-color-gadsden) 14%, transparent), transparent 46%), var(--df-surface-card)",
    red: "linear-gradient(135deg, color-mix(in srgb, var(--df-color-red) 10%, transparent), transparent 42%), var(--df-surface-card)",
  };
  return (
    <article style={{ minWidth: 0, padding: "calc(var(--df-space-unit)*3)", border: "var(--df-panel-border)", background: washes[wash] || washes.none, transform: nudge ? "translateY(calc(var(--df-space-unit)*0.75))" : "none", ...style }} {...rest}>
      {eyebrow && <p style={{ ...metaText, fontSize: "var(--df-size-meta)", letterSpacing: "var(--df-tracking-meta)" }}>{eyebrow}</p>}
      {label && <h3 style={{ margin: "calc(var(--df-space-unit)*1.5) 0 calc(var(--df-space-unit)*1)", fontFamily: "var(--df-font-label)", fontWeight: "var(--df-weight-label-strong)", fontSize: "calc(var(--df-space-unit)*2.25)", lineHeight: 1.05, letterSpacing: 0, textTransform: "uppercase" }}>{label}</h3>}
      <strong style={{ display: "block", fontFamily: "var(--df-stat-value-font)", fontWeight: 400, fontSize: "clamp(calc(var(--df-space-unit)*3), 4.6vw, calc(var(--df-space-unit)*5.5))", lineHeight: "var(--df-leading-slam-max)", letterSpacing: 0, textTransform: "uppercase", overflowWrap: "anywhere", fontVariantNumeric: "tabular-nums" }}>{value}</strong>
      {sub && <span style={{ ...metaText, display: "block", marginTop: "calc(var(--df-space-unit)*1)", fontSize: "var(--df-size-meta)", fontVariantNumeric: "tabular-nums" }}>{sub}</span>}
    </article>
  );
}
