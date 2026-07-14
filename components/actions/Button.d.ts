/**
 * The unified $DeFlock action. Replaces the site's 6 hand-rolled button
 * implementations (docs/migration-map.md). Space Mono 700 uppercase meta type;
 * 0 radius; 1.5px ink border; press scale(.96); hover hard-shadow lift.
 */
export interface ButtonProps {
  /** primary = ink fill · secondary = paper + ink border (default) · accent = gadsden stamp (hard shadow + tilt) · quiet = ink-8% wash */
  variant?: "primary" | "secondary" | "accent" | "quiet";
  /** Min-height: sm 40 · md 44 (tap-target floor, default) · lg 48 (form rows) · xl 56 (hero forms, switches to Oswald label type) */
  size?: "sm" | "md" | "lg" | "xl";
  /** Type class override: meta = Space Mono 700 12px (default) · label = Oswald 700 (auto at size xl) */
  font?: "meta" | "label";
  /** Force the stamp tilt (accent has it by default). UI register: max one tilted action per view. */
  tilt?: boolean;
  /** Square icon-only button (share arrows). Press deepens to scale(.92). Provide aria-label. */
  iconOnly?: boolean;
  /** Renders opacity .55 + cursor not-allowed; transforms disabled. */
  disabled?: boolean;
  /** Renders an <a> instead of <button>. */
  href?: string;
  target?: string;
  onClick?: (e: any) => void;
  type?: "button" | "submit";
  style?: any;
  children?: any;
}
