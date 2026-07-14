/**
 * Inline alert strip / docked toast. Gadsden-wash halftone, uppercase meta type,
 * announced via role=status (warning/neutral) or role=alert (alert).
 */
export interface ToastProps {
  /** warning = gadsden wash (data warnings, default) · alert = red wash + red border (failures; rationed) · neutral = card fill (confirmations: "LOGGED", "PINNED") */
  variant?: "warning" | "alert" | "neutral";
  /** Dock fixed bottom-right with a hard shadow. */
  fixed?: boolean;
  /** Leading 16px icon (lucide ShieldCheck etc.). */
  icon?: any;
  role?: string;
  style?: any;
  children?: any;
}
