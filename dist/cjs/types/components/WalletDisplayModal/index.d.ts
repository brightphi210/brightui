import type React from "react";
export interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
    address: string;
    balance: string;
    currency: string;
    onCopy?: () => void;
    onDisconnect?: () => void;
    className?: string;
    avatarUrl?: string;
}
declare const WalletDisplayModal: React.FC<WalletModalProps>;
export default WalletDisplayModal;
