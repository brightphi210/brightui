import React, { useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { FaEthereum, FaBitcoin } from "react-icons/fa";

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

const TokenSwap: React.FC<TokenSwapProps> = ({ tokens, exchangeRates, onSwap, theme = "light" }) => {
  const [fromToken, setFromToken] = useState(tokens[0]?.symbol || "");
  const [toToken, setToToken] = useState(tokens[1]?.symbol || "");
  const [amount, setAmount] = useState<number>(0);

  const handleSwap = () => {
    if (amount > 0 && amount <= getFromBalance() && onSwap) {
      onSwap(fromToken, toToken, amount);
    }
  };

  const getFromBalance = () => tokens.find((token) => token.symbol === fromToken)?.balance || 0;
  const getToBalance = () => tokens.find((token) => token.symbol === toToken)?.balance || 0;
  const getExchangeRate = () => exchangeRates[`${fromToken}_${toToken}`] || 0;

  const bgColor = theme === "light" ? "bg-white border border-gray-200" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  const buttonBgColor = "bg-blue-500 hover:bg-blue-600";

  const getTokenIcon = (token: string) => {
    switch (token.toLowerCase()) {
      case "eth":
        return <FaEthereum className="w-6 h-6" />;
      case "btc":
        return <FaBitcoin className="w-6 h-6" />;
      default:
        return <AiOutlineSwap className="w-6 h-6" />;
    }
  };

  return (
    <div className={`max-w-md p-6 rounded-xl shadow-lg ${bgColor} ${textColor}`}>
      <h2 className="text-2xl font-bold mb-4">Token Swap</h2>

      <div className="mb-4">
        <label className="block text-sm mb-2">From</label>
        <div className="flex items-center border rounded p-2">
          {getTokenIcon(fromToken)}
          <select
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
            className="ml-3 bg-transparent focus:outline-none p-1"
          >
            {tokens.map((token) => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
          <input
            type="number"
            min="0"
            max={getFromBalance()}
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="flex-grow ml-3 bg-transparent focus:outline-none p-1"
            placeholder="Enter amount"
          />
        </div>
        <p className="text-xs mt-2">Balance: {getFromBalance()} {fromToken.toUpperCase()}</p>
      </div>

      <div className="text-center my-4 flex justify-center m-auto">
        <AiOutlineSwap className="w-6 h-6 m-auto text-blue-500" />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-2">To</label>
        <div className="flex items-center border rounded p-2">
          {getTokenIcon(toToken)}
          <select
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className="ml-3 bg-transparent focus:outline-none p-1"
          >
            {tokens.map((token) => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={(amount * getExchangeRate()).toFixed(6)}
            disabled
            className="flex-grow ml-3 bg-transparent focus:outline-none p-1"
          />
        </div>
        <p className="text-xs mt-2">Balance: {getToBalance()} {toToken.toUpperCase()}</p>
      </div>

      <button
        onClick={handleSwap}
        disabled={amount <= 0 || amount > getFromBalance()}
        className={`${buttonBgColor} text-white font-bold py-2 px-4 rounded-full w-full transition duration-300 ease-in-out disabled:bg-gray-400`}
      >
        Swap {fromToken.toUpperCase()} to {toToken.toUpperCase()}
      </button>
    </div>
  );
};

export default TokenSwap;