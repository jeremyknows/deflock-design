/**
 * Footer strip carrying the exact disclaimer wording (doctrine 2/3), the quiet
 * $DEFLOCK wordmark (Space Mono 700 — fixes the shipped slam-family drift),
 * risk note, and contact link.
 */
export interface FooterStripProps {
  /** Takedown/contact email; renders the only URL-adjacent link allowed outside the disclaimer. */
  contactEmail?: string;
  /** Extra spans appended after the standard items. */
  extra?: any;
  style?: any;
}
