import * as React from "react";
export interface RatingProps {
    value?: number;
    max?: number;
    readOnly?: boolean;
    size?: "sm" | "md" | "lg";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    onChange?: (value: number) => void;
    className?: string;
}
declare const Rating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<HTMLDivElement>>;
export default Rating;
