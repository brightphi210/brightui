import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaTimes } from 'react-icons/fa';

export interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  className?: string;
  onClose?: () => void;
}

const iconMap: Record<AlertProps['type'], IconType> = {
  info: FaInfoCircle,
  success: FaCheckCircle,
  warning: FaExclamationTriangle,
  error: FaTimesCircle,
};

const Alert: React.FC<AlertProps> = ({ type, message, className = '', onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const Icon = iconMap[type];

  const baseClasses = 'flex items-center p-4 rounded-lg';
  const typeClasses = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`} role="alert">
      <Icon className="w-5 h-5 mr-3" aria-hidden="true" />
      <span className="sr-only">{type}</span>
      <span className="text-sm font-medium flex-grow">{message}</span>
      {onClose && (
        <button
          onClick={handleClose}
          className="ml-auto bg-transparent text-current hover:bg-gray-200 hover:bg-opacity-50 rounded-full p-1"
          aria-label="Close"
        >
          <FaTimes className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;

