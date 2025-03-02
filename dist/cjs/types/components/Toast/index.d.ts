import type React from "react";
export interface ToastProps {
    /**
     * Type of toast notification
     */
    type: "success" | "error" | "warning" | "info" | "loading" | "custom";
    /**
     * Message to display in the toast
     */
    message: string;
    /**
     * Duration in milliseconds before toast auto-dismisses (0 for no auto-dismiss)
     */
    duration?: number;
    /**
     * Theme of the toast
     */
    theme?: "light" | "dark";
    /**
     * Position of the toast on the screen
     */
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
    /**
     * Custom icon to display (only used when type is 'custom')
     */
    icon?: React.ReactNode;
    /**
     * Optional callback when toast is closed
     */
    onClose?: () => void;
    /**
     * Optional additional class names
     */
    className?: string;
    /**
     * Whether the toast is visible
     */
    isVisible?: boolean;
}
declare const Toast: React.FC<ToastProps>;
export default Toast;
