import React from 'react';

const LoadingAnimation = () => {
    return (
        <div className="flex space-x-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full typing-dot delay-0"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full typing-dot delay-1"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full typing-dot delay-2"></span>
        </div>
    );
};

export default LoadingAnimation;
