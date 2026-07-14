import React from "react";

const meta = {
  fontFamily: "var(--df-badge-font)", fontSize: "var(--df-badge-size)",
  fontWeight: "var(--df-weight-meta-strong)", letterSpacing: "var(--df-tracking-meta)",
  lineHeight: 1.1, textTransform: "uppercase",
};

/** Stamped chip/badge. The ONLY tilted elements allowed in UI mode (register R6). */
export function Badge({ variant = "stamp", tilt = true, selected = false, style, children, ...rest }) {
  const rotate = tilt ? "rotate(var(--df-tilt-stamp-min))" : "none";
  const variants = {
    stamp: { border: "var(--df-badge-border)", boxShadow: "var(--df-stamp-inset-ink)", background: "transparent", color: "var(--df-text-primary)", transform: rotate },
    kicker: { border: "var(--df-border-accent)", color: "var(--df-text-primary)", background: "transparent", transform: rotate },
    solid: { border: "var(--df-badge-border)", background: "var(--df-surface-inverse)", color: "var(--df-text-inverse)", transform: rotate },
    accent: { border: "var(--df-badge-border)", background: "var(--df-color-gadsden)", color: "var(--df-text-primary)", transform: "none" },
    chip: selected
      ? { border: "var(--df-badge-border)", background: "var(--df-surface-inverse)", color: "var(--df-text-inverse)", transform: "none" }
      : { border: "var(--df-badge-border)", background: "var(--df-color-paper)", color: "var(--df-text-primary)", transform: "none" },
  };
  const s = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "calc(var(--df-space-unit)*0.6)",
    width: "fit-content", maxWidth: "100%", padding: "calc(var(--df-space-unit)*0.75) calc(var(--df-space-unit)*1)",
    borderRadius: 0, ...meta, ...(variants[variant] || variants.stamp), ...style,
  };
  return <span style={s} {...rest}>{children}</span>;
}
