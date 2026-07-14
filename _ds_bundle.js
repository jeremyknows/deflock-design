/* @ds-bundle: {"format":4,"namespace":"DeFlockDesign_d58f76","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Metric","sourcePath":"components/data/Metric.jsx"},{"name":"StatRow","sourcePath":"components/data/StatRow.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"FormRow","sourcePath":"components/forms/FormRow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"FooterStrip","sourcePath":"components/navigation/FooterStrip.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Sheet","sourcePath":"components/overlay/Sheet.jsx"},{"name":"Panel","sourcePath":"components/surfaces/Panel.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"fe3101c0a710","components/data/Metric.jsx":"a7ce752b9002","components/data/StatRow.jsx":"e9d56add301f","components/feedback/Badge.jsx":"84d2a82c2bd7","components/feedback/Toast.jsx":"d81d4ed035ac","components/forms/FormRow.jsx":"c1c7f432e818","components/forms/Input.jsx":"1cdcfa15dec8","components/navigation/FooterStrip.jsx":"f7d3ce683515","components/navigation/SiteHeader.jsx":"76df22ae1cdc","components/overlay/Sheet.jsx":"610da684362f","components/surfaces/Panel.jsx":"86bfab1213cb","register/press-check.js":"ef55a09ca4d0","scripts/generate-tokens.mjs":"70a82778d00c","scripts/verify-tokens.mjs":"94b81b24d5ca","ui_kits/website/app.screen.js":"884ea7d5a3da","ui_kits/website/data.js":"92c6333eec94","ui_kits/website/donations.screen.js":"77fd93d47392","ui_kits/website/library.screen.js":"c4de4468529d","ui_kits/website/profile.screen.js":"bfc3168e194a","ui_kits/website/why.screen.js":"3c732fdb3de4"},"inlinedExternals":[],"unexposedExports":[{"name":"compile","sourcePath":"scripts/generate-tokens.mjs"}]} */

(() => {

const __ds_ns = (window.DeFlockDesign_d58f76 = window.DeFlockDesign_d58f76 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const H = {
  sm: "var(--df-control-h-sm)",
  md: "var(--df-control-h-md)",
  lg: "var(--df-control-h-lg)",
  xl: "var(--df-control-h-xl)"
};

/** THE button. Unifies the site's 6 hand-rolled implementations (why-cta, zip-form,
 * donations-link-row, sign-in/out, inputRow/verify/share, library filter/submit/copy).
 * Press = scale(.96) 120ms; hover = hard-shadow lift; accent = gadsden stamp (tilt + hard shadow). */
function Button({
  variant = "secondary",
  size = "md",
  font,
  tilt,
  iconOnly = false,
  disabled = false,
  href,
  target,
  onClick,
  type = "button",
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const accent = variant === "accent";
  const labelFont = font === "label" || font === undefined && size === "xl";
  const fills = {
    primary: {
      background: "var(--df-btn-primary-bg)",
      color: "var(--df-btn-primary-fg)"
    },
    secondary: {
      background: "var(--df-btn-secondary-bg)",
      color: "var(--df-btn-secondary-fg)"
    },
    accent: {
      background: "var(--df-btn-accent-bg)",
      color: "var(--df-btn-accent-fg)"
    },
    quiet: {
      background: "var(--df-btn-quiet-bg)",
      color: "var(--df-btn-secondary-fg)"
    }
  };
  const rot = accent || tilt ? " rotate(var(--df-btn-accent-tilt))" : "";
  const transform = (disabled ? "" : press ? `scale(var(${iconOnly ? "--df-press-scale-icon" : "--df-press-scale"}))` : hover ? "var(--df-hover-lift)" : "") + rot;
  const boxShadow = accent ? hover && !disabled ? "calc(var(--df-space-unit)*0.55) calc(var(--df-space-unit)*0.55) 0 var(--df-color-ink)" : "var(--df-btn-accent-shadow)" : hover && !press && !disabled ? "var(--df-shadow-hover)" : "none";
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--df-space-unit)*0.75)",
    minHeight: H[size] || H.md,
    minWidth: iconOnly ? H[size] || H.md : 0,
    width: iconOnly ? H[size] || H.md : undefined,
    padding: iconOnly ? 0 : "calc(var(--df-space-unit)*1) calc(var(--df-space-unit)*1.5)",
    border: "var(--df-btn-border)",
    borderRadius: "var(--df-btn-radius)",
    fontFamily: labelFont ? "var(--df-font-label)" : "var(--df-btn-font)",
    fontSize: labelFont ? "clamp(16px, 2vw, 24px)" : "var(--df-btn-size)",
    fontWeight: labelFont ? "var(--df-weight-label-strong)" : "var(--df-btn-weight)",
    letterSpacing: labelFont ? "0" : "var(--df-btn-tracking)",
    lineHeight: 1.05,
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? "var(--df-btn-disabled-opacity)" : 1,
    transform: transform.trim() || "none",
    boxShadow,
    transition: "transform var(--df-dur-ui) ease-out, box-shadow var(--df-dur-ui) ease-out",
    ...(fills[variant] || fills.secondary),
    ...style
  };
  const ev = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onBlur: () => setPress(false),
    onClick
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: target,
    rel: target === "_blank" ? "noreferrer" : undefined,
    style: s
  }, ev, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: s
  }, ev, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/Metric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const metaText = {
  margin: 0,
  fontFamily: "var(--df-stat-label-font)",
  fontWeight: "var(--df-weight-meta-strong)",
  letterSpacing: 0,
  lineHeight: 1.2,
  textTransform: "uppercase"
};

/** KPI metric card (donations pattern): meta eyebrow, Oswald label, slam value, meta sub.
 * wash: none | accent (gadsden 14%) | red (red 10%, ration to one per row). */
function Metric({
  eyebrow,
  label,
  value,
  sub,
  wash = "none",
  nudge = false,
  style,
  ...rest
}) {
  const washes = {
    none: "var(--df-surface-card)",
    accent: "linear-gradient(135deg, color-mix(in srgb, var(--df-color-gadsden) 14%, transparent), transparent 46%), var(--df-surface-card)",
    red: "linear-gradient(135deg, color-mix(in srgb, var(--df-color-red) 10%, transparent), transparent 42%), var(--df-surface-card)"
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      minWidth: 0,
      padding: "calc(var(--df-space-unit)*3)",
      border: "var(--df-panel-border)",
      background: washes[wash] || washes.none,
      transform: nudge ? "translateY(calc(var(--df-space-unit)*0.75))" : "none",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      ...metaText,
      fontSize: "var(--df-size-meta)",
      letterSpacing: "var(--df-tracking-meta)"
    }
  }, eyebrow), label && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "calc(var(--df-space-unit)*1.5) 0 calc(var(--df-space-unit)*1)",
      fontFamily: "var(--df-font-label)",
      fontWeight: "var(--df-weight-label-strong)",
      fontSize: "calc(var(--df-space-unit)*2.25)",
      lineHeight: 1.05,
      letterSpacing: 0,
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontFamily: "var(--df-stat-value-font)",
      fontWeight: 400,
      fontSize: "clamp(calc(var(--df-space-unit)*3), 4.6vw, calc(var(--df-space-unit)*5.5))",
      lineHeight: "var(--df-leading-slam-max)",
      letterSpacing: 0,
      textTransform: "uppercase",
      overflowWrap: "anywhere",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      ...metaText,
      display: "block",
      marginTop: "calc(var(--df-space-unit)*1)",
      fontSize: "var(--df-size-meta)",
      fontVariantNumeric: "tabular-nums"
    }
  }, sub));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Metric.jsx", error: String((e && e.message) || e) }); }

// components/data/StatRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const metaText = {
  margin: 0,
  fontFamily: "var(--df-stat-label-font)",
  fontWeight: "var(--df-weight-meta-strong)",
  letterSpacing: 0,
  lineHeight: 1.2,
  textTransform: "uppercase"
};

/** Ledger row (claims/receipts pattern): border-top rule, date + detail left, labeled value right. */
function StatRow({
  date,
  title,
  note,
  valueLabel,
  value,
  href,
  linkLabel,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto",
      gap: "calc(var(--df-space-unit)*2)",
      alignItems: "center",
      padding: "calc(var(--df-space-unit)*1.5) 0",
      borderTop: "var(--df-stat-row-border)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, date && /*#__PURE__*/React.createElement("p", {
    style: {
      ...metaText,
      fontSize: "var(--df-size-meta)",
      fontVariantNumeric: "tabular-nums"
    }
  }, date), title && /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: "calc(var(--df-space-unit)*0.75)",
      fontFamily: "var(--df-font-label)",
      fontWeight: "var(--df-weight-label-strong)",
      fontSize: "calc(var(--df-space-unit)*2.25)",
      lineHeight: 1.05,
      overflowWrap: "anywhere",
      fontVariantNumeric: "tabular-nums"
    }
  }, title), note && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "calc(var(--df-space-unit)*0.75)",
      fontFamily: "var(--df-font-label)",
      fontWeight: "var(--df-weight-label)",
      fontSize: "calc(var(--df-space-unit)*1.75)",
      lineHeight: 1.25,
      overflowWrap: "anywhere"
    }
  }, note), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "calc(var(--df-space-unit)*0.5)",
      minHeight: "var(--df-control-h-md)",
      ...metaText,
      fontSize: "var(--df-size-meta)",
      textDecoration: "none"
    }
  }, linkLabel || href)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...metaText,
      fontSize: "var(--df-size-meta)",
      textAlign: "right"
    }
  }, valueLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, valueLabel), value && /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: "calc(var(--df-space-unit)*0.5)",
      fontFamily: "var(--df-font-label)",
      fontWeight: "var(--df-weight-label-strong)",
      fontSize: "calc(var(--df-space-unit)*2.25)",
      lineHeight: 1.05,
      fontVariantNumeric: "tabular-nums"
    }
  }, value)));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const meta = {
  fontFamily: "var(--df-badge-font)",
  fontSize: "var(--df-badge-size)",
  fontWeight: "var(--df-weight-meta-strong)",
  letterSpacing: "var(--df-tracking-meta)",
  lineHeight: 1.1,
  textTransform: "uppercase"
};

/** Stamped chip/badge. The ONLY tilted elements allowed in UI mode (register R6). */
function Badge({
  variant = "stamp",
  tilt = true,
  selected = false,
  style,
  children,
  ...rest
}) {
  const rotate = tilt ? "rotate(var(--df-tilt-stamp-min))" : "none";
  const variants = {
    stamp: {
      border: "var(--df-badge-border)",
      boxShadow: "var(--df-stamp-inset-ink)",
      background: "transparent",
      color: "var(--df-text-primary)",
      transform: rotate
    },
    kicker: {
      border: "var(--df-border-accent)",
      color: "var(--df-text-primary)",
      background: "transparent",
      transform: rotate
    },
    solid: {
      border: "var(--df-badge-border)",
      background: "var(--df-surface-inverse)",
      color: "var(--df-text-inverse)",
      transform: rotate
    },
    accent: {
      border: "var(--df-badge-border)",
      background: "var(--df-color-gadsden)",
      color: "var(--df-text-primary)",
      transform: "none"
    },
    chip: selected ? {
      border: "var(--df-badge-border)",
      background: "var(--df-surface-inverse)",
      color: "var(--df-text-inverse)",
      transform: "none"
    } : {
      border: "var(--df-badge-border)",
      background: "var(--df-color-paper)",
      color: "var(--df-text-primary)",
      transform: "none"
    }
  };
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--df-space-unit)*0.6)",
    width: "fit-content",
    maxWidth: "100%",
    padding: "calc(var(--df-space-unit)*0.75) calc(var(--df-space-unit)*1)",
    borderRadius: 0,
    ...meta,
    ...(variants[variant] || variants.stamp),
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline alert / toast per the donations data-warning: gadsden-wash halftone strip,
 * meta type, role=status. fixed=true docks it bottom-right as a toast. */
function Toast({
  variant = "warning",
  fixed = false,
  icon,
  role,
  style,
  children,
  ...rest
}) {
  const bg = variant === "warning" ? "var(--df-toast-bg)" : variant === "alert" ? "var(--df-surface-wash-red)" : "var(--df-surface-card)";
  const s = {
    display: "flex",
    alignItems: "start",
    gap: "calc(var(--df-space-unit)*1)",
    margin: 0,
    padding: "calc(var(--df-space-unit)*1.5)",
    border: variant === "alert" ? "var(--df-border-accent)" : "var(--df-toast-border)",
    borderRadius: 0,
    background: `var(--df-halftone-image), ${bg}`,
    backgroundSize: "var(--df-halftone-size), auto",
    fontFamily: "var(--df-font-meta)",
    fontSize: "var(--df-size-meta)",
    fontWeight: "var(--df-weight-meta-strong)",
    letterSpacing: 0,
    lineHeight: 1.35,
    textTransform: "uppercase",
    ...(fixed ? {
      position: "fixed",
      right: "var(--df-chrome-margin)",
      bottom: "var(--df-chrome-margin)",
      zIndex: "var(--df-z-sheet)",
      maxWidth: "calc(var(--df-space-unit)*52)",
      boxShadow: "var(--df-shadow-hard-sm)"
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("p", _extends({
    role: role || (variant === "alert" ? "alert" : "status"),
    style: s
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      flex: "0 0 auto",
      marginTop: "1px"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormRow.jsx
try { (() => {
/** Form row per the site's zip-form / watch-form: meta label above, then input + action
 * on one grid row (stacks under 720px via inline flexWrap), meta error line below. */
function FormRow({
  label,
  htmlFor,
  error,
  hint,
  children,
  style
}) {
  const metaText = {
    margin: 0,
    fontFamily: "var(--df-font-meta)",
    fontSize: "var(--df-size-meta)",
    fontWeight: "var(--df-weight-meta-strong)",
    letterSpacing: "var(--df-tracking-meta)",
    lineHeight: 1.1,
    textTransform: "uppercase"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "calc(var(--df-space-unit)*1.25)",
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: metaText
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "calc(var(--df-space-unit)*1)",
      minWidth: 0,
      alignItems: "stretch"
    }
  }, children), error && /*#__PURE__*/React.createElement("p", {
    role: "alert",
    style: metaText
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--df-text-accent)"
    }
  }, "\u25B2 "), error), hint && !error && /*#__PURE__*/React.createElement("p", {
    style: {
      ...metaText,
      color: "var(--df-text-muted)",
      fontWeight: "var(--df-weight-meta)"
    }
  }, hint));
}
Object.assign(__ds_scope, { FormRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input per the zip-form / watch-form pattern: paper field, 1.5px ink border, 0 radius, Oswald. */
function Input({
  size = "lg",
  invalid = false,
  style,
  ...rest
}) {
  const s = {
    minWidth: 0,
    width: "100%",
    minHeight: size === "xl" ? "var(--df-control-h-xl)" : "var(--df-control-h-lg)",
    padding: "0 calc(var(--df-space-unit)*1.5)",
    border: invalid ? "var(--df-border-accent)" : "var(--df-input-border)",
    borderRadius: 0,
    background: "var(--df-input-bg)",
    color: "var(--df-text-primary)",
    fontFamily: "var(--df-input-font)",
    fontWeight: size === "xl" ? "var(--df-weight-label-strong)" : "var(--df-weight-label)",
    fontSize: size === "xl" ? "clamp(16px, 2vw, 24px)" : "16px",
    lineHeight: 1.05,
    letterSpacing: 0,
    ...style
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    style: s
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FooterStrip.jsx
try { (() => {
const item = {
  whiteSpace: "nowrap"
};

/** Footer strip: disclaimer (exact wording, doctrine 2/3) · quiet ticker · risk note · contact.
 * Quiet wordmark = Space Mono 700 per Identity law (the shipped slam-family ticker is drift). */
function FooterStrip({
  contactEmail,
  extra,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "calc(var(--df-space-unit)*1) calc(var(--df-space-unit)*2)",
      padding: "calc(var(--df-space-unit)*2) var(--df-chrome-margin) calc(var(--df-space-unit)*2.5)",
      borderTop: "var(--df-border-default)",
      fontFamily: "var(--df-footer-font)",
      fontSize: "clamp(10px, 2vw, 16px)",
      fontWeight: "var(--df-weight-meta-strong)",
      letterSpacing: "var(--df-tracking-meta)",
      lineHeight: "var(--df-leading-slam-max)",
      textAlign: "center",
      textTransform: "uppercase",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: item
  }, "COMMUNITY-MADE \xB7 UNAFFILIATED WITH DEFLOCK.ORG"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...item,
      fontFamily: "var(--df-footer-ticker-font)",
      fontSize: "clamp(16px, 2.2vw, 24px)",
      letterSpacing: 0
    }
  }, "$DEFLOCK"), /*#__PURE__*/React.createElement("span", {
    style: item
  }, "Not financial advice."), contactEmail && /*#__PURE__*/React.createElement("span", {
    style: item
  }, "Content or takedown requests:", " ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${contactEmail}`,
    style: {
      display: "inline-flex",
      minHeight: "44px",
      alignItems: "center",
      paddingInline: "calc(var(--df-space-unit)*0.5)",
      textDecorationLine: "underline",
      textDecorationThickness: "var(--df-stroke-hairline)",
      textUnderlineOffset: "calc(var(--df-space-unit)*0.4)"
    }
  }, contactEmail)), extra);
}
Object.assign(__ds_scope, { FooterStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FooterStrip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const {
  useEffect
} = React;
const CSS = `
.df-site-header{position:sticky;top:0;z-index:var(--df-z-header);display:flex;align-items:center;justify-content:space-between;gap:calc(var(--df-space-unit)*3);padding:calc(var(--df-space-unit)*2) var(--df-chrome-margin);border-bottom:var(--df-border-default);background:var(--df-halftone-image),var(--df-color-paper);background-size:var(--df-halftone-size),auto}
.df-ticker-wordmark{display:inline-flex;flex:0 0 auto;align-items:center;min-height:var(--df-nav-h);font-family:var(--df-font-slam);font-size:clamp(24px,4vw,44px);line-height:var(--df-leading-slam-max);text-transform:uppercase;white-space:nowrap;word-break:keep-all;text-decoration:none;transition:transform var(--df-dur-ui) ease-out}
.df-ticker-wordmark:active{transform:scale(var(--df-press-scale))}
.df-site-nav{display:flex;align-items:center;justify-content:flex-end;gap:calc(var(--df-space-unit)*1);min-width:0}
.df-site-nav a{position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:var(--df-nav-h);padding:calc(var(--df-space-unit)*1) calc(var(--df-space-unit)*1.5);border:var(--df-stroke-hairline) solid transparent;color:var(--df-text-primary);font-family:var(--df-font-meta);font-size:clamp(12px,1.08vw,16px);font-weight:var(--df-weight-meta-strong);letter-spacing:var(--df-tracking-meta);line-height:var(--df-leading-slam-max);text-transform:uppercase;white-space:nowrap;text-decoration:none;transition:transform var(--df-dur-ui) ease-out}
.df-site-nav a:active{transform:scale(var(--df-press-scale))}
.df-site-nav a[data-active="true"]{border-color:var(--df-color-ink);background:var(--df-nav-active-bg);box-shadow:var(--df-nav-active-ring);transform:rotate(var(--df-tilt-stamp-min))}
.df-site-nav a[data-active="true"]:active{transform:rotate(var(--df-tilt-stamp-min)) scale(var(--df-press-scale))}
.df-nav-short{display:none}
@media (max-width:720px){
.df-site-header{position:static;justify-content:center}
.df-ticker-wordmark{font-size:24px}
.df-site-nav{position:fixed;right:0;bottom:0;left:0;z-index:var(--df-z-nav-mobile);display:grid;grid-template-columns:repeat(var(--df-nav-count,5),minmax(0,1fr));gap:0;border-top:var(--df-border-default);background:var(--df-halftone-image),var(--df-color-paper);background-size:var(--df-halftone-size),auto}
.df-site-nav a{min-width:0;padding:calc(var(--df-space-unit)*0.75) calc(var(--df-space-unit)*0.25);font-size:clamp(8px,2.45vw,12px);letter-spacing:0}
.df-nav-full{display:none}
.df-nav-short{display:inline;white-space:nowrap}
}`;
function useHeaderCss() {
  useEffect(() => {
    if (!document.getElementById("df-siteheader-css")) {
      const el = document.createElement("style");
      el.id = "df-siteheader-css";
      el.textContent = CSS;
      document.head.appendChild(el);
    }
  }, []);
}

/** Site chrome header: $DEFLOCK slam wordmark + meta nav. Active tab = ink stamp ring, −4° tilt.
 * ≤720px: header centers, nav docks as a fixed bottom tab bar. */
function SiteHeader({
  tabs = [],
  activeHref,
  onNavigate,
  homeHref = "#",
  style
}) {
  useHeaderCss();
  return /*#__PURE__*/React.createElement("header", {
    className: "df-site-header",
    style: style
  }, /*#__PURE__*/React.createElement("a", {
    className: "df-ticker-wordmark",
    href: homeHref,
    "aria-label": "DeflockOnSol home",
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate(homeHref);
    } : undefined
  }, "$DEFLOCK"), /*#__PURE__*/React.createElement("nav", {
    className: "df-site-nav",
    "aria-label": "Primary navigation",
    style: {
      "--df-nav-count": tabs.length || 5
    }
  }, tabs.map(t => {
    const active = t.href === activeHref;
    return /*#__PURE__*/React.createElement("a", {
      key: t.href,
      href: t.href,
      "data-active": active ? "true" : "false",
      "aria-current": active ? "page" : undefined,
      onClick: onNavigate ? e => {
        e.preventDefault();
        onNavigate(t.href);
      } : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "df-nav-full"
    }, t.label), /*#__PURE__*/React.createElement("span", {
      className: "df-nav-short"
    }, t.mobileLabel || t.label));
  })));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Sheet.jsx
try { (() => {
const {
  useEffect
} = React;
/** Modal sheet per the profile wallet-sheet: ink-48% backdrop, paper panel docked
 * bottom-right (bottom-stretch on mobile), hairline border, Escape closes. */
function Sheet({
  open = false,
  onClose,
  title,
  children,
  width,
  style
}) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--df-z-sheet)",
      display: "grid",
      alignItems: "end",
      padding: "var(--df-chrome-margin)",
      background: "var(--df-surface-backdrop)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      width: `min(100%, ${width || "var(--df-sheet-w)"})`,
      justifySelf: "end",
      padding: "var(--df-sheet-pad)",
      border: "var(--df-border-default)",
      background: "var(--df-color-paper)",
      display: "grid",
      gap: "calc(var(--df-space-unit)*2)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "calc(var(--df-space-unit)*2)",
      alignItems: "start",
      justifyContent: "space-between"
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "calc(var(--df-space-unit)*1) 0 0",
      fontFamily: "var(--df-font-slam)",
      fontWeight: 400,
      fontSize: "clamp(calc(var(--df-space-unit)*3.6), 5vw, calc(var(--df-space-unit)*6.5))",
      lineHeight: "var(--df-leading-slam-max)",
      letterSpacing: 0,
      textTransform: "uppercase",
      textWrap: "balance"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      minHeight: "var(--df-control-h-lg)",
      minWidth: "var(--df-control-h-lg)",
      padding: "0 calc(var(--df-space-unit)*2)",
      cursor: "pointer",
      border: "var(--df-border-default)",
      borderRadius: 0,
      background: "var(--df-surface-inverse)",
      color: "var(--df-text-inverse)",
      fontFamily: "var(--df-font-meta)",
      fontSize: "var(--df-size-meta)",
      fontWeight: "var(--df-weight-meta-strong)",
      letterSpacing: "var(--df-tracking-meta)",
      textTransform: "uppercase",
      transition: "transform var(--df-dur-ui) ease-out"
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "scale(var(--df-press-scale))";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "none";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
    }
  }, "CLOSE")), children));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  card: "var(--df-surface-card)",
  quiet: "var(--df-surface-card-quiet)",
  bright: "var(--df-surface-card-bright)",
  "wash-ink": "var(--df-surface-wash-ink)",
  accent: "var(--df-surface-wash-accent)",
  "accent-strong": "var(--df-surface-wash-accent-strong)",
  paper: "var(--df-color-paper)"
};

/** Card/panel: 1.5px ink border, warm-white-mixed paper fill, 0 radius.
 * raised = 3px border + hard offset shadow (feature panels: zip widget, legacy showcase).
 * stamp = red hairline + stamp inset rings (the verify panel). empty = dashed border. */
function Panel({
  variant = "card",
  surface,
  halftone = false,
  raised = false,
  pad = 3,
  as = "section",
  style,
  children,
  ...rest
}) {
  const bg = SURFACES[surface || (variant === "accent" ? "accent" : variant === "stamp" || variant === "empty" ? "quiet" : "card")] || SURFACES.card;
  const s = {
    minWidth: 0,
    padding: `calc(var(--df-space-unit)*${pad})`,
    borderRadius: 0,
    border: variant === "stamp" ? "var(--df-panel-stamp-border)" : variant === "empty" ? "var(--df-border-dashed)" : raised || variant === "raised" ? "var(--df-panel-raised-border)" : "var(--df-panel-border)",
    boxShadow: [variant === "stamp" ? "var(--df-panel-stamp-shadow)" : null, raised || variant === "raised" ? "var(--df-panel-raised-shadow)" : null].filter(Boolean).join(", ") || "none",
    background: halftone || variant === "accent" || raised || variant === "raised" ? `var(--df-halftone-image), ${bg}` : bg,
    backgroundSize: halftone || variant === "accent" || raised || variant === "raised" ? "var(--df-halftone-size), auto" : undefined,
    ...style
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Panel.jsx", error: String((e && e.message) || e) }); }

// register/press-check.js
try { (() => {
/* DeFlock press check — executable enforcement of register/register.json.
   Zero-dep. Auto: <script src="…/press-check.js" data-press-auto data-press-mode="expressive"></script>
   Programmatic: pressCheck({ root, mode: "expressive"|"ui", stamp, quiet }) -> { verdict, fails, results }
   Rule IDs match register.json checklists. A PASS is necessary, not sufficient. */
(() => {
  const PL = {
    paper: [242, 237, 227],
    ink: [20, 16, 10],
    red: [217, 43, 28],
    gadsden: [232, 182, 58],
    white: [255, 255, 255]
  };
  const ALLOWED = Object.values(PL).slice();
  for (const [a, b] of [["paper", "white"], ["paper", "ink"], ["paper", "red"], ["paper", "gadsden"]]) for (let w = 0.05; w < 1; w += 0.05) ALLOWED.push([0, 1, 2].map(i => PL[a][i] * w + PL[b][i] * (1 - w)));
  const dist = (c, d) => Math.hypot(c[0] - d[0], c[1] - d[1], c[2] - d[2]);
  const nearPlate = c => ALLOWED.some(a => dist(c, a) < 18);
  const isRed = c => c && dist(c, PL.red) < 40;
  function parseColor(s) {
    const m = s && s.match(/rgba?\(([\d.]+)[, ]+([\d.]+)[, ]+([\d.]+)(?:[,/ ]+([\d.]+))?\)/);
    if (!m) return null;
    const a = m[4] === undefined ? 1 : parseFloat(m[4]);
    if (a === 0) return null;
    let c = [+m[1], +m[2], +m[3]];
    if (a < 1) c = c.map((v, i) => v * a + PL.paper[i] * (1 - a));
    return c;
  }
  function rot(t) {
    if (!t || t === "none") return 0;
    try {
      const m = new DOMMatrixReadOnly(t);
      return Math.atan2(m.b, m.a) * 180 / Math.PI;
    } catch (e) {
      return 0;
    }
  }
  const ownText = el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
  function pressCheck(opts = {}) {
    const mode = opts.mode || "ui",
      root = opts.root || document.body,
      stamp = opts.stamp !== false;
    const rr = root.getBoundingClientRect();
    const info = [...root.querySelectorAll("*")].filter(el => {
      if (el.closest(".press-stamp") || /^(SCRIPT|STYLE|NOSCRIPT|LINK|META)$/.test(el.tagName)) return false;
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden" || parseFloat(cs.opacity) === 0) return false;
      const r = el.getBoundingClientRect();
      return r.width > 1 && r.height > 1;
    }).slice(0, 1500).map(el => ({
      el,
      cs: getComputedStyle(el),
      r: el.getBoundingClientRect()
    }));
    const res = [];
    const add = (id, pass, detail) => res.push({
      id,
      pass,
      detail
    });
    // R1 / R6 — tilt
    const tilts = info.map(x => ({
      x,
      a: rot(x.cs.transform)
    })).filter(t => Math.abs(t.a) >= 1 && Math.abs(t.a) <= 45);
    if (mode === "expressive") {
      add("R1 tilt", tilts.some(t => t.a > 0) && tilts.some(t => t.a < 0), tilts.length + " rotated element(s); need >=2 with opposing signs");
    } else {
      const big = tilts.filter(t => t.x.r.width * t.x.r.height > 0.25 * rr.width * rr.height);
      add("R6 tilt-discipline", big.length === 0, big.length ? big.length + " large container(s) tilted" : "containers straight \u00b7 " + tilts.length + " stamp-class tilt(s)");
    }
    // R2 — occlusion (frame-edge straddle)
    if (mode === "expressive") {
      const straddle = info.filter(x => {
        const r = x.r;
        const inside = r.right > rr.left && r.left < rr.right && r.bottom > rr.top && r.top < rr.bottom;
        const out = r.left < rr.left - 5 || r.right > rr.right + 5 || r.top < rr.top - 5 || r.bottom > rr.bottom + 5;
        return inside && out;
      });
      add("R2 occlusion", straddle.length > 0, straddle.length + " element(s) straddle the frame edge");
    }
    // R3 — figurative element
    if (mode === "expressive") {
      const figRe = /(motif-|emblem-|mascot|cam-pod|cam-spider|crow)/;
      const figs = info.filter(x => x.el.tagName === "IMG" && figRe.test(x.el.src || "") || figRe.test(x.cs.backgroundImage || ""));
      add("R3 figure", figs.length > 0, figs.length + " sanctioned figure(s) (murmuration/emblem/camera/mascot)");
    }
    // C2 — plates only
    const off = new Set();
    for (const x of info) for (const p of ["color", "backgroundColor", "borderTopColor"]) {
      const c = parseColor(x.cs[p]);
      if (c && !nearPlate(c)) off.add(x.cs[p]);
    }
    add("C2 plates", off.size === 0, off.size ? "foreign colors: " + [...off].slice(0, 4).join(" ") : "paper/ink/red/gadsden only");
    // C1 — disclaimer, ticker, emdash
    const txt = (root.textContent || "").toUpperCase();
    add("C1 disclaimer", txt.includes("COMMUNITY-MADE") && txt.includes("UNAFFILIATED WITH DEFLOCK.ORG"), "exact wording present?");
    const tickers = info.filter(x => x.el.childElementCount === 0 && /\$DEFLOCK/i.test(x.el.textContent));
    const broken = tickers.filter(x => {
      const rg = document.createRange();
      rg.selectNodeContents(x.el);
      return rg.getClientRects().length > 1;
    });
    add("C1 ticker", broken.length === 0, tickers.length ? tickers.length + " ticker(s), " + broken.length + " wrapped" : "no ticker found (ok if none intended)");
    const prose = info.filter(x => x.el.childElementCount === 0 && /[A-Za-z][^\u2014]{0,8}\u2014[^\u2014]{0,8}[A-Za-z]/.test(x.el.textContent || ""));
    add("C1 emdash", prose.length === 0, prose.length ? prose.length + " prose emdash(es) \u00b7 banned in artifact copy" : "none in prose");
    // K — red type at large-text floor (decorative aria-hidden glyphs exempt)
    const redSmall = info.filter(x => {
      if (!ownText(x.el) || x.el.closest('[aria-hidden="true"]')) return false;
      if (!isRed(parseColor(x.cs.color))) return false;
      const fs = parseFloat(x.cs.fontSize),
        w = parseInt(x.cs.fontWeight) || 400;
      return !(fs >= 24 || fs >= 18.66 && w >= 700);
    });
    add("K red-type", redSmall.length === 0, redSmall.length ? redSmall.length + " red text element(s) below large-text floor (>=24px, or >=18.66px bold)" : "red type at display sizes only");
    // L + T — expressive floors
    if (mode === "expressive") {
      const slams = info.filter(x => /archivo/i.test(x.cs.fontFamily) && ownText(x.el));
      const maxFs = Math.max(0, ...slams.map(x => parseFloat(x.cs.fontSize)));
      add("L slam-share", maxFs >= 0.08 * rr.height, slams.length ? "largest slam " + maxFs.toFixed(0) + "px vs 8% floor " + (0.08 * rr.height).toFixed(0) + "px" : "no slam line found");
      let redA = 0;
      for (const x of info) {
        const bg = parseColor(x.cs.backgroundColor);
        const pbg = x.el.parentElement && parseColor(getComputedStyle(x.el.parentElement).backgroundColor);
        if (isRed(bg) && !isRed(pbg)) redA += x.r.width * x.r.height;
      }
      add("T red-share", redA <= 0.15 * rr.width * rr.height, (100 * redA / (rr.width * rr.height)).toFixed(1) + "% of frame red-flooded (cap 15%)");
    }
    // A — ui accessibility
    if (mode === "ui") {
      const small = info.filter(x => x.el.matches("a[href],button,input,select,textarea,[role=button]") && x.cs.display !== "inline" && x.r.height < 43);
      add("A tap-targets", small.length === 0, small.length ? small.length + " interactive element(s) under 44px" : "all >=44px");
      let cssText = "";
      for (const sh of document.styleSheets) {
        try {
          for (const r of sh.cssRules) cssText += r.cssText;
        } catch (e) {}
      }
      add("A reduced-motion", /prefers-reduced-motion/.test(cssText), "stylesheet handles prefers-reduced-motion?");
      add("A focus-visible", /:focus-visible/.test(cssText), "focus-visible ring defined?");
    }
    const fails = res.filter(r => !r.pass);
    const verdict = fails.length ? "PULLED" : "PASSED THE PRESS";
    if (!opts.quiet) {
      try {
        console.table(res.map(r => ({
          rule: r.id,
          pass: r.pass ? "PASS" : "FAIL",
          detail: r.detail
        })));
      } catch (e) {}
      console.log("[press-check] " + verdict + (fails.length ? " \u00b7 " + fails.map(f => f.id).join(", ") : ""));
    }
    if (stamp) {
      const ids = [...new Set(fails.map(f => f.id.split(" ")[0]))];
      const col = fails.length ? "#d92b1c" : "#14100a";
      const s = document.createElement("div");
      s.className = "press-stamp";
      s.style.cssText = "position:" + (root === document.body ? "fixed" : "absolute") + ";right:10px;top:10px;z-index:99999;transform:rotate(-4deg);padding:6px 10px;border:3px solid " + col + ";box-shadow:inset 0 0 0 2px #f2ede3,inset 0 0 0 4.5px " + col + ";background:#f2ede3;color:" + col + ";font:700 13px/1.2 'Space Mono',monospace;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;max-width:70%";
      s.textContent = fails.length ? "PULLED \u00b7 " + ids.join(" ") : "PASSED THE PRESS";
      s.title = res.map(r => (r.pass ? "PASS " : "FAIL ") + r.id + " \u2014 " + r.detail).join("\n");
      s.addEventListener("click", () => s.remove());
      (root === document.body ? document.body : root).appendChild(s);
    }
    return {
      verdict,
      fails: fails.map(f => f.id),
      results: res
    };
  }
  window.pressCheck = pressCheck;
  const tag = document.currentScript;
  if (tag && tag.hasAttribute("data-press-auto")) {
    const mode = tag.getAttribute("data-press-mode") || "ui";
    window.addEventListener("load", () => setTimeout(() => pressCheck({
      mode
    }), 150));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "register/press-check.js", error: String((e && e.message) || e) }); }

// scripts/generate-tokens.mjs
try { (() => {
// DeFlock Design token compiler (run with: node scripts/generate-tokens.mjs)
// Reads tokens/tokens.json (machine truth, locked) + tokens/web-tokens.source.json
// (three-tier web definitions) and emits tokens/generated/df-tokens.css.
// Replaces the hand-synced mirror (src/styles/tokens.css) that caused drift.
function compile(truth, source, date) {
  const jsonPath = p => p.split('.').reduce((n, k) => n == null ? undefined : n[k], truth);
  const resolve = (def, name) => def.value.replace(/\{json:([^}]+)\}/g, (_, p) => {
    const hit = jsonPath(p);
    if (hit === undefined) {
      if (def.fallback !== undefined) return def.fallback;
      throw new Error('--df-' + name + ": pointer '" + p + "' missing, no fallback");
    }
    return String(hit);
  }).replace(/\{([a-z][a-z0-9-]*)\}/g, (_, ref) => 'var(--df-' + ref + ')');
  const kindOf = name => /(^|-)(color|surface|text|backdrop|wash|border)/.test(name) ? 'color' : /shadow|inset|focus-ring/.test(name) ? 'shadow' : /font|weight|tracking|leading|size-|type-/.test(name) ? 'font' : /radius/.test(name) ? 'radius' : /space|pad$|control-h|sheet-w|avatar-size|chrome|-offset/.test(name) ? 'spacing' : 'other';
  const lines = ['/* GENERATED FILE — DO NOT EDIT.', ' * Compiled by scripts/generate-tokens.mjs from tokens/tokens.json (locked machine', ' * truth, 2026-07-11) + tokens/web-tokens.source.json (three-tier web definitions).', ' * Generated: ' + date + '. Edit the sources and re-run. */', ':root {'];
  for (const [tier, label] of [['tier1', 'TIER 1 — PRIMITIVES (plates, type, texture recipes, physical values)'], ['tier2', 'TIER 2 — SEMANTIC (surfaces, text, borders, interaction, scale)'], ['tier3', 'TIER 3 — COMPONENT (per-component contract)']]) {
    lines.push('  /* ' + label + ' */');
    for (const [name, def] of Object.entries(source[tier])) {
      const kind = kindOf(name);
      lines.push('  --df-' + name + ': ' + resolve(def, name) + ';' + (kind === 'other' ? ' /* @kind other */' : ''));
    }
  }
  lines.push('  /* LEGACY COMPAT — names consumed by shipped src/ CSS; migrate then delete (docs/migration-map.md) */', '  --df-texture-halftone-image: var(--df-halftone-image); /* @kind other */', '  --df-texture-halftone-size: var(--df-halftone-size); /* @kind other */', '  --df-texture-reg-mark-stroke: var(--df-stroke-hairline); /* @kind other */', '  --df-texture-misregistration-shadow: var(--df-misreg-shadow);', '  --df-texture-stamp-shadow: var(--df-stamp-inset);', '  --df-texture-stamp-rotate-min: var(--df-tilt-stamp-min); /* @kind other */', '  --df-texture-stamp-rotate-max: var(--df-tilt-stamp-max); /* @kind other */', '  --df-space-base-unit: var(--df-space-unit);', '  --df-layout-chrome-margin: var(--df-chrome-margin);', '  --df-type-slam-family: var(--df-font-slam);', '  --df-type-label-family: var(--df-font-label);', '  --df-type-meta-family: var(--df-font-meta);', '  --df-font-display: var(--df-font-slam);', '}', '');
  return lines.join('\n');
}
// Node CLI entry (run from project root) — inert in the browser bundle.
async function main() {
  const {
    readFileSync,
    writeFileSync,
    mkdirSync
  } = await import('node:fs');
  const truth = JSON.parse(readFileSync('tokens/tokens.json', 'utf8'));
  const source = JSON.parse(readFileSync('tokens/web-tokens.source.json', 'utf8'));
  mkdirSync('tokens/generated', {
    recursive: true
  });
  writeFileSync('tokens/generated/df-tokens.css', compile(truth, source, new Date().toISOString().slice(0, 10)));
  console.log('wrote tokens/generated/df-tokens.css');
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && process.argv[1] && process.argv[1].endsWith('generate-tokens.mjs')) main();
Object.assign(__ds_scope, { compile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/generate-tokens.mjs", error: String((e && e.message) || e) }); }

// scripts/verify-tokens.mjs
try { (() => {
// CI drift guard: fails (exit 1) when tokens/generated/df-tokens.css is stale vs its
// sources. Run from project root: node scripts/verify-tokens.mjs
// (Node-only entry; inert in the browser bundle — no static node imports.)

async function main() {
  const {
    readFileSync
  } = await import('node:fs');
  const gen = readFileSync('tokens/generated/df-tokens.css', 'utf8');
  const truth = JSON.parse(readFileSync('tokens/tokens.json', 'utf8'));
  const source = JSON.parse(readFileSync('tokens/web-tokens.source.json', 'utf8'));
  const date = (gen.match(/Generated: (\d{4}-\d{2}-\d{2})/) || [])[1] || 'unknown';
  if (__ds_scope.compile(truth, source, date) !== gen) {
    console.error('DRIFT: tokens/generated/df-tokens.css does not match its sources. Run: node scripts/generate-tokens.mjs');
    process.exit(1);
  }
  console.log('tokens in sync (' + date + ')');
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && process.argv[1] && process.argv[1].endsWith('verify-tokens.mjs')) main();
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/verify-tokens.mjs", error: String((e && e.message) || e) }); }

// ui_kits/website/app.screen.js
try { (() => {
(() => {
  const D = window.DF_DATA;
  const SCREENS = {
    "/": window.WhyScreen,
    "/raid-station": window.RaidScreen,
    "/library": window.LibraryScreen,
    "/donations": window.DonationsScreen,
    "/profile": window.ProfileScreen
  };
  const LS_KEY = "df-kit-route";
  function App() {
    const {
      SiteHeader,
      FooterStrip
    } = window.DeFlockDesign_d58f76;
    const [route, setRoute] = React.useState(() => {
      try {
        const r = localStorage.getItem(LS_KEY);
        return SCREENS[r] ? r : "/";
      } catch (e) {
        return "/";
      }
    });
    const nav = href => {
      if (!SCREENS[href]) return;
      setRoute(href);
      try {
        localStorage.setItem(LS_KEY, href);
      } catch (e) {}
      window.scrollTo(0, 0);
    };
    React.useEffect(() => {
      if (window.lucide) window.lucide.createIcons();
    });
    const Screen = SCREENS[route] || SCREENS["/"];
    return /*#__PURE__*/React.createElement("div", {
      "data-screen-label": D.tabs.find(t => t.href === route)?.label,
      style: {
        position: "relative",
        minHeight: "100vh",
        overflowX: "clip",
        isolation: "isolate",
        background: "var(--df-halftone-image), var(--df-color-paper)",
        backgroundSize: "var(--df-halftone-size), auto",
        display: "grid",
        gridTemplateRows: "auto 1fr auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "fixed",
        inset: 0,
        zIndex: "var(--df-z-grain)",
        pointerEvents: "none",
        opacity: "var(--df-grain-opacity)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
        backgroundSize: "120px 120px",
        mixBlendMode: "multiply"
      }
    }), /*#__PURE__*/React.createElement(SiteHeader, {
      tabs: D.tabs,
      activeHref: route,
      onNavigate: nav,
      homeHref: "/"
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        minHeight: "calc(100vh - 200px)",
        padding: "calc(var(--df-space-unit)*9) var(--df-chrome-margin) calc(var(--df-space-unit)*7)"
      }
    }, /*#__PURE__*/React.createElement(Screen, null)), /*#__PURE__*/React.createElement(FooterStrip, {
      contactEmail: D.footerEmail
    }));
  }
  let dfTries = 0;
  function dfMount() {
    if (!window.DF_DATA) return; // not the kit page: bail silently
    if (window.DeFlockDesign_d58f76 && window.DeFlockDesign_d58f76.SiteHeader) {
      ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
    } else if (dfTries++ < 100) {
      setTimeout(dfMount, 80);
    } else {
      document.getElementById("root").innerHTML = '<p style="padding:24px;font-family:monospace">_ds_bundle.js did not load - reload the page.</p>';
    }
  }
  dfMount();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.screen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Frozen fixture snapshot of the DeflockOnSol site copy (2026-07-14) — doctrine 5: no
// invented amounts; live RPC values render as "—" with an honest note. Canonical values
// live on the official site; raid.targets and footerEmail are placeholders here.
window.DF_DATA = {
  tabs: [{
    href: "/",
    label: "Why DeFlock",
    mobileLabel: "Why"
  }, {
    href: "/raid-station",
    label: "Raid Station",
    mobileLabel: "Raid"
  }, {
    href: "/library",
    label: "Library",
    mobileLabel: "Library"
  }, {
    href: "/donations",
    label: "Donations",
    mobileLabel: "Donate"
  }, {
    href: "/profile",
    label: "Profile",
    mobileLabel: "Profile"
  }],
  links: {
    buyCoffee: "https://buymeacoffee.com/deflock",
    communityX: "https://x.com/DeflockOnSol",
    pumpfun: "https://pump.fun/coin/FaL1PFQhNo4JAGaQKSnKurWeNtpexqEAduQjR4H6pump",
    solscanAccount: "https://solscan.io/account/",
    deflockOrg: "https://deflock.org",
    osm: "https://www.openstreetmap.org/copyright",
    githubFoggedLens: "https://github.com/FoggedLens"
  },
  accounts: {
    claimWallet: "8HzQiR4Ycb45vn394RRD5DpjLxuTm5dTGebZwjNYDhYn",
    feeVault: "6HUYQiV7cYwvGVzhN8cEHp11QnGow5Fm6E3UgAjyNusN",
    tokenMint: "FaL1PFQhNo4JAGaQKSnKurWeNtpexqEAduQjR4H6pump",
    legacyRecipient: "9qxbGSBqMKeDBS8H64pof5Jz3wNSZp5gfMZvRsJ2V5PP"
  },
  why: {
    kicker: "WHO WATCHES THE WATCHERS",
    heroLabel: "THEY MAP YOUR PLATES.",
    heroTitle: "WE MAP THE CAMERAS.",
    heroValue: "The unaffiliated $DeFlock community terminal: see the surveillance near you, grab raid-ready content, and back the movement with receipts.",
    ctas: ["CHECK YOUR ZIP", "WHY $DEFLOCK"],
    zip: {
      label: "LIVE MAP CHECK",
      title: "Run your ZIP through the camera map.",
      body: "This widget queries OpenStreetMap data live for ALPR surveillance camera nodes within 10km of the ZIP centroid.",
      idle: ["READY FOR A ZIP", "Query OpenStreetMap data for mapped ALPR cameras within 10km."],
      loading: ["PRESSING THE QUERY", "Checking the live OpenStreetMap data."],
      invalid: "Enter a 5-digit US ZIP code and try again.",
      error: ["QUERY DID NOT LAND", "The live map query did not answer. Try the ZIP again in a minute."],
      empty: ["NO MAPPED HIT YET", "No mapped ALPR cameras within 10km of this ZIP yet."],
      readySuffix: "ALPR cameras mapped within 10km of",
      mapLink: "See them on the deflock.org map",
      attribution: "© OpenStreetMap contributors plus DeFlock project data."
    },
    thesis: [{
      label: "What ALPRs do",
      body: "Automatic license plate reader cameras photograph and log vehicle license plates at scale. That includes cameras sold by Flock Safety Inc."
    }, {
      label: "Why people push back",
      body: "These cameras are deployed across many US municipalities, which makes privacy and local accountability an active local-government policy debate."
    }, {
      label: "What deflock.org does",
      body: "The DeFlock project is open-source, community-run, and built on OpenStreetMap data to map ALPR surveillance cameras worldwide."
    }, {
      label: "What the community does",
      body: "$DeFlock is a Solana community memecoin launched via pump.fun. The community makes noise and directs a share of creator-fee claims toward donations, with receipts tracked on the Donations tab."
    }],
    thesisActions: [["Buy $DeFlock", "pumpfun"], ["X community", "communityX"]],
    realProject: {
      label: "THE REAL PROJECT",
      title: "deflock.org is the source signal.",
      body: "We are not affiliated with deflock.org. We are fans directing public receipt-backed support toward the mission.",
      link: "Visit deflock.org"
    }
  },
  donations: {
    meta: "Community fee transparency",
    title: "Donations",
    body: "Public tracking for the unaffiliated $DeFlock community\u2019s creator-fee claims, unclaimed vault balance, and community-reported donation records for support sent to the DeFlock open-source project.",
    kpis: [{
      eyebrow: "CLAIMED SOL",
      label: "Claimed by wallet",
      value: "\u2014 SOL",
      sub: "live from Solana RPC",
      wash: "accent"
    }, {
      eyebrow: "CLAIMABLE SOL",
      label: "Claimable now",
      value: "\u2014 SOL",
      sub: "unclaimed vault estimate",
      nudge: true
    }, {
      eyebrow: "NEEDS RECEIPTS",
      label: "Needs receipts",
      value: "\u2014",
      sub: "50% claimed allocation minus accepted receipts",
      wash: "red"
    }],
    impact: {
      head: ["Donation impact", "Receipt reconciliation", "50% allocation"],
      rows: [["Claimed metric", "\u2014 SOL"], ["Estimated DeFlock allocation", "\u2014"], ["Accepted receipts", "$580.00"], ["Needs receipts", "\u2014"], ["Receipt-backed months funded", "21.5"], ["Monthly infra estimate", "$27.00"]],
      note: "USD values are mark-to-market estimates unless tied to a concrete receipt. Monthly estimate source: DeFlock VPS $6/mo + DeFlock CMS VPS $6/mo + AWS midpoint $15/mo."
    },
    receipts: {
      head: ["Off-chain records", "Community-confirmed records", "2 accepted"],
      rows: [{
        date: "2026-07-09",
        amount: "$500.00",
        note: "$DeFlock community confirmed donation via Discord.",
        status: "community confirmed"
      }, {
        date: "2026-07-11",
        amount: "$80.00",
        note: "$DeFlock community confirmed an $80/month GitHub Sponsors contribution to Will Freeman, creator of deflock.org.",
        status: "community confirmed"
      }],
      totals: [["Receipts accepted", "2"], ["Accepted receipt total", "$580.00"]]
    },
    legacy: {
      badge: "Verified claimed",
      meta: "PRE-CTO ESCROW CLAIMED BY FOGGEDLENS",
      title: "FoggedLens claimed the pre-CTO escrow",
      paras: ["The creator of deflock.org, Will Freeman, claimed the fees directed to his GitHub through pump.fun on July 13.", "The fees were escrowed by pump.fun after Will\u2019s initial refusal to interact with or associate with the $DeFlock token on July 8.", "We\u2019re excited to keep directing community support toward deflock.org\u2019s mission and to build around public receipts.", "This proof tracks a public fee-recipient claim only; it is not an endorsement of $DeFlock or @DeflockOnSol by deflock.org, FoggedLens, or Will Freeman."],
      valueRows: [["CLAIM STATUS", "Claimed"], ["CURRENT FOGGEDLENS WALLET BALANCE \u00b7 NOT IN TOTALS", "\u2014 SOL"]]
    },
    meaning: {
      head: ["Meaning", "What this page means", "Unaffiliated community"],
      items: ["On-chain claim and vault values are live from Solana RPC, with a frozen real-data fixture as fallback if RPC is unavailable.", "Donation records are off-chain evidence supplied by the $DeFlock community.", "This dashboard and @DeflockOnSol are not affiliated with, sponsored by, or endorsed by deflock.org or the DeFlock open-source project."]
    }
  },
  profile: {
    kicker: "PROFILE",
    title: "Your watch post.",
    copy: "Track your wallets. No signature required.",
    watch: {
      kicker: "WATCH A WALLET",
      title: "Paste once. Keep it under glass.",
      label: "Wallet address",
      button: "WATCH",
      empty: "NO WATCHED WALLETS YET",
      dupError: "That wallet is already on watch.",
      pending: "Holdings are refreshing. Your watch is saved to your profile and will show here."
    },
    verify: {
      kicker: "VERIFY BY SIGNATURE",
      title: "Prove the wallet is yours.",
      body: "Tie a wallet to this profile with a signature. No transfer. No spend.",
      button: "OPEN VERIFY NOTES",
      sheetTitle: "Signature verify",
      sheetBody: "The wallet signs a plain ownership message. The profile records that proof as a wallet-linked profile signal.",
      sheetHint: "Connect and sign below. It costs nothing and moves nothing.",
      sheetButton: "SIGN WITH WALLET"
    },
    signedOut: {
      kicker: "NOT SIGNED IN",
      button: "SIGN IN WITH X"
    },
    roleBadge: "No watched wallet yet",
    roleBadgeSaved: "Wallet watch saved"
  },
  library: {
    kicker: "COMMUNITY LIBRARY",
    title: "Raid-ready asset library",
    framing: "Stickers, posters, banners, memes, logos, and video for the $DeFlock community.",
    actions: ["RAID-READY KIT", "SUBMIT YOUR WORK", "QUEUE"],
    filters: ["ALL", "STICKERS", "POSTERS", "BANNERS", "MEMES", "TRANSPARENTS", "LOGOS", "VIDEO"],
    empty: "No assets in this set yet.",
    assets: [{
      src: "img/stk-flock-watches-back-flat.png",
      title: "stk-flock-watches-back",
      tags: "STICKER \u00b7 1024\u00d71024",
      kind: "STICKERS"
    }, {
      src: "img/stk-murmuration-eye-flat.png",
      title: "stk-murmuration-eye",
      tags: "STICKER \u00b7 1408\u00d7768",
      kind: "STICKERS"
    }, {
      src: "img/stk2-A3-everyday-flat.png",
      title: "stk2-A3-everyday",
      tags: "STICKER \u00b7 1408\u00d7768",
      kind: "STICKERS"
    }, {
      src: "img/stk2-D1-flat.png",
      title: "stk2-D1",
      tags: "STICKER \u00b7 1408\u00d7768",
      kind: "STICKERS"
    }, {
      src: "img/stk2-J1-flat.png",
      title: "stk2-J1",
      tags: "STICKER \u00b7 1408\u00d7768",
      kind: "STICKERS"
    }, {
      src: "img/mascot-pfp-400.png",
      title: "deflock-mascot-pfp",
      tags: "LOGO \u00b7 400\u00d7400",
      kind: "LOGOS"
    }]
  },
  raid: {
    kicker: "RAID STATION",
    title: "Signal moves when people mean it",
    mission: "Step in when the target matters. Add your words. Leave a real trace.",
    targets: [{
      author: "example-reporter",
      why: "Local news covered a city council vote on ALPR cameras: live policy fight",
      kit: "long kit"
    }, {
      author: "example-account",
      why: "High-visibility post about ALPR expansion: counter with mapped facts",
      kit: "short kit"
    }, {
      author: "example-analyst",
      why: "Public records story on ALPR database misuse: abuse-of-access case study",
      kit: "medium kit"
    }]
  },
  footerEmail: "contact@deflockonsol.example"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/donations.screen.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const D = window.DF_DATA;
  const u = n => `calc(var(--df-space-unit)*${n})`;
  const meta = {
    margin: 0,
    fontFamily: "var(--df-font-meta)",
    fontSize: "clamp(10px,1.2vw,16px)",
    fontWeight: 700,
    letterSpacing: "var(--df-tracking-meta)",
    lineHeight: 1.05,
    textTransform: "uppercase"
  };
  const slamH = {
    margin: 0,
    fontFamily: "var(--df-font-slam)",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "var(--df-leading-slam-max)",
    textTransform: "uppercase"
  };
  const short = a => `${a.slice(0, 4)}…${a.slice(-4)}`;
  const Icon = ({
    n,
    s = 14
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: s,
      height: s,
      display: "inline-flex"
    },
    "aria-hidden": "true"
  });
  function Head({
    rows
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        gap: u(2),
        marginBottom: u(2.5)
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: meta
    }, rows[0]), /*#__PURE__*/React.createElement("h2", {
      style: {
        ...slamH,
        fontSize: "clamp(24px,4.5vw,48px)"
      }
    }, rows[1])), /*#__PURE__*/React.createElement("span", {
      style: {
        ...meta,
        display: "inline-flex",
        minHeight: u(5.5),
        alignItems: "center",
        padding: `${u(1)} ${u(1.25)}`,
        border: "var(--df-border-default)",
        fontSize: 12,
        letterSpacing: 0
      }
    }, rows[2]));
  }
  function DonationsScreen() {
    const {
      Button,
      Panel,
      Badge,
      Metric,
      StatRow,
      Toast
    } = window.DeFlockDesign_d58f76;
    const d = D.donations;
    const acct = (label, address) => /*#__PURE__*/React.createElement(Button, {
      key: label,
      size: "md",
      href: `${D.links.solscanAccount}${address}`,
      target: "_blank",
      style: {
        fontSize: 12,
        letterSpacing: 0,
        justifyContent: "center"
      }
    }, label, ": ", short(address), " ", /*#__PURE__*/React.createElement(Icon, {
      n: "external-link"
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: u(3),
        width: "min(100%, 1184px)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "donations-title",
      style: {
        display: "grid",
        gap: u(2),
        padding: `0 0 ${u(1.5)}`,
        background: "linear-gradient(90deg, color-mix(in srgb, var(--df-color-gadsden) 18%, transparent), transparent 54%)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: meta
    }, d.meta), /*#__PURE__*/React.createElement("h1", {
      id: "donations-title",
      style: {
        ...slamH,
        fontSize: "var(--df-size-title-page)",
        lineHeight: 1.05,
        textShadow: "var(--df-misreg-shadow)",
        maxWidth: "768px"
      }
    }, d.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: `${u(1.5)} 0 0`,
        fontFamily: "var(--df-font-label)",
        fontSize: "clamp(14.4px,1.5vw,19.2px)",
        lineHeight: 1.25,
        maxWidth: "656px"
      }
    }, d.body)), /*#__PURE__*/React.createElement("div", {
      "aria-label": "Donation dashboard links",
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: u(1),
        justifySelf: "start"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      href: D.links.buyCoffee,
      target: "_blank",
      style: {
        fontSize: 12,
        letterSpacing: 0
      }
    }, "Donate ", /*#__PURE__*/React.createElement(Icon, {
      n: "external-link",
      s: 15
    })), acct("Claim wallet", D.accounts.claimWallet), acct("Fee vault", D.accounts.feeVault), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      href: D.links.communityX,
      target: "_blank",
      style: {
        fontSize: 12,
        letterSpacing: 0
      }
    }, "Community X ", /*#__PURE__*/React.createElement(Icon, {
      n: "external-link",
      s: 15
    })), /*#__PURE__*/React.createElement(Button, {
      href: D.links.pumpfun,
      target: "_blank",
      style: {
        fontSize: 12,
        letterSpacing: 0
      }
    }, "Buy $DeFlock ", /*#__PURE__*/React.createElement(Icon, {
      n: "external-link",
      s: 15
    })))), /*#__PURE__*/React.createElement("section", {
      "aria-label": "Donation metrics",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        gap: u(2)
      }
    }, d.kpis.map(k => /*#__PURE__*/React.createElement(Metric, _extends({
      key: k.eyebrow
    }, k)))), /*#__PURE__*/React.createElement(Panel, {
      "aria-labelledby": "impact-title"
    }, /*#__PURE__*/React.createElement(Head, {
      rows: d.impact.head
    }), /*#__PURE__*/React.createElement("dl", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        gap: u(2),
        margin: 0
      }
    }, d.impact.rows.map(([dt, dd]) => /*#__PURE__*/React.createElement("div", {
      key: dt,
      style: {
        minWidth: 0,
        paddingTop: u(1.5),
        borderTop: "var(--df-border-default)"
      }
    }, /*#__PURE__*/React.createElement("dt", {
      style: {
        ...meta,
        fontSize: 12,
        letterSpacing: 0,
        lineHeight: 1.2
      }
    }, dt), /*#__PURE__*/React.createElement("dd", {
      style: {
        margin: `${u(0.5)} 0 0`,
        fontFamily: "var(--df-font-slam)",
        fontSize: "clamp(24px,4.6vw,44px)",
        lineHeight: "var(--df-leading-slam-max)",
        textTransform: "uppercase",
        fontVariantNumeric: "tabular-nums",
        overflowWrap: "anywhere"
      }
    }, dd)))), /*#__PURE__*/React.createElement(Toast, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "shield-check",
        s: 16
      }),
      style: {
        marginTop: u(2),
        background: "transparent",
        border: "none",
        borderTop: "var(--df-border-default)",
        padding: `${u(2)} 0 0`,
        textTransform: "none",
        fontFamily: "var(--df-font-label)",
        fontSize: 15,
        fontWeight: 400,
        letterSpacing: 0
      }
    }, d.impact.note)), /*#__PURE__*/React.createElement(Panel, {
      "aria-labelledby": "receipts-title"
    }, /*#__PURE__*/React.createElement(Head, {
      rows: d.receipts.head
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: u(1)
      }
    }, d.receipts.rows.map(r => /*#__PURE__*/React.createElement(StatRow, {
      key: r.date,
      date: r.date,
      title: r.amount,
      note: r.note,
      valueLabel: r.status
    }))), /*#__PURE__*/React.createElement("dl", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        gap: u(2),
        margin: `${u(2)} 0 0`
      }
    }, d.receipts.totals.map(([dt, dd]) => /*#__PURE__*/React.createElement("div", {
      key: dt,
      style: {
        paddingTop: u(1.5),
        borderTop: "var(--df-border-default)"
      }
    }, /*#__PURE__*/React.createElement("dt", {
      style: {
        ...meta,
        fontSize: 12,
        letterSpacing: 0
      }
    }, dt), /*#__PURE__*/React.createElement("dd", {
      style: {
        margin: `${u(0.5)} 0 0`,
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: 18,
        fontVariantNumeric: "tabular-nums"
      }
    }, dd))))), /*#__PURE__*/React.createElement(Panel, {
      "aria-labelledby": "legacy-title",
      surface: "accent-strong",
      halftone: true,
      raised: true,
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(256px,auto)",
        gap: u(3)
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      variant: "solid",
      style: {
        marginBottom: u(1.5)
      }
    }, d.legacy.badge), /*#__PURE__*/React.createElement("p", {
      style: meta
    }, d.legacy.meta), /*#__PURE__*/React.createElement("h2", {
      id: "legacy-title",
      style: {
        ...slamH,
        fontSize: "clamp(24px,4.5vw,48px)"
      }
    }, d.legacy.title), d.legacy.paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        margin: `${u(1.5)} 0 0`,
        fontFamily: "var(--df-font-label)",
        fontSize: "clamp(14.4px,1.5vw,19.2px)",
        lineHeight: 1.25,
        maxWidth: "656px"
      }
    }, p))), /*#__PURE__*/React.createElement(Panel, {
      as: "div",
      pad: 2,
      surface: "paper",
      style: {
        display: "grid",
        alignContent: "start",
        gap: u(1),
        background: "color-mix(in srgb, var(--df-color-paper) 88%, white)"
      }
    }, d.legacy.valueRows.map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: k
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...meta,
        fontSize: 12
      }
    }, k), /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: "var(--df-font-slam)",
        fontWeight: 400,
        fontSize: "clamp(24px,3vw,44px)",
        lineHeight: "var(--df-leading-slam-max)",
        textTransform: "uppercase",
        fontVariantNumeric: "tabular-nums"
      }
    }, v))), acct("Escrow account", D.accounts.legacyRecipient), /*#__PURE__*/React.createElement(Button, {
      href: D.links.githubFoggedLens,
      target: "_blank",
      style: {
        fontSize: 12,
        letterSpacing: 0
      }
    }, "github.com/FoggedLens ", /*#__PURE__*/React.createElement(Icon, {
      n: "external-link"
    })), /*#__PURE__*/React.createElement(Button, {
      href: D.links.pumpfun,
      target: "_blank",
      style: {
        fontSize: 12,
        letterSpacing: 0
      }
    }, "View on pump.fun ", /*#__PURE__*/React.createElement(Icon, {
      n: "external-link"
    })))), /*#__PURE__*/React.createElement(Panel, {
      "aria-labelledby": "accounts-title"
    }, /*#__PURE__*/React.createElement(Head, {
      rows: ["Tracked public accounts", "Sources", "Updated 2026-07-14"]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,minmax(0,1fr))",
        gap: u(2)
      }
    }, acct("Claim wallet", D.accounts.claimWallet), acct("Fee vault", D.accounts.feeVault), acct("Token mint", D.accounts.tokenMint), /*#__PURE__*/React.createElement("span", {
      style: {
        ...meta,
        display: "inline-flex",
        minHeight: u(5.5),
        alignItems: "center",
        justifyContent: "center",
        padding: `${u(1)} ${u(1.25)}`,
        border: "var(--df-border-default)",
        fontSize: 12,
        letterSpacing: 0,
        textAlign: "center"
      }
    }, "CLAIMABLE SOL: \u2014"))), /*#__PURE__*/React.createElement(Panel, {
      "aria-labelledby": "meaning-title"
    }, /*#__PURE__*/React.createElement(Head, {
      rows: d.meaning.head
    }), /*#__PURE__*/React.createElement("ul", {
      style: {
        display: "grid",
        gap: u(1.25),
        margin: 0,
        paddingLeft: u(2.5),
        fontFamily: "var(--df-font-label)",
        fontSize: 16,
        lineHeight: 1.25
      }
    }, d.meaning.items.map((m, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, m)))));
  }
  window.DonationsScreen = DonationsScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/donations.screen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/library.screen.js
try { (() => {
(() => {
  const D = window.DF_DATA;
  const u = n => `calc(var(--df-space-unit)*${n})`;
  const meta = {
    margin: 0,
    fontFamily: "var(--df-font-meta)",
    fontSize: "clamp(12.2px,1.4vw,14.7px)",
    fontWeight: 700,
    letterSpacing: "0.14em",
    lineHeight: 1.2,
    textTransform: "uppercase"
  };
  const slamH = {
    margin: 0,
    fontFamily: "var(--df-font-slam)",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.05,
    textTransform: "uppercase"
  };
  function LibraryScreen() {
    const {
      Button,
      Panel
    } = window.DeFlockDesign_d58f76;
    const L = D.library;
    const [filter, setFilter] = React.useState("ALL");
    const shown = L.assets.filter(a => filter === "ALL" || a.kind === filter);
    return /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "library-title",
      style: {
        display: "grid",
        gap: "clamp(28px,5vw,56px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: meta
    }, L.kicker), /*#__PURE__*/React.createElement("h1", {
      id: "library-title",
      style: {
        ...slamH,
        fontSize: "var(--df-size-title-page)",
        maxWidth: 820
      }
    }, L.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: "clamp(15.2px,2vw,19.2px)",
        lineHeight: 1.25,
        maxWidth: 680,
        textWrap: "pretty"
      }
    }, L.framing)), /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Library actions",
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => {}
    }, L.actions[0]), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {}
    }, L.actions[1]), /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      onClick: () => {}
    }, L.actions[2])), /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Library categories",
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }
    }, L.filters.map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      type: "button",
      onClick: () => setFilter(f),
      "aria-pressed": f === filter,
      style: {
        display: "inline-flex",
        minHeight: 44,
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 12px",
        cursor: "pointer",
        border: "var(--df-border-default)",
        borderRadius: 0,
        background: f === filter ? "var(--df-color-ink)" : "var(--df-color-paper)",
        color: f === filter ? "var(--df-color-paper)" : "var(--df-color-ink)",
        fontFamily: "var(--df-font-meta)",
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: "var(--df-tracking-meta)",
        lineHeight: 1,
        textTransform: "uppercase",
        transition: "transform var(--df-dur-ui) ease-out"
      }
    }, f)))), shown.length === 0 ? /*#__PURE__*/React.createElement(Panel, {
      variant: "empty",
      style: {
        padding: "clamp(28px,6vw,56px)",
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: "clamp(16px,2.5vw,22.4px)",
        letterSpacing: "var(--df-tracking-label)",
        textTransform: "uppercase"
      }
    }, L.empty) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,minmax(0,1fr))",
        gap: "clamp(14px,2.4vw,24px)"
      }
    }, shown.map(a => /*#__PURE__*/React.createElement(Panel, {
      as: "article",
      key: a.title,
      pad: 0,
      surface: "quiet",
      style: {
        display: "grid",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        minHeight: "clamp(132px,28vw,260px)",
        alignItems: "center",
        overflow: "hidden",
        borderBottom: "var(--df-border-default)",
        backgroundImage: "var(--df-halftone-image)",
        backgroundSize: "var(--df-halftone-size)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: a.src,
      alt: a.title,
      style: {
        display: "block",
        width: "100%",
        height: "auto",
        maxHeight: "clamp(180px,34vw,340px)",
        objectFit: "contain"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12,
        padding: "clamp(12px,2vw,18px)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: "clamp(13px,1.8vw,16px)",
        letterSpacing: "var(--df-tracking-label)",
        lineHeight: 1.2,
        textTransform: "uppercase",
        overflowWrap: "anywhere"
      }
    }, a.title), /*#__PURE__*/React.createElement(Button, {
      size: "md",
      onClick: () => {},
      style: {
        justifySelf: "start",
        fontSize: 12.5
      }
    }, "DOWNLOAD"), /*#__PURE__*/React.createElement("p", {
      style: {
        ...meta,
        fontSize: 11.5,
        letterSpacing: "var(--df-tracking-meta)",
        color: "var(--df-text-muted)",
        lineHeight: 1.45
      }
    }, a.tags))))));
  }
  window.LibraryScreen = LibraryScreen;
  function RaidScreen() {
    const {
      Button,
      Panel,
      Badge
    } = window.DeFlockDesign_d58f76;
    const R = D.raid;
    return /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "raid-station-title",
      style: {
        display: "grid",
        gap: "clamp(28px,5vw,56px)"
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: "grid",
        gap: 16,
        maxWidth: 960
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: meta
    }, R.kicker), /*#__PURE__*/React.createElement("h1", {
      id: "raid-station-title",
      style: {
        ...slamH,
        fontSize: "var(--df-size-title-page)",
        maxWidth: 1100,
        textShadow: "var(--df-misreg-shadow)"
      }
    }, R.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: "clamp(16.8px,2.4vw,24.8px)",
        letterSpacing: "0.04em",
        lineHeight: 1.25,
        textTransform: "uppercase",
        maxWidth: 700
      }
    }, R.mission)), /*#__PURE__*/React.createElement("div", {
      "aria-label": "Curated X targets",
      style: {
        display: "grid",
        gap: 12
      }
    }, R.targets.map(t => /*#__PURE__*/React.createElement(Panel, {
      as: "article",
      key: t.author,
      pad: 0,
      style: {
        display: "grid",
        gap: 16,
        padding: "clamp(14px,2.6vw,22px)",
        background: "linear-gradient(90deg, color-mix(in srgb, var(--df-color-gadsden) 16%, transparent), transparent 42%), var(--df-surface-card)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        ...meta,
        fontSize: 12.5
      }
    }, "@", t.author), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: "clamp(16.8px,2.4vw,23.2px)",
        letterSpacing: "0.04em",
        lineHeight: 1.12,
        textTransform: "uppercase",
        overflowWrap: "anywhere"
      }
    }, t.why)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {}
    }, "OPEN ON X"), /*#__PURE__*/React.createElement(Badge, {
      variant: "chip",
      style: {
        minHeight: 44,
        padding: "13px 14px"
      }
    }, t.kit))))));
  }
  window.RaidScreen = RaidScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/library.screen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/profile.screen.js
try { (() => {
(() => {
  const D = window.DF_DATA;
  const u = n => `calc(var(--df-space-unit)*${n})`;
  const meta = {
    margin: 0,
    fontFamily: "var(--df-font-meta)",
    fontSize: "var(--df-size-meta-sm)",
    fontWeight: 700,
    letterSpacing: "var(--df-tracking-meta)",
    lineHeight: 1.1,
    textTransform: "uppercase",
    overflowWrap: "anywhere"
  };
  const slamH = {
    margin: 0,
    fontFamily: "var(--df-font-slam)",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "var(--df-leading-slam-max)",
    textTransform: "uppercase",
    textWrap: "balance"
  };
  const copyS = {
    margin: `${u(1.5)} 0 0`,
    fontFamily: "var(--df-font-label)",
    fontSize: "clamp(15.2px,1.55vw,19.2px)",
    lineHeight: 1.25,
    maxWidth: "592px",
    textWrap: "pretty"
  };
  const short = a => `${a.slice(0, 4)}…${a.slice(-4)}`;
  function ProfileScreen() {
    const {
      Button,
      Panel,
      Badge,
      FormRow,
      Input,
      Sheet,
      Toast
    } = window.DeFlockDesign_d58f76;
    const p = D.profile;
    const [signedIn, setSignedIn] = React.useState(true);
    const [wallets, setWallets] = React.useState([D.accounts.claimWallet]);
    const [addr, setAddr] = React.useState("");
    const [err, setErr] = React.useState(null);
    const [sheet, setSheet] = React.useState(false);
    const [toast, setToast] = React.useState(null);
    const watch = e => {
      e.preventDefault();
      const a = addr.trim();
      if (a.length < 32) {
        setErr("Enter a valid Solana address.");
        return;
      }
      if (wallets.includes(a)) {
        setErr(p.watch.dupError);
        return;
      }
      setErr(null);
      setWallets([a]);
      setAddr("");
      setToast("PINNED · WALLET WATCH SAVED.");
      setTimeout(() => setToast(null), 2600);
    };
    return /*#__PURE__*/React.createElement("section", {
      "aria-labelledby": "profile-title",
      style: {
        display: "grid",
        gap: u(3),
        width: "min(100%, 1184px)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      as: "section",
      surface: "quiet",
      halftone: true,
      pad: 4,
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(272px,0.45fr)",
        gap: u(3),
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: meta
    }, p.kicker), /*#__PURE__*/React.createElement("h1", {
      id: "profile-title",
      style: {
        ...slamH,
        fontSize: "var(--df-size-title-page)",
        marginTop: u(1),
        maxWidth: "880px"
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: copyS
    }, p.copy)), /*#__PURE__*/React.createElement(Panel, {
      as: "article",
      pad: 2.5,
      surface: "bright",
      "aria-label": "Signed in identity",
      style: {
        display: "grid",
        gridTemplateColumns: "auto minmax(0,1fr)",
        gridTemplateRows: "1fr auto",
        gap: u(2),
        minHeight: u(30)
      }
    }, signedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: "grid",
        width: "var(--df-avatar-size)",
        aspectRatio: "1",
        placeItems: "center",
        borderRadius: "var(--df-radius-avatar)",
        overflow: "hidden",
        background: "var(--df-color-ink)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "img/mascot-pfp-400.png",
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        minWidth: 0,
        alignContent: "center",
        gap: u(0.75)
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: "clamp(17.6px,2.6vw,26px)",
        lineHeight: 1.1,
        overflowWrap: "anywhere"
      }
    }, "@you"), /*#__PURE__*/React.createElement("span", {
      style: meta
    }, wallets.length ? p.roleBadgeSaved : p.roleBadge)), /*#__PURE__*/React.createElement(Badge, {
      variant: "stamp",
      style: {
        gridColumn: "1 / -1",
        justifySelf: "start"
      }
    }, "HOLDER"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setSignedIn(false),
      style: {
        gridColumn: "1 / -1",
        justifySelf: "start"
      }
    }, "SIGN OUT")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridColumn: "1 / -1",
        gridRow: "1 / -1",
        alignContent: "center",
        gap: u(1.5)
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: meta
    }, p.signedOut.kicker), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => setSignedIn(true),
      style: {
        justifySelf: "start"
      }
    }, p.signedOut.button)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.2fr) minmax(272px,0.8fr)",
        gap: u(3),
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      "aria-labelledby": "watch-wallet-title",
      surface: "quiet",
      halftone: true,
      style: {
        display: "grid",
        gap: u(3)
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: meta
    }, p.watch.kicker), /*#__PURE__*/React.createElement("h2", {
      id: "watch-wallet-title",
      style: {
        ...slamH,
        fontSize: "clamp(28.8px,5vw,52px)",
        marginTop: u(1)
      }
    }, p.watch.title)), /*#__PURE__*/React.createElement("form", {
      onSubmit: watch
    }, /*#__PURE__*/React.createElement(FormRow, {
      label: p.watch.label,
      htmlFor: "wallet-address",
      error: err
    }, /*#__PURE__*/React.createElement(Input, {
      id: "wallet-address",
      placeholder: short(D.accounts.feeVault),
      value: addr,
      onChange: e => setAddr(e.target.value),
      style: {
        flex: "1 1 200px"
      }
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "primary",
      type: "submit"
    }, p.watch.button))), wallets.length === 0 ? /*#__PURE__*/React.createElement(Panel, {
      as: "div",
      variant: "empty",
      style: {
        display: "grid",
        minHeight: u(25),
        alignContent: "center",
        gap: u(1.5)
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: meta
    }, p.watch.empty)) : wallets.map(w => /*#__PURE__*/React.createElement(Panel, {
      as: "article",
      key: w,
      pad: 2,
      surface: "quiet",
      style: {
        display: "grid",
        gap: u(2)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: u(1.5),
        alignItems: "start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: `0 0 ${u(0.75)}`,
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: u(2.8),
        lineHeight: 1,
        overflowWrap: "anywhere"
      }
    }, short(w)), /*#__PURE__*/React.createElement("span", {
      style: {
        ...meta,
        display: "inline-block",
        padding: `${u(0.75)} ${u(1)}`,
        border: "var(--df-border-default)",
        background: "var(--df-color-gadsden)"
      }
    }, "WATCHED")), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      style: {
        fontSize: 10.8
      }
    }, "REFRESH")), /*#__PURE__*/React.createElement("dl", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(144px, 1fr))",
        gap: u(1),
        margin: 0
      }
    }, [["$DEFLOCK", "—"], ["SOL", "—"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: "grid",
        gap: u(0.75),
        padding: u(1.5),
        border: "var(--df-border-default)"
      }
    }, /*#__PURE__*/React.createElement("dt", {
      style: meta
    }, k), /*#__PURE__*/React.createElement("dd", {
      style: {
        margin: 0,
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: u(2.2),
        fontVariantNumeric: "tabular-nums"
      }
    }, v)))), /*#__PURE__*/React.createElement("p", {
      style: {
        ...copyS,
        margin: 0
      }
    }, p.watch.pending)))), /*#__PURE__*/React.createElement(Panel, {
      variant: "stamp",
      "aria-labelledby": "verify-title",
      style: {
        display: "grid",
        gap: u(3)
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: meta
    }, p.verify.kicker), /*#__PURE__*/React.createElement("h2", {
      id: "verify-title",
      style: {
        ...slamH,
        fontSize: "clamp(28.8px,5vw,52px)",
        marginTop: u(1)
      }
    }, p.verify.title), /*#__PURE__*/React.createElement("p", {
      style: copyS
    }, p.verify.body)), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => setSheet(true),
      style: {
        justifySelf: "start"
      }
    }, p.verify.button))), /*#__PURE__*/React.createElement(Sheet, {
      open: sheet,
      onClose: () => setSheet(false),
      title: p.verify.sheetTitle
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        ...copyS,
        margin: 0
      }
    }, p.verify.sheetBody), /*#__PURE__*/React.createElement("p", {
      style: {
        ...copyS,
        margin: 0
      }
    }, p.verify.sheetHint), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => setSheet(false),
      style: {
        justifySelf: "start"
      }
    }, p.verify.sheetButton)), toast && /*#__PURE__*/React.createElement(Toast, {
      variant: "neutral",
      fixed: true
    }, toast));
  }
  window.ProfileScreen = ProfileScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/profile.screen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/why.screen.js
try { (() => {
(() => {
  const D = window.DF_DATA;
  const u = n => `calc(var(--df-space-unit)*${n})`;
  const metaL = {
    margin: 0,
    fontFamily: "var(--df-font-meta)",
    fontSize: "clamp(10px,1.8vw,16px)",
    fontWeight: 700,
    letterSpacing: "var(--df-tracking-meta)",
    lineHeight: 1,
    textTransform: "uppercase"
  };
  const body = {
    margin: 0,
    fontFamily: "var(--df-font-label)",
    fontSize: "clamp(16px,2.1vw,24px)",
    fontWeight: "var(--df-weight-label-body)",
    lineHeight: 1.39,
    maxWidth: "656px",
    textWrap: "pretty"
  };
  const slam = {
    margin: 0,
    fontFamily: "var(--df-font-slam)",
    fontWeight: 400,
    letterSpacing: 0,
    textTransform: "uppercase",
    textWrap: "balance"
  };
  function ZipPanel({
    state,
    zip
  }) {
    const {
      Panel
    } = window.DeFlockDesign_d58f76;
    const z = D.why.zip;
    const pair = state === "loading" ? z.loading : state === "empty" ? z.empty : state === "error" ? z.error : z.idle;
    return /*#__PURE__*/React.createElement(Panel, {
      as: "div",
      variant: "accent",
      pad: 2,
      role: state === "error" ? "alert" : "status",
      "aria-live": "polite",
      style: {
        display: "grid",
        gridColumn: "2",
        gap: u(1.25),
        alignContent: "center",
        minHeight: u(21),
        ...(state === "loading" ? {
          boxShadow: "var(--df-stamp-inset-ink)",
          transform: "rotate(var(--df-tilt-stamp-max))"
        } : {})
      }
    }, state === "ready" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        ...slam,
        fontSize: "clamp(48px,10vw,96px)",
        lineHeight: "var(--df-leading-slam)",
        fontVariantNumeric: "tabular-nums"
      }
    }, "47"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...body,
        fontSize: "clamp(16px,2.2vw,21px)",
        maxWidth: "none"
      }
    }, z.readySuffix, " ", zip), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        ...metaL,
        fontSize: 13,
        width: "fit-content",
        display: "inline-flex",
        minHeight: u(5.5),
        alignItems: "center",
        padding: `${u(1)} ${u(1.5)}`,
        border: "var(--df-border-default)",
        background: "var(--df-surface-wash-ink)",
        textDecoration: "none"
      }
    }, z.mapLink)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: metaL
    }, pair[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        ...body,
        fontSize: "clamp(16px,2.2vw,19px)",
        maxWidth: "none"
      }
    }, pair[1])));
  }
  function WhyScreen() {
    const {
      Button,
      Panel,
      Badge,
      FormRow,
      Input
    } = window.DeFlockDesign_d58f76;
    const [zip, setZip] = React.useState("");
    const [state, setState] = React.useState("idle");
    const submit = e => {
      e.preventDefault();
      if (!/^\d{5}$/.test(zip)) {
        setState("error");
        return;
      }
      setState("loading");
      setTimeout(() => setState(zip === "00000" ? "empty" : "ready"), 900);
    };
    const w = D.why;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: u(6),
        width: "100%",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("section", {
      "aria-label": "Hero",
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.35fr) minmax(176px,0.65fr)",
        alignItems: "center",
        gap: u(4),
        minHeight: u(56),
        paddingBlock: u(2)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: u(2),
        minWidth: 0,
        justifyItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "kicker"
    }, w.kicker), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: u(0.75)
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: "clamp(24px,4.8vw,44px)",
        letterSpacing: "var(--df-tracking-label)",
        lineHeight: "var(--df-leading-slam-max)",
        textTransform: "uppercase"
      }
    }, w.heroLabel), /*#__PURE__*/React.createElement("h1", {
      style: {
        ...slam,
        fontSize: "var(--df-size-title-hero)",
        lineHeight: "var(--df-leading-slam)"
      }
    }, w.heroTitle)), /*#__PURE__*/React.createElement("p", {
      style: {
        ...body,
        maxWidth: "624px"
      }
    }, w.heroValue), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: u(1)
      },
      "aria-label": "Primary actions"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      href: "#zip-check",
      style: {
        minWidth: u(18)
      }
    }, w.ctas[0]), /*#__PURE__*/React.createElement(Button, {
      href: "#thesis",
      style: {
        minWidth: u(18)
      }
    }, w.ctas[1]))), /*#__PURE__*/React.createElement(Panel, {
      as: "div",
      surface: "accent",
      halftone: true,
      pad: 4,
      "aria-hidden": "true",
      style: {
        display: "grid",
        placeItems: "center",
        background: "var(--df-halftone-image), color-mix(in srgb, var(--df-color-gadsden) 22%, var(--df-color-paper))",
        backgroundSize: "var(--df-halftone-size), auto"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "img/emblem-breakthrough.svg",
      alt: "",
      style: {
        width: "min(100%, 384px)",
        height: "auto"
      }
    }))), /*#__PURE__*/React.createElement(Panel, {
      id: "zip-check",
      variant: "raised",
      "aria-label": "Live map check",
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)",
        gap: u(3),
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        alignContent: "start",
        gap: u(2),
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: metaL
    }, D.why.zip.label), /*#__PURE__*/React.createElement("h2", {
      style: {
        ...slam,
        fontSize: "clamp(32px,7vw,96px)",
        lineHeight: "var(--df-leading-slam)"
      }
    }, D.why.zip.title), /*#__PURE__*/React.createElement("p", {
      style: body
    }, D.why.zip.body)), /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        display: "grid",
        alignContent: "start",
        gap: u(1.25),
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(FormRow, {
      label: "ZIP code",
      htmlFor: "zip-input",
      error: state === "error" ? D.why.zip.invalid : undefined
    }, /*#__PURE__*/React.createElement(Input, {
      id: "zip-input",
      size: "xl",
      inputMode: "numeric",
      maxLength: 5,
      placeholder: "90210",
      value: zip,
      onChange: e => {
        setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
        if (state === "error") setState("idle");
      },
      style: {
        flex: "1 1 160px"
      }
    }), /*#__PURE__*/React.createElement(Button, {
      size: "xl",
      variant: "primary",
      type: "submit"
    }, "CHECK MAP"))), /*#__PURE__*/React.createElement(ZipPanel, {
      state: state,
      zip: zip
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        ...metaL,
        gridColumn: "2",
        fontSize: 12,
        color: "var(--df-text-muted)",
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: D.links.osm,
      target: "_blank",
      rel: "noreferrer",
      style: {
        textDecorationLine: "underline",
        textDecorationThickness: "var(--df-stroke-hairline)",
        textUnderlineOffset: u(0.45)
      }
    }, "\xA9 OpenStreetMap contributors"), " plus DeFlock project data.")), /*#__PURE__*/React.createElement("section", {
      id: "thesis",
      "aria-label": "Why DeFlock thesis",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,minmax(0,1fr))",
        gap: "var(--df-stroke-hairline)",
        border: "var(--df-border-default)",
        background: "var(--df-color-ink)"
      }
    }, D.why.thesis.map(t => /*#__PURE__*/React.createElement("article", {
      key: t.label,
      style: {
        display: "grid",
        gap: u(1.5),
        alignContent: "start",
        minWidth: 0,
        padding: u(2.5),
        background: "var(--df-halftone-image), var(--df-color-paper)",
        backgroundSize: "var(--df-halftone-size), auto"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--df-font-label)",
        fontWeight: 700,
        fontSize: "clamp(24px,3.5vw,44px)",
        letterSpacing: "var(--df-tracking-label)",
        lineHeight: "var(--df-leading-slam-max)",
        textTransform: "uppercase"
      }
    }, t.label), /*#__PURE__*/React.createElement("p", {
      style: body
    }, t.body))), /*#__PURE__*/React.createElement("div", {
      "aria-label": "Community links",
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: u(1),
        alignItems: "center",
        padding: u(2.5),
        background: "var(--df-halftone-image), var(--df-color-paper)",
        backgroundSize: "var(--df-halftone-size), auto"
      }
    }, D.why.thesisActions.map(([label, key]) => /*#__PURE__*/React.createElement(Button, {
      key: label,
      variant: "quiet",
      href: D.links[key],
      target: "_blank"
    }, label)))), /*#__PURE__*/React.createElement(Panel, {
      "aria-label": "The real project",
      surface: "wash-ink",
      halftone: true,
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(144px,0.35fr)",
        gap: u(4),
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: u(2),
        minWidth: 0,
        justifyItems: "start"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: metaL
    }, D.why.realProject.label), /*#__PURE__*/React.createElement("h2", {
      style: {
        ...slam,
        fontSize: "clamp(32px,7vw,96px)",
        lineHeight: "var(--df-leading-slam)"
      }
    }, D.why.realProject.title), /*#__PURE__*/React.createElement("p", {
      style: body
    }, D.why.realProject.body), /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      href: D.links.deflockOrg,
      target: "_blank"
    }, D.why.realProject.link)), /*#__PURE__*/React.createElement("img", {
      src: "img/cam-spider-eye-face.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        width: "min(100%, 280px)",
        height: "auto",
        justifySelf: "center"
      }
    })));
  }
  window.WhyScreen = WhyScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/why.screen.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.FormRow = __ds_scope.FormRow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.FooterStrip = __ds_scope.FooterStrip;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Panel = __ds_scope.Panel;

})();
