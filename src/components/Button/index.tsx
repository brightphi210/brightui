import React from 'react';

export interface ButtonProps {
  onClick?: () => void;
  color: 'blue' | 'red' | 'white' | 'black' | 'green' | 'yellow';
  size: 'sm' | 'md' | 'lg';
  fontWeight: 'light' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = 'white',
  size = 'md',
  fontWeight = 'light',
  className = '',
}) => {
  const baseClasses = 'outline-none border-none cursor-pointer rounded transition-all duration-300 ease-in-out transform active:scale-95';
  
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white',
    white: 'bg-white text-black border border-gray-300',
    black: 'bg-gray-800 text-white',
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-500 text-gray-800',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const fontWeightClasses = {
    light: 'font-light',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const classes = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${fontWeightClasses[fontWeight]} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
