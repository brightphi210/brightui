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
declare const Card: React.FC<CardProps>;
export default Card;
