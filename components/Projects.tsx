'use client';

import { projects } from '@/lib/data';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-project]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="projects" className="pt-8 sm:pt-12 pb-12 sm:pb-20">
      <div className="mb-8 sm:mb-10 lg:mb-16">
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.95] mb-0 font-[family-name:var(--font-poppins)] text-center lg:text-left">
          RECENT
        </h2>
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.95] font-[family-name:var(--font-poppins)] text-center lg:text-left" style={{color: '#353334'}}>
          PROJECTS
        </h2>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.liveUrl || project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            data-project
            id={`project-${project.id}`}
          >
            <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 hover:translate-x-2 transition-transform duration-300">
              {/* Project Thumbnail */}
              <div 
                className={`w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-700 ease-out ${
                  visibleProjects.has(`project-${project.id}`) 
                    ? 'scale-100 rotate-0 opacity-100' 
                    : 'scale-0 -rotate-[15deg] opacity-0'
                }`}
                style={{
                  boxShadow: '0 8px 32px rgba(239, 35, 60, 0.15), 0 0 48px rgba(239, 35, 60, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-bold text-2xl">{project.title.substring(0, 2)}</span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-1 font-medium">
                  {project.technologies.join(' • ')}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" style={{color: '#ef233c'}}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
