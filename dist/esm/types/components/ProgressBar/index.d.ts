import React from 'react';
export interface ProgressBarProps {
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
declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
