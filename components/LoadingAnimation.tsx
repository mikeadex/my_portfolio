'use client';

import { useEffect, useState } from 'react';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after brief delay
    setTimeout(() => setShowText(true), 100);
    
    // Start fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{ backgroundColor: '#151312' }}
    >
      <div className="relative">
        {/* Liquid blob behind text */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <svg 
            className="absolute w-64 h-64 md:w-80 md:h-80"
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'blur(30px)',
              opacity: showText ? 0.4 : 0,
              transition: 'opacity 0.7s ease-out'
            }}
          >
            <path 
              fill="#ef233c"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.8C26.4,84.6,10,87.6,-5.8,86.8C-21.6,86,-43.2,81.4,-58.5,72.2C-73.8,63,-82.8,49.2,-87.9,33.8C-93,18.4,-94.2,1.4,-90.8,-14.3C-87.4,-30,-79.4,-44.4,-68.5,-56.2C-57.6,-68,-43.8,-77.2,-29.1,-84.1C-14.4,-91,-7.2,-95.6,1.6,-98.5C10.4,-101.4,30.6,-83.6,44.7,-76.4Z" 
              transform="translate(100 100)"
              style={{
                animation: 'morph 8s ease-in-out infinite, float 6s ease-in-out infinite'
              }}
            />
          </svg>
          
          {/* Second blob for more depth */}
          <svg 
            className="absolute w-56 h-56 md:w-72 md:h-72"
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'blur(40px)',
              opacity: showText ? 0.3 : 0,
              transition: 'opacity 0.7s ease-out 0.2s'
            }}
          >
            <path 
              fill="#ef233c"
              d="M39.5,-65.6C51.4,-58.7,61.4,-47.6,68.1,-34.8C74.8,-22,78.2,-7.5,76.8,6.3C75.4,20.1,69.2,33.2,60.3,44.8C51.4,56.4,39.8,66.5,26.3,72.3C12.8,78.1,-2.6,79.6,-17.3,76.4C-32,73.2,-46,65.3,-57.4,54.1C-68.8,42.9,-77.6,28.4,-80.8,12.8C-84,-2.8,-81.6,-19.5,-74.8,-34.5C-68,-49.5,-56.8,-62.8,-43.5,-69C-30.2,-75.2,-15.1,-74.3,-0.5,-73.5C14.1,-72.7,27.6,-72.5,39.5,-65.6Z" 
              transform="translate(100 100)"
              style={{
                animation: 'morph 10s ease-in-out infinite reverse, float 7s ease-in-out infinite reverse'
              }}
            />
          </svg>
        </div>

        {/* Main Hello Text with motion blur effect */}
        <div 
          className={`text-center transition-all duration-700 ease-out relative z-10 ${
            showText ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide font-[family-name:var(--font-noto-sans-sc)]"
            style={{ 
              color: '#ef233c',
              textShadow: '0 0 30px rgba(239, 35, 60, 0.5)'
            }}
          >
            Hello
          </h1>
        </div>

        {/* Animated dots */}
        <div 
          className={`flex justify-center gap-2 mt-6 transition-opacity duration-500 delay-300 relative z-10 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[0, 0.2, 0.4].map((delay, i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full animate-bounce-smooth"
              style={{
                backgroundColor: '#ef233c',
                animationDelay: `${delay}s`,
                boxShadow: '0 0 10px rgba(239, 35, 60, 0.5)'
              }}
            />
          ))}        </div>
      </div>
    </div>
  );
}
