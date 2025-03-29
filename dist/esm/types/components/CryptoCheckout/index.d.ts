export interface CryptoCheckoutProps {
    amount: string;
    currency: string;
    walletAddress: string;
    network: string;
    className?: string;
    onConfirm?: () => void;
    theme?: "light" | "dark";
    accentColor?: string;
}
declare const CryptoCheckout: ({ amount, currency, walletAddress, network, className, onConfirm, theme, }: CryptoCheckoutProps) => import("react/jsx-runtime").JSX.Element;
export default CryptoCheckout;
