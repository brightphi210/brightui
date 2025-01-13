import React from 'react';
export interface LoadingProps {
    type: 'spinner' | 'dots' | 'bar' | 'pulse' | 'ring';
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    className?: string;
}
declare const Loading: React.FC<LoadingProps>;
export default Loading;
