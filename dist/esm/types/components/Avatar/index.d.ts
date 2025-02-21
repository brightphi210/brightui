import type React from "react";
export interface AvatarProps {
    src?: string;
    name?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    badge?: "online" | "offline" | "away";
    className?: string;
}
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
