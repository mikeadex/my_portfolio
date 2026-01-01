'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export function HeroContent() {
  const [codeAnimation, setCodeAnimation] = React.useState(null);
  const [designAnimation, setDesignAnimation] = React.useState(null);

  React.useEffect(() => {
    fetch('/animations/code-animation.json')
      .then(res => res.json())
      .then(data => setCodeAnimation(data))
      .catch(err => console.error('Failed to load code animation:', err));
    
    fetch('/animations/design-animation.json')
      .then(res => res.json())
      .then(data => setDesignAnimation(data))
      .catch(err => console.error('Failed to load design animation:', err));
  }, []);

  return (
    <div className="space-y-8 sm:space-y-12 pb-8 sm:pb-12">
      <div>
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.95] mb-0 font-[family-name:var(--font-poppins)] text-center lg:text-left">
          FULLSTACK
        </h1>
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.95] font-[family-name:var(--font-poppins)] text-center lg:text-left" style={{color: '#353334'}}>
          DEVELOPER
        </h1>
        <p className="text-gray-400 mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-bold text-center lg:text-left">
          I design and build fast, modern websites and web applications that don’t just look good, they perform.
          From Django + PostgreSQL builds to Next.js/React frontends and WordPress delivery, I help businesses launch, improve conversions, and scale with SEO-ready structure, clean UX, and measurable growth.
        </p>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">
        <div className="text-center lg:text-left">
          <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-1 sm:mb-2">13+</div>
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider leading-tight font-bold">YEARS OF<br/>EXPERIENCE</div>
        </div>
        <div className="text-center lg:text-left">
          <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-1 sm:mb-2">200+</div>
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider leading-tight font-bold">PROJECTS<br/>SHIPPED</div>
        </div>
        <div className="text-center lg:text-left">
          <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-1 sm:mb-2">100+</div>
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider leading-tight font-bold">UK +<br/>GLOBAL</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
        <div className="rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 relative overflow-hidden min-h-[180px] sm:min-h-[200px] group hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl border-2" style={{backgroundColor: '#ef233c', borderColor: '#ef233c'}}>
          {designAnimation && (
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Lottie animationData={designAnimation} loop={true} />
            </div>
          )}
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm sm:text-base uppercase leading-tight tracking-wide">
              CONVERSION-FOCUSED WEBSITES,<br/>SEO & LANDING PAGES
            </h3>
          </div>
          <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-white/30 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/50 transition-all duration-300">
            <span className="text-white text-base">→</span>
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 relative overflow-hidden min-h-[180px] sm:min-h-[200px] group hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl border-2" style={{backgroundColor: '#ef233c', borderColor: '#ef233c'}}>
          {codeAnimation && (
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Lottie animationData={codeAnimation} loop={true} />
            </div>
          )}
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
                <polyline points="7 8 10 11 7 14"/>
                <line x1="13" y1="12" x2="17" y2="12"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm sm:text-base uppercase leading-tight tracking-wide">
              DJANGO, NEXT.JS, WORDPRESS,<br/>PAID ADS & SOCIAL STRATEGY
            </h3>
          </div>
          <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-white/30 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/50 transition-all duration-300">
            <span className="text-white text-base">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const getIcon = (iconName: string, size = 18) => {
    const icons: { [key: string]: React.ReactElement } = {
      github: <Github size={size} />,
      linkedin: <Linkedin size={size} />,
      twitter: <Twitter size={size} />,
      mail: <Mail size={size} />
    };
    return icons[iconName] || <Mail size={size} />;
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 lg:space-y-6 lg:sticky lg:top-20 relative overflow-hidden w-full lg:w-[400px] flex-shrink-0 self-start h-fit">
          {/* Decorative dashed line from top-left */}
          <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 128 128">
              <path d="M 0 128 Q 0 0 128 0" fill="none" stroke="#000000" strokeWidth="3" strokeDasharray="8,8" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="relative aspect-[2.5/2.8] w-[80%] sm:w-full mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden">
            <img 
              src="/images/mike.jpg" 
              alt="Michael Adeleye" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative dashed line connecting image to badge */}
          {/* <div className="flex justify-center my-4">
            <svg width="4" height="40" viewBox="0 0 4 40">
              <line x1="2" y1="0" x2="2" y2="40" stroke="#ff6b35" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round"/>
            </svg>
          </div> */}

          <div className="text-center space-y-2 sm:space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight font-[family-name:var(--font-poppins)]">Michael Adeleye</h2>
          </div>

          {/* Decorative dashed line from badge to description */}
          {/* <div className="flex justify-center my-3">
            <svg width="4" height="30" viewBox="0 0 4 30">
              <line x1="2" y1="0" x2="2" y2="30" stroke="#ff6b35" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round"/>
            </svg>
          </div> */}

          <p className="text-base sm:text-base lg:text-lg text-gray-600 text-center leading-snug px-1 sm:px-2 lg:px-4 relative z-10 font-black">
            Full-Stack Developer & Digital Growth Strategist building high-converting websites and web apps.
          </p>

          <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 pt-1 sm:pt-2 lg:pt-4 relative z-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center transition-colors hover:scale-110 transform"
                style={{color: '#ef233c'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#d41f35'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ef233c'}
                aria-label={link.name}
              >
                {getIcon(link.icon, 16)}
              </a>
            ))}
          </div>

          {/* Decorative dashed line from bottom-right */}
          <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 128 128">
              <path d="M 128 0 Q 128 128 0 128" fill="none" stroke="#000000" strokeWidth="3" strokeDasharray="8,8" strokeLinecap="round"/>
            </svg>
          </div>
    </div>
  );
}
