import React from "react";

const metaText = {
  margin: 0, fontFamily: "var(--df-stat-label-font)", fontWeight: "var(--df-weight-meta-strong)",
  letterSpacing: 0, lineHeight: 1.2, textTransform: "uppercase",
};

/** Ledger row (claims/receipts pattern): border-top rule, date + detail left, labeled value right. */
export function StatRow({ date, title, note, valueLabel, value, href, linkLabel, style, ...rest }) {
  return (
    <article style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "calc(var(--df-space-unit)*2)", alignItems: "center", padding: "calc(var(--df-space-unit)*1.5) 0", borderTop: "var(--df-stat-row-border)", ...style }} {...rest}>
      <div style={{ minWidth: 0 }}>
        {date && <p style={{ ...metaText, fontSize: "var(--df-size-meta)", fontVariantNumeric: "tabular-nums" }}>{date}</p>}
        {title && <strong style={{ display: "block", marginTop: "calc(var(--df-space-unit)*0.75)", fontFamily: "var(--df-font-label)", fontWeight: "var(--df-weight-label-strong)", fontSize: "calc(var(--df-space-unit)*2.25)", lineHeight: 1.05, overflowWrap: "anywhere", fontVariantNumeric: "tabular-nums" }}>{title}</strong>}
        {note && <span style={{ display: "block", marginTop: "calc(var(--df-space-unit)*0.75)", fontFamily: "var(--df-font-label)", fontWeight: "var(--df-weight-label)", fontSize: "calc(var(--df-space-unit)*1.75)", lineHeight: 1.25, overflowWrap: "anywhere" }}>{note}</span>}
        {href && <a href={href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "calc(var(--df-space-unit)*0.5)", minHeight: "var(--df-control-h-md)", ...metaText, fontSize: "var(--df-size-meta)", textDecoration: "none" }}>{linkLabel || href}</a>}
      </div>
      <span style={{ ...metaText, fontSize: "var(--df-size-meta)", textAlign: "right" }}>
        {valueLabel && <span style={{ display: "block" }}>{valueLabel}</span>}
        {value && <strong style={{ display: "block", marginTop: "calc(var(--df-space-unit)*0.5)", fontFamily: "var(--df-font-label)", fontWeight: "var(--df-weight-label-strong)", fontSize: "calc(var(--df-space-unit)*2.25)", lineHeight: 1.05, fontVariantNumeric: "tabular-nums" }}>{value}</strong>}
      </span>
    </article>
  );
}
