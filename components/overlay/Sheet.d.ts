/**
 * Modal sheet: ink-48% backdrop, paper panel docked bottom-right (stretches on
 * mobile), slam title, CLOSE button. Escape and backdrop-click dismiss.
 */
export interface SheetProps {
  open?: boolean;
  onClose?: () => void;
  /** Slam uppercase title. */
  title?: any;
  /** Panel width (default 640px). */
  width?: string;
  children?: any;
  style?: any;
}
