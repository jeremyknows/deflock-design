import React from "react";

const SURFACES = {
  card: "var(--df-surface-card)",
  quiet: "var(--df-surface-card-quiet)",
  bright: "var(--df-surface-card-bright)",
  "wash-ink": "var(--df-surface-wash-ink)",
  accent: "var(--df-surface-wash-accent)",
  "accent-strong": "var(--df-surface-wash-accent-strong)",
  paper: "var(--df-color-paper)",
};

/** Card/panel: 1.5px ink border, warm-white-mixed paper fill, 0 radius.
 * raised = 3px border + hard offset shadow (feature panels: zip widget, legacy showcase).
 * stamp = red hairline + stamp inset rings (the verify panel). empty = dashed border. */
export function Panel({ variant = "card", surface, halftone = false, raised = false, pad = 3, as = "section", style, children, ...rest }) {
  const bg = SURFACES[surface || (variant === "accent" ? "accent" : variant === "stamp" || variant === "empty" ? "quiet" : "card")] || SURFACES.card;
  const s = {
    minWidth: 0, padding: `calc(var(--df-space-unit)*${pad})`, borderRadius: 0,
    border: variant === "stamp" ? "var(--df-panel-stamp-border)" : variant === "empty" ? "var(--df-border-dashed)" : raised || variant === "raised" ? "var(--df-panel-raised-border)" : "var(--df-panel-border)",
    boxShadow: [variant === "stamp" ? "var(--df-panel-stamp-shadow)" : null, (raised || variant === "raised") ? "var(--df-panel-raised-shadow)" : null].filter(Boolean).join(", ") || "none",
    background: halftone || variant === "accent" || raised || variant === "raised"
      ? `var(--df-halftone-image), ${bg}` : bg,
    backgroundSize: halftone || variant === "accent" || raised || variant === "raised" ? "var(--df-halftone-size), auto" : undefined,
    ...style,
  };
  const Tag = as;
  return <Tag style={s} {...rest}>{children}</Tag>;
}
