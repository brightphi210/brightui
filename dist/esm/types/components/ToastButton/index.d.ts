import type React from "react";
import { type ToastProps } from "../Toast";
interface ToastButtonProps extends Omit<ToastProps, "isVisible"> {
    buttonText?: string;
    buttonClassName?: string;
}
declare const ToastButton: React.FC<ToastButtonProps>;
export default ToastButton;
