import React, { useEffect } from "react";

/** Modal sheet per the profile wallet-sheet: ink-48% backdrop, paper panel docked
 * bottom-right (bottom-stretch on mobile), hairline border, Escape closes. */
export function Sheet({ open = false, onClose, title, children, width, style }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{ position: "fixed", inset: 0, zIndex: "var(--df-z-sheet)", display: "grid", alignItems: "end", padding: "var(--df-chrome-margin)", background: "var(--df-surface-backdrop)" }}>
      <section role="dialog" aria-modal="true" aria-label={typeof title === "string" ? title : undefined}
        style={{ width: `min(100%, ${width || "var(--df-sheet-w)"})`, justifySelf: "end", padding: "var(--df-sheet-pad)", border: "var(--df-border-default)", background: "var(--df-color-paper)", display: "grid", gap: "calc(var(--df-space-unit)*2)", ...style }}>
        <div style={{ display: "flex", gap: "calc(var(--df-space-unit)*2)", alignItems: "start", justifyContent: "space-between" }}>
          {title && <h2 style={{ margin: "calc(var(--df-space-unit)*1) 0 0", fontFamily: "var(--df-font-slam)", fontWeight: 400, fontSize: "clamp(calc(var(--df-space-unit)*3.6), 5vw, calc(var(--df-space-unit)*6.5))", lineHeight: "var(--df-leading-slam-max)", letterSpacing: 0, textTransform: "uppercase", textWrap: "balance" }}>{title}</h2>}
          {onClose && (
            <button type="button" onClick={onClose} aria-label="Close"
              style={{ minHeight: "var(--df-control-h-lg)", minWidth: "var(--df-control-h-lg)", padding: "0 calc(var(--df-space-unit)*2)", cursor: "pointer", border: "var(--df-border-default)", borderRadius: 0, background: "var(--df-surface-inverse)", color: "var(--df-text-inverse)", fontFamily: "var(--df-font-meta)", fontSize: "var(--df-size-meta)", fontWeight: "var(--df-weight-meta-strong)", letterSpacing: "var(--df-tracking-meta)", textTransform: "uppercase", transition: "transform var(--df-dur-ui) ease-out" }}
              onMouseDown={(e) => { e.currentTarget.style.transform = "scale(var(--df-press-scale))"; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = "none"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}>CLOSE</button>
          )}
        </div>
        {children}
      </section>
    </div>
  );
}
