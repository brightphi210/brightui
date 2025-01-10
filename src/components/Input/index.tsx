import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="mb-4">
        {label && (
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            appearance-none border rounded w-full py-2 px-3 text-neutral-500 leading-tight
            focus:outline-none focus:shadow-outline focus:border-blue-500 focus:border-2
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

