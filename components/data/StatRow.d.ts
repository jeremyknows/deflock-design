/**
 * Ledger row for claims/receipts/holdings lists: hairline top rule, tabular
 * numbers, meta value label on the right. Compose inside a Panel.
 */
export interface StatRowProps {
  /** Meta date line ("2026-07-12 04:10"). */
  date?: string;
  /** Bold Oswald primary cell ("$120.00"). */
  title?: string;
  /** Sentence-case Oswald note line. */
  note?: string;
  /** Right column meta label ("CLAIMED SOL"). */
  valueLabel?: string;
  /** Right column bold value. */
  value?: string;
  /** Optional solscan/source link under the title. */
  href?: string;
  linkLabel?: string;
  style?: any;
}
