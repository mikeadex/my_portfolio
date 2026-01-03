'use client';

import { educationJourney } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="pt-8 sm:pt-12 pb-12 sm:pb-20">
      <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.95] mb-8 sm:mb-10 lg:mb-16 font-[family-name:var(--font-poppins)] text-center lg:text-left">
        <span className="text-white block">MY LEARNING</span>
        <span className="block" style={{color: '#353334'}}>JOURNEY</span>
      </h2>

      <div className="space-y-8 sm:space-y-12">
        {educationJourney.map((item, index) => (
          <a
            key={item.id}
            href={item.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group block lazy-load"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <article className="relative border-b border-gray-800 pb-6 sm:pb-8 group-hover:border-[#ef233c] transition-colors">
              <div className="flex items-start justify-between gap-4 mb-3 sm:mb-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white transition-colors font-[family-name:var(--font-poppins)]" style={{}} onMouseEnter={(e) => e.currentTarget.style.color = '#ef233c'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>
                  {item.institution}
                </h3>
                
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" style={{color: '#ef233c'}}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-3 sm:mb-4 leading-relaxed font-medium max-w-3xl">
                {item.description}
              </p>
              
              <div className="text-sm sm:text-base text-gray-500 font-medium">
                {item.period}
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
