import type React from "react";
interface NFTCardProps {
    imageSrc: string;
    title: string;
    creator: string;
    price: string;
    likes?: number;
    onBuyClick?: () => void;
    className?: string;
    theme?: "light" | "dark";
}
declare const NFTCard: React.FC<NFTCardProps>;
export default NFTCard;
