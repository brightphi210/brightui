import { PropsWithChildren } from 'react';
type ButtonProps = PropsWithChildren<{
    onClick?: () => void;
    color: 'blue' | 'red' | 'white' | 'black' | 'green' | 'yellow';
    size: 'sm' | 'md' | 'lg';
    fontWeight: 'semiBold' | 'bold' | 'light' | 'medium';
}>;
declare const Button: ({ children, onClick, color, size, fontWeight }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
