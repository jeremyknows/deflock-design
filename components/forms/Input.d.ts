/**
 * Text input: paper field, 1.5px ink border, 0 radius, Oswald label type.
 * Invalid state = red hairline border (red is the only accent; use sparingly).
 */
export interface InputProps {
  /** lg 48px (default, panel forms) · xl 56px + bold Oswald (hero forms like the ZIP check) */
  size?: "lg" | "xl";
  /** Red hairline border. Pair with a meta-type error line via FormRow error prop. */
  invalid?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  id?: string;
  type?: string;
  inputMode?: string;
  maxLength?: number;
  style?: any;
}
