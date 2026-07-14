/**
 * Stamped chip/badge — role badges, kickers, showcase stamps, filter chips.
 * Space Mono 700 uppercase 11.6px. The only sanctioned tilt in UI mode.
 */
export interface BadgeProps {
  /** stamp = double ink ring + tilt (role badges) · kicker = red ring + ink text + tilt (section kickers: "WHO WATCHES THE WATCHERS"; red type fails AA at meta size, so the ring carries the red) · solid = ink fill + tilt (showcase: "VERIFIED CLAIMED") · accent = gadsden fill, straight (value chips) · chip = filter chip, use `selected` */
  variant?: "stamp" | "kicker" | "solid" | "accent" | "chip";
  /** Stamp tilt −4° (default true for stamp/kicker/solid). */
  tilt?: boolean;
  /** chip only: ink fill when active. */
  selected?: boolean;
  style?: any;
  children?: any;
}
