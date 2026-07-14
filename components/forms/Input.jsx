import React from "react";

/** Text input per the zip-form / watch-form pattern: paper field, 1.5px ink border, 0 radius, Oswald. */
export function Input({ size = "lg", invalid = false, style, ...rest }) {
  const s = {
    minWidth: 0, width: "100%",
    minHeight: size === "xl" ? "var(--df-control-h-xl)" : "var(--df-control-h-lg)",
    padding: "0 calc(var(--df-space-unit)*1.5)",
    border: invalid ? "var(--df-border-accent)" : "var(--df-input-border)",
    borderRadius: 0, background: "var(--df-input-bg)", color: "var(--df-text-primary)",
    fontFamily: "var(--df-input-font)", fontWeight: size === "xl" ? "var(--df-weight-label-strong)" : "var(--df-weight-label)",
    fontSize: size === "xl" ? "clamp(16px, 2vw, 24px)" : "16px", lineHeight: 1.05, letterSpacing: 0,
    ...style,
  };
  return <input style={s} {...rest} />;
}
