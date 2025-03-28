import React from 'react';
import { ClipboardCopy } from 'lucide-react';

export interface ProfileCardProps {
  isConnected?: boolean;
  name: string;
  walletAddress: string;
  profileImageUrl: string;
  badgeImageUrl?: string;
  onDisconnect: () => void;
  onCopyAddress?: () => void;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  isConnected = true,
  name,
  walletAddress,
  profileImageUrl,
  badgeImageUrl,
  onDisconnect,
  onCopyAddress,
  className = '',
}) => {
  // Format wallet address to show first 6 and last 4 characters
  const formatWalletAddress = (address: string) => {
    if (address.length <= 10) return address;
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  // Copy wallet address to clipboard
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    if (onCopyAddress) onCopyAddress();
  };

  return (
    <div className={`max-w-md w-full mx-auto rounded-3xl bg-white shadow-sm overflow-hidden ${className}`}>
      <div className="flex flex-col items-center p-6 pt-8">
        {/* Connection Status */}
        <div className="text-2xl font-bold mb-6">
          {isConnected ? 'Connected' : 'Disconnected'}
        </div>

        {/* Profile Image with Badge */}
        <div className="relative mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
            <img 
              src={profileImageUrl || '/placeholder.svg?height=128&width=128'} 
              alt={name}
              className="object-cover  w-full h-full"
            />
          </div>
          
          {badgeImageUrl && (
            <div className="absolute bottom-0 right-0 rounded-full overflow-hidden border-2 border-white">
              <img 
                src={badgeImageUrl || "/placeholder.svg"} 
                alt="Badge" 
                className="w-8 h-8"
              />
            </div>
          )}
        </div>

        {/* User Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        
        {/* Wallet Address */}
        <div className="flex items-center text-gray-500 mb-6">
          <span>{formatWalletAddress(walletAddress)}</span>
          <button 
            onClick={handleCopyAddress}
            className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Copy wallet address"
          >
            <ClipboardCopy className="w-4 h-4" />
          </button>
        </div>

        {/* Disconnect Button */}
        <button
          onClick={onDisconnect}
          className="w-full py-3 px-6 rounded-xl text-red-600 font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Disconnect wallet"
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};
