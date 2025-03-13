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

const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  min = 0,
  isAnimated = false,
  isIndeterminate = false,
  colorScheme = 'blue',
  size = 'md',
  hasStripe = false,
  showLabel = false,
  className = '',
}) => {
  // Normalize value to be within min and max range
  const normalizedValue = Math.min(Math.max(value, min), max);
  const percentage = ((normalizedValue - min) / (max - min)) * 100;

  // Size classes
  const sizeClasses = {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  // Color scheme classes
  const colorClasses = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    red: 'bg-red-100',
    purple: 'bg-purple-100',
    gray: 'bg-gray-100',
  };

  const fillColorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    gray: 'bg-gray-500',
  };

  // Stripe animation classes
  const stripeClass = hasStripe ? 'bg-stripe' : '';
  const animationClass = isAnimated && hasStripe ? 'animate-progress-stripe' : '';

  // Indeterminate animation class
  const indeterminateClass = isIndeterminate ? 'animate-progress-indeterminate w-3/4' : '';

  return (
    <div className={`w-full ${colorClasses[colorScheme]} rounded-full overflow-hidden ${className}`}>
      <div
        className={`
          ${sizeClasses[size]}
          ${fillColorClasses[colorScheme]}
          ${stripeClass}
          ${animationClass}
          ${indeterminateClass}
          transition-all duration-300 ease-in-out relative
        `}
        style={{
          width: isIndeterminate ? undefined : `${percentage}%`,
        }}
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : normalizedValue}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        {showLabel && !isIndeterminate && (
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;