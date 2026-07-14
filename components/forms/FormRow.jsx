import React from "react";

/** Form row per the site's zip-form / watch-form: meta label above, then input + action
 * on one grid row (stacks under 720px via inline flexWrap), meta error line below. */
export function FormRow({ label, htmlFor, error, hint, children, style }) {
  const metaText = {
    margin: 0, fontFamily: "var(--df-font-meta)", fontSize: "var(--df-size-meta)",
    fontWeight: "var(--df-weight-meta-strong)", letterSpacing: "var(--df-tracking-meta)",
    lineHeight: 1.1, textTransform: "uppercase",
  };
  return (
    <div style={{ display: "grid", gap: "calc(var(--df-space-unit)*1.25)", minWidth: 0, ...style }}>
      {label && <label htmlFor={htmlFor} style={metaText}>{label}</label>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "calc(var(--df-space-unit)*1)", minWidth: 0, alignItems: "stretch" }}>
        {children}
      </div>
      {error && <p role="alert" style={metaText}><span aria-hidden="true" style={{ color: "var(--df-text-accent)" }}>▲ </span>{error}</p>}
      {hint && !error && <p style={{ ...metaText, color: "var(--df-text-muted)", fontWeight: "var(--df-weight-meta)" }}>{hint}</p>}
    </div>
  );
}
