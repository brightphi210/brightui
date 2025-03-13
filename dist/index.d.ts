import * as React from 'react';
import React__default, { InputHTMLAttributes } from 'react';

interface ButtonProps {
    onClick?: () => void;
    color: 'blue' | 'red' | 'white' | 'black' | 'green' | 'yellow';
    size: 'sm' | 'md' | 'lg';
    fontWeight: 'light' | 'medium' | 'semibold' | 'bold';
    className?: string;
    children: React__default.ReactNode;
    disabled?: boolean;
}
declare const Button: React__default.FC<ButtonProps>;

interface AlertProps {
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
    className?: string;
    onClose?: () => void;
}
declare const Alert: React__default.FC<AlertProps>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React__default.ReactNode;
    className?: string;
}
declare const Modal: React__default.FC<ModalProps>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface SelectOption {
    value: string;
    label: string;
}
interface SelectProps {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}
declare const Select: React__default.FC<SelectProps>;

interface LoadingProps {
    type: 'spinner' | 'dots' | 'bar' | 'pulse' | 'ring';
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    className?: string;
}
declare const Loading: React__default.FC<LoadingProps>;

interface AccordionProps {
    title: string;
    content: string;
    type?: 'arrow' | 'plus';
    className?: string;
}
declare const Accordion: React__default.FC<AccordionProps>;

interface SwiperProps {
    slides: React__default.ReactNode[];
    autoplay?: boolean;
    autoplayInterval?: number;
    showNavigation?: boolean;
    showPagination?: boolean;
    className?: string;
    slidesPerView?: {
        mobile?: number;
        tablet?: number;
        laptop?: number;
        desktop?: number;
    };
}
declare const Swiper: React__default.FC<SwiperProps>;

interface CardProps {
    imageSrc?: string;
    title?: string;
    description?: string;
    price?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    className?: string;
    children?: React__default.ReactNode;
}
declare const Card: React__default.FC<CardProps>;

interface AvatarProps {
    src?: string;
    name?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    badge?: "online" | "offline" | "away";
    className?: string;
}
declare const Avatar: React__default.FC<AvatarProps>;

interface WalletConnectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConnect: (walletType: string) => Promise<string>;
    onDisconnect: () => void;
    theme?: "light" | "dark";
    accentColor?: string;
}
declare const WalletConnection: React__default.FC<WalletConnectionModalProps>;

interface SuccessfulTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    transactionHash: string;
    theme?: "light" | "dark";
}
declare const SuccessfulTransactionModal: React__default.FC<SuccessfulTransactionModalProps>;

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
declare const NFTCard: React__default.FC<NFTCardProps>;

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
declare const TokenSwap: React__default.FC<TokenSwapProps>;

interface ToastProps {
    /**
     * Type of toast notification
     */
    type: "success" | "error" | "warning" | "info" | "loading" | "custom";
    /**
     * Message to display in the toast
     */
    message: string;
    /**
     * Duration in milliseconds before toast auto-dismisses (0 for no auto-dismiss)
     */
    duration?: number;
    /**
     * Theme of the toast
     */
    theme?: "light" | "dark";
    /**
     * Position of the toast on the screen
     */
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
    /**
     * Custom icon to display (only used when type is 'custom')
     */
    icon?: React__default.ReactNode;
    /**
     * Optional callback when toast is closed
     */
    onClose?: () => void;
    /**
     * Optional additional class names
     */
    className?: string;
    /**
     * Whether the toast is visible
     */
    isVisible?: boolean;
}
declare const Toast: React__default.FC<ToastProps>;

interface ChatBubbleProps {
    /**
     * The message text to display
     */
    message: string;
    /**
     * Position of the chat bubble
     * @default "left"
     */
    position?: "left" | "right";
    /**
     * Color variant of the bubble
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "accent" | "neutral" | "success" | "warning" | "error";
    /**
     * URL for the avatar image
     */
    avatar?: string;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Time the message was sent
     */
    timestamp?: string;
    /**
     * Name of the message sender
     */
    sender?: string;
    /**
     * Status of the message (typing, sent, delivered, read)
     */
    status?: "typing" | "sent" | "delivered" | "read" | "error";
    /**
     * Whether to show the tail on the bubble
     * @default true
     */
    showTail?: boolean;
    /**
     * Whether the message contains multimedia (shows a placeholder if true)
     */
    hasMedia?: boolean;
    /**
     * Optional media URL (image, etc.)
     */
    mediaUrl?: string;
    /**
     * Optional callback when the bubble is clicked
     */
    onClick?: () => void;
}
declare const ChatBubble: React__default.FC<ChatBubbleProps>;

interface ProgressBarProps {
    /**
     * The value of the progress (0-100)
     */
    value: number;
    /**
     * Maximum value of the progress
     * @default 100
     */
    max?: number;
    /**
     * Minimum value of the progress
     * @default 0
     */
    min?: number;
    /**
     * If `true`, the progress bar will show stripe animation
     * @default false
     */
    isAnimated?: boolean;
    /**
     * If `true`, the progress will be indeterminate and the `value` prop will be ignored
     * @default false
     */
    isIndeterminate?: boolean;
    /**
     * The color scheme of the progress
     * @default 'blue'
     */
    colorScheme?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'gray';
    /**
     * The size of the progress bar
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     * If `true`, the progress bar will be rounded
     * @default false
     */
    hasStripe?: boolean;
    /**
     * If `true`, the progress bar will show its label
     * @default false
     */
    showLabel?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}
declare const ProgressBar: React__default.FC<ProgressBarProps>;

export { Accordion, Alert, type AlertProps, Avatar, Button, Card, ChatBubble, Input, Loading, Modal, NFTCard, ProgressBar, Select, SuccessfulTransactionModal, Swiper, Toast, TokenSwap, WalletConnection };
