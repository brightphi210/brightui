import { CSSProperties, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  color: 'blue' | 'red' | 'white' | 'black' | 'green' | 'yellow';
  size: 'sm' | 'md' | 'lg';
  fontWeight: 'semiBold' | 'bold' | 'light' | 'medium' ;
}>;

const Button = ({
  children,
  onClick,
  color = 'white',
  size = 'md',
  fontWeight = 'light'
}: ButtonProps) => {
  const colorStyles: Record<ButtonProps['color'], CSSProperties> = {
    blue: {
      backgroundColor: '#3b82f6', // DodgerBlue
      color: '#FFFFFF',
    },
    red: {
      backgroundColor: '#ef4444', // Tomato
      color: '#FFFFFF',
    },
    white: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      border: '1px solid #ccc',
    },
    black: {
      backgroundColor: '#333333',
      color: '#FFFFFF',
    },
    green: {
      backgroundColor: '#10b981', // LimeGreen
      color: '#FFFFFF',
    },
    yellow: {
      backgroundColor: '#f59e0b', // Gold
      color: '#333333',
    },
  };

  const sizeStyles: Record<ButtonProps['size'], CSSProperties> = {
    sm: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
    },
    md: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
    },
    lg: {
      padding: '1rem 2rem',
      fontSize: '1.25rem',
    },
  };

  const weightStyle: Record<ButtonProps['fontWeight'], CSSProperties> = {
    light: { fontWeight: '400' },
    medium: { fontWeight: '550' },
    semiBold: { fontWeight: '650' },
    bold: { fontWeight: '750' },
  }

  return (
    <button
      style={{
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        ...colorStyles[color],
        ...sizeStyles[size],
        ...weightStyle[fontWeight]
      }}
      onClick={onClick}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {children}
    </button>
  );
};

export default Button;
