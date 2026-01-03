'use client';

import Image from 'next/image';
import { tools } from '@/lib/data';

export default function Tools() {
  return (
    <section id="tools" className="pt-8 sm:pt-12 pb-12 sm:pb-20">
      <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.95] mb-8 sm:mb-10 lg:mb-16 font-[family-name:var(--font-poppins)] text-center lg:text-left">
        <span className="text-white block">SKILLS &</span>
        <span className="block" style={{color: '#353334'}}>TOOLS</span>
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {tools.map((tool, index) => (
          <div
            key={tool.id}
            className="group p-4 sm:p-6 lg:p-8 flex items-center gap-3 sm:gap-4 md:gap-6 hover:scale-[1.02] transition-all duration-300 rounded-xl sm:rounded-2xl border-2 border-transparent hover:border-[#ef233c] lazy-load"
            style={{ 
              animationDelay: `${index * 0.05}s`,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(239, 35, 60, 0.2), 0 0 48px rgba(239, 35, 60, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-[#ef233c] transition-colors duration-300">
              {tool.iconUrl ? (
                <Image 
                  src={tool.iconUrl} 
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                />
              ) : (
                <span className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-800">
                  {tool.name.substring(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-0.5 sm:mb-1 font-[family-name:var(--font-poppins)] group-hover:text-[#ef233c] transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 font-medium">
                {tool.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
