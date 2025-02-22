import React from 'react';

interface CardProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  price?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  price,
  buttonText,
  onButtonClick,
  className = '',
  children,
}) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-white ${className}`}>
      {imageSrc && (
        <img className="w-full h-48 object-cover" src={imageSrc} alt={title || 'Card Image'} />
      )}
      <div className="px-6 py-4">
        {title && <div className="font-bold text-xl mb-2">{title}</div>}
        {description && <p className="text-gray-700 text-base mb-2">{description}</p>}
        {price && <p className="text-gray-900 font-bold text-xl mb-4">{price}</p>}
        {buttonText && onButtonClick && (
          <button
            onClick={onButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            {buttonText}
          </button>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
