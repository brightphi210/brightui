import type React from "react";
export interface SuccessfulTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    transactionHash: string;
    theme?: "light" | "dark";
}
declare const SuccessfulTransactionModal: React.FC<SuccessfulTransactionModalProps>;
export default SuccessfulTransactionModal;
