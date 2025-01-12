import React from 'react';
import { FaSpinner } from 'react-icons/fa';

export interface LoadingProps {
  type: 'spinner' | 'dots' | 'bar' | 'pulse' | 'ring';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ type, size = 'md', color = 'text-blue-500', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const baseClasses = `inline-block ${sizeClasses[size]} ${className}`;

  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return <FaSpinner className={`${baseClasses} ${color} animate-spin`} />;
      case 'dots':
        return (
          <div className={`${baseClasses} flex justify-between items-center`}>
            <p className={`w-2 h-2 bg-blue-500 ${color} rounded-full animate-bounce`} style={{animationDelay: '0s'}}></p>
            <p className={`w-2 h-2 bg-blue-500 ${color} rounded-full animate-bounce`} style={{animationDelay: '0.2s'}}></p>
            <p className={`w-2 h-2 bg-blue-500 ${color} rounded-full animate-bounce`} style={{animationDelay: '0.4s'}}></p>
          </div>
        );
      case 'bar':
        return (
          <div className={`${baseClasses} relative`}>
            <div className={`absolute top-0 left-0 w-full h-1 ${color} animate-loading-bar`}></div>
          </div>
        );
      case 'pulse':
        return <div className={`${baseClasses} ${color} rounded-full animate-pulse`}></div>;
      case 'ring':
        return (
          <div className={`${baseClasses} border-4 ${color} border-t-transparent rounded-full animate-spin`}></div>
        );
      default:
        return null;
    }
  };

  return renderLoader();
};

export default Loading;

