/**
 * KPI metric card: meta eyebrow, Oswald label, Archivo Black slam value, meta sub.
 * Numbers are tabular; only operator-verified values (doctrine 5).
 */
export interface MetricProps {
  /** Uppercase meta eyebrow ("CLAIMED SOL"). */
  eyebrow?: string;
  /** Oswald label line ("Claimed by wallet"). */
  label?: string;
  /** The slam number ("2.4 SOL"). Real data only. */
  value?: string;
  /** Meta subline (mark-to-market note). */
  sub?: string;
  /** Corner wash: accent = gadsden 14% · red = red 10% (max one red per row). */
  wash?: "none" | "accent" | "red";
  /** Nudge down 6px — the shipped middle-card offset for hand-set rhythm. */
  nudge?: boolean;
  style?: any;
}
