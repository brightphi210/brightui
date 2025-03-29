import React from 'react';
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
export declare const ProfileCard: React.FC<ProfileCardProps>;
