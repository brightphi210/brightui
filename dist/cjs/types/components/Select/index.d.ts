import React from 'react';
export interface SelectOption {
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
declare const Select: React.FC<SelectProps>;
export default Select;
