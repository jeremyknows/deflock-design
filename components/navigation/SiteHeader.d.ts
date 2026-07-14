/**
 * Sticky site header: $DEFLOCK slam wordmark (never broken/stacked — ticker law)
 * + Space Mono meta nav. Active tab wears the ink stamp ring at −4°.
 * ≤720px the nav docks as a fixed bottom tab bar with short labels.
 */
export interface SiteHeaderProps {
  /** Nav tabs in order. */
  tabs?: { href: string; label: string; mobileLabel?: string }[];
  /** href of the active tab. */
  activeHref?: string;
  /** Intercept navigation (prototypes): called with the href. */
  onNavigate?: (href: string) => void;
  homeHref?: string;
  style?: any;
}
