/**
 * The card/panel surface. 1.5px ink border (NEVER 2px — that is the shipped
 * library drift), warm white-mixed paper fill, 0 radius, optional 9px halftone.
 */
export interface PanelProps {
  /** card (default) · raised = 3px border + hard shadow + halftone (feature panels) · stamp = red border + stamp inset rings (verify/alert panels) · accent = gadsden wash + halftone · empty = dashed border (empty states) */
  variant?: "card" | "raised" | "stamp" | "accent" | "empty";
  /** Override the fill: card 92% · quiet 94% · bright 86% white-mix · wash-ink 8% · accent gadsden 14% · accent-strong 18% · paper */
  surface?: "card" | "quiet" | "bright" | "wash-ink" | "accent" | "accent-strong" | "paper";
  /** Layer the 9px halftone dot screen (alpha .14 — the locked recipe). */
  halftone?: boolean;
  /** Add heavy border + hard offset shadow to any variant. */
  raised?: boolean;
  /** Padding in 8px units (default 3 = 24px). */
  pad?: number;
  /** Rendered element (default section). */
  as?: string;
  style?: any;
  children?: any;
}
