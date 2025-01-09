import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
    onClick?: () => void;
    color: 'blue' | 'red' | 'white' | 'black' | 'green' | 'yellow';
    size: 'sm' | 'md' | 'lg';
    fontWeight: 'semiBold' | 'bold' | 'light' | 'medium';
}>;
declare const Button: ({ children, onClick, color, size, fontWeight }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface AlertProps {
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
    className?: string;
}
declare const Alert: React.FC<AlertProps>;

export { Alert, type AlertProps, Button };
