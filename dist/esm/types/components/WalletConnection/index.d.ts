import React from "react";
export interface WalletConnectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConnect: (walletType: string) => Promise<string>;
    onDisconnect: () => void;
    theme?: "light" | "dark";
    accentColor?: string;
}
declare const WalletConnection: React.FC<WalletConnectionModalProps>;
export default WalletConnection;
