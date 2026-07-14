import React from "react";

/** Inline alert / toast per the donations data-warning: gadsden-wash halftone strip,
 * meta type, role=status. fixed=true docks it bottom-right as a toast. */
export function Toast({ variant = "warning", fixed = false, icon, role, style, children, ...rest }) {
  const bg = variant === "warning" ? "var(--df-toast-bg)" : variant === "alert" ? "var(--df-surface-wash-red)" : "var(--df-surface-card)";
  const s = {
    display: "flex", alignItems: "start", gap: "calc(var(--df-space-unit)*1)",
    margin: 0, padding: "calc(var(--df-space-unit)*1.5)",
    border: variant === "alert" ? "var(--df-border-accent)" : "var(--df-toast-border)", borderRadius: 0,
    background: `var(--df-halftone-image), ${bg}`, backgroundSize: "var(--df-halftone-size), auto",
    fontFamily: "var(--df-font-meta)", fontSize: "var(--df-size-meta)",
    fontWeight: "var(--df-weight-meta-strong)", letterSpacing: 0, lineHeight: 1.35, textTransform: "uppercase",
    ...(fixed ? { position: "fixed", right: "var(--df-chrome-margin)", bottom: "var(--df-chrome-margin)", zIndex: "var(--df-z-sheet)", maxWidth: "calc(var(--df-space-unit)*52)", boxShadow: "var(--df-shadow-hard-sm)" } : {}),
    ...style,
  };
  return (
    <p role={role || (variant === "alert" ? "alert" : "status")} style={s} {...rest}>
      {icon && <span aria-hidden="true" style={{ display: "inline-flex", flex: "0 0 auto", marginTop: "1px" }}>{icon}</span>}
      <span style={{ minWidth: 0 }}>{children}</span>
    </p>
  );
}
