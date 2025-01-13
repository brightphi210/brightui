import React from 'react';
export interface ButtonProps {
    onClick?: () => void;
    color: 'blue' | 'red' | 'white' | 'black' | 'green' | 'yellow';
    size: 'sm' | 'md' | 'lg';
    fontWeight: 'light' | 'medium' | 'semibold' | 'bold';
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
