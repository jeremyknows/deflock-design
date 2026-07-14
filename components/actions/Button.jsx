import React, { useState } from "react";

const H = { sm: "var(--df-control-h-sm)", md: "var(--df-control-h-md)", lg: "var(--df-control-h-lg)", xl: "var(--df-control-h-xl)" };

/** THE button. Unifies the site's 6 hand-rolled implementations (why-cta, zip-form,
 * donations-link-row, sign-in/out, inputRow/verify/share, library filter/submit/copy).
 * Press = scale(.96) 120ms; hover = hard-shadow lift; accent = gadsden stamp (tilt + hard shadow). */
export function Button({ variant = "secondary", size = "md", font, tilt, iconOnly = false, disabled = false, href, target, onClick, type = "button", style, children, ...rest }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const accent = variant === "accent";
  const labelFont = font === "label" || (font === undefined && size === "xl");
  const fills = {
    primary: { background: "var(--df-btn-primary-bg)", color: "var(--df-btn-primary-fg)" },
    secondary: { background: "var(--df-btn-secondary-bg)", color: "var(--df-btn-secondary-fg)" },
    accent: { background: "var(--df-btn-accent-bg)", color: "var(--df-btn-accent-fg)" },
    quiet: { background: "var(--df-btn-quiet-bg)", color: "var(--df-btn-secondary-fg)" },
  };
  const rot = accent || tilt ? " rotate(var(--df-btn-accent-tilt))" : "";
  const transform = (disabled ? "" : press ? `scale(var(${iconOnly ? "--df-press-scale-icon" : "--df-press-scale"}))` : hover ? "var(--df-hover-lift)" : "") + rot;
  const boxShadow = accent
    ? hover && !disabled ? "calc(var(--df-space-unit)*0.55) calc(var(--df-space-unit)*0.55) 0 var(--df-color-ink)" : "var(--df-btn-accent-shadow)"
    : hover && !press && !disabled ? "var(--df-shadow-hover)" : "none";
  const s = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "calc(var(--df-space-unit)*0.75)",
    minHeight: H[size] || H.md, minWidth: iconOnly ? H[size] || H.md : 0, width: iconOnly ? H[size] || H.md : undefined,
    padding: iconOnly ? 0 : "calc(var(--df-space-unit)*1) calc(var(--df-space-unit)*1.5)",
    border: "var(--df-btn-border)", borderRadius: "var(--df-btn-radius)",
    fontFamily: labelFont ? "var(--df-font-label)" : "var(--df-btn-font)",
    fontSize: labelFont ? "clamp(16px, 2vw, 24px)" : "var(--df-btn-size)",
    fontWeight: labelFont ? "var(--df-weight-label-strong)" : "var(--df-btn-weight)",
    letterSpacing: labelFont ? "0" : "var(--df-btn-tracking)",
    lineHeight: 1.05, textTransform: "uppercase", whiteSpace: "nowrap", textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "var(--df-btn-disabled-opacity)" : 1,
    transform: transform.trim() || "none", boxShadow,
    transition: "transform var(--df-dur-ui) ease-out, box-shadow var(--df-dur-ui) ease-out",
    ...(fills[variant] || fills.secondary), ...style,
  };
  const ev = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onBlur: () => setPress(false),
    onClick,
  };
  if (href && !disabled) return <a href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined} style={s} {...ev} {...rest}>{children}</a>;
  return <button type={type} disabled={disabled} style={s} {...ev} {...rest}>{children}</button>;
}
