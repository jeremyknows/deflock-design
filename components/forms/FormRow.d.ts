/**
 * Label + control(s) + error/hint lines in the site's form grammar: Space Mono
 * uppercase meta label, controls on one wrapping row, red meta error (role=alert).
 */
export interface FormRowProps {
  /** Uppercase meta label ("ZIP CODE"). */
  label?: string;
  /** id of the labelled control. */
  htmlFor?: string;
  /** Error line: ink meta type + red ▲ marker (red type fails AA at meta size); replaces hint. Watchdog voice: "QUERY DID NOT LAND", not "Oops!" */
  error?: string;
  /** Muted meta helper line. */
  hint?: string;
  /** Usually an <Input> plus a <Button type="submit">. */
  children?: any;
  style?: any;
}
