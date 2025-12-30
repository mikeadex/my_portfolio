'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Hero() {
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
    <section className="px-6 lg:px-12 pt-20 pb-12">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        <div className="bg-white rounded-3xl p-8 space-y-6 sticky top-20 relative overflow-hidden w-full lg:w-[400px] flex-shrink-0 self-start">
          {/* Decorative dashed line from top-left */}
          <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 128 128">
              <path d="M 0 128 Q 0 0 128 0" fill="none" stroke="#000000" strokeWidth="3" strokeDasharray="8,8" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="relative aspect-[2.5/2.8] w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-7xl font-bold opacity-20">MA</span>
            </div>
          </div>
          
          {/* Decorative dashed line connecting image to badge */}
          {/* <div className="flex justify-center my-4">
            <svg width="4" height="40" viewBox="0 0 4 40">
              <line x1="2" y1="0" x2="2" y2="40" stroke="#ff6b35" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round"/>
            </svg>
          </div> */}

          <div className="text-center space-y-3 relative z-10">
            <h2 className="text-2xl font-black text-black">Michael Adeleye</h2>
            <div className="w-12 h-12 bg-black rounded-full mx-auto flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
            </div>
          </div>

          {/* Decorative dashed line from badge to description */}
          {/* <div className="flex justify-center my-3">
            <svg width="4" height="30" viewBox="0 0 4 30">
              <line x1="2" y1="0" x2="2" y2="30" stroke="#ff6b35" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round"/>
            </svg>
          </div> */}

          <p className="text-sm text-gray-600 text-center leading-relaxed px-4 relative z-10">
            A Software Engineer who has developed countless innovative solutions.
          </p>

          <div className="flex justify-center gap-4 pt-4 relative z-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-700 hover:text-black transition-colors hover:scale-110 transform"
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

        <div className="space-y-12 w-full lg:flex-1">
          <div>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-none mb-2">
              SOFTWARE
            </h1>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-700 leading-none">
              ENGINEER
            </h1>
            <p className="text-gray-400 mt-8 text-base lg:text-lg max-w-3xl leading-relaxed">
              Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">+12</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">YEARS OF<br/>EXPERIENCE</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">+46</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">PROJECTS<br/>COMPLETED</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">+20</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">WORLDWIDE<br/>CLIENTS</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-[2rem] p-8 relative overflow-hidden min-h-[200px] group hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700/50">
              {designAnimation && (
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <Lottie animationData={designAnimation} loop={true} />
                </div>
              )}
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base uppercase leading-tight tracking-wide">
                  DYNAMIC ANIMATION,<br/>MOTION DESIGN
                </h3>
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-white/30 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/50 transition-all duration-300">
                <span className="text-white text-base">→</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-[2rem] p-8 relative overflow-hidden min-h-[200px] group hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-300/50">
              {codeAnimation && (
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <Lottie animationData={codeAnimation} loop={true} />
                </div>
              )}
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                    <polyline points="7 8 10 11 7 14"/>
                    <line x1="13" y1="12" x2="17" y2="12"/>
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-base uppercase leading-tight tracking-wide">
                  FRAMER, FIGMA,<br/>WORDPRESS, REACT.JS
                </h3>
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-gray-900/20 rounded-xl flex items-center justify-center group-hover:bg-gray-900/10 group-hover:border-gray-900/40 transition-all duration-300">
                <span className="text-gray-900 text-base">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
