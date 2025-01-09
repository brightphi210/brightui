import React from 'react';
import { IconType } from 'react-icons';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

export interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  className?: string;
}

const iconMap: Record<AlertProps['type'], IconType> = {
  info: FaInfoCircle,
  success: FaCheckCircle,
  warning: FaExclamationTriangle,
  error: FaTimesCircle,
};

const Alert: React.FC<AlertProps> = ({ type, message, className = '' }) => {
  const Icon = iconMap[type];

  const baseClasses = 'flex items-center p-4 rounded-lg';
  const typeClasses = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`} role="alert">
      <Icon className="w-5 h-5 mr-3" aria-hidden="true" />
      <span className="sr-only">{type}</span>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

export default Alert;

