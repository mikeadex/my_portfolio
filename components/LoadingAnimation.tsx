'use client';

import { useEffect, useState } from 'react';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove blur after brief delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] backdrop-blur-xl flex items-center justify-center transition-opacity duration-500"
      style={{
        opacity: isLoading ? 1 : 0,
      }}
    >
      {/* Rolling Circle */}
      <div className="relative">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="40" 
            cy="40" 
            r="30" 
            stroke="#ef233c" 
            strokeWidth="4"
            fill="none"
            strokeDasharray="188"
            strokeDashoffset="0"
            style={{
              transformOrigin: 'center',
              animation: 'circleRoll 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite'
            }}
          />
          <circle 
            cx="40" 
            cy="40" 
            r="8" 
            fill="#ef233c"
            style={{
              animation: 'circlePulse 1.5s ease-in-out infinite'
            }}
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes circleRoll {
          0% {
            transform: rotate(0deg);
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dashoffset: 94;
          }
          100% {
            transform: rotate(360deg);
            stroke-dashoffset: 188;
          }
        }
        
        @keyframes circlePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
