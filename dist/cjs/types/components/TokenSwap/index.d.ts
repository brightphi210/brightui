import React from "react";
interface Token {
    symbol: string;
    balance: number;
}
interface TokenSwapProps {
    tokens: Token[];
    exchangeRates: Record<string, number>;
    onSwap?: (fromToken: string, toToken: string, amount: number) => void;
    theme?: "light" | "dark";
}
declare const TokenSwap: React.FC<TokenSwapProps>;
export default TokenSwap;
