import * as React from 'react';
import React__default, { InputHTMLAttributes } from 'react';

interface ButtonProps {
    onClick?: () => void;
    color: 'blue' | 'red' | 'white' | 'black' | 'green' | 'yellow';
    size: 'sm' | 'md' | 'lg';
    fontWeight: 'light' | 'medium' | 'semibold' | 'bold';
    className?: string;
    children: React__default.ReactNode;
}
declare const Button: React__default.FC<ButtonProps>;

interface AlertProps {
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
    className?: string;
    onClose?: () => void;
}
declare const Alert: React__default.FC<AlertProps>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React__default.ReactNode;
    className?: string;
}
declare const Modal: React__default.FC<ModalProps>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

export { Alert, type AlertProps, Button, Input, Modal };
