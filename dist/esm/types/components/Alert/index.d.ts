import React from 'react';
export interface AlertProps {
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
    className?: string;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
