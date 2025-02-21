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

export { Accordion, Alert, type AlertProps, Avatar, Button, Card, Input, Loading, Modal, Select, SuccessfulTransactionModal, Swiper, WalletConnection };
