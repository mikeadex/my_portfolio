'use client';

import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/lib/types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    fetch('/api/projects', {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-project]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [projects]);

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

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-4 border-[#ef233c] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
        <div className="space-y-4 sm:space-y-6">
          {projects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((project, index) => (
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
                className={`w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-500 ${
                  visibleProjects.has(`project-${project.id}`) 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{
                  boxShadow: '0 8px 32px rgba(239, 35, 60, 0.15), 0 0 48px rgba(239, 35, 60, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.05)'
                }}
              >
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-bold text-2xl text-gray-500">{project.title.substring(0, 2)}</span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-1.5 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2 line-clamp-2">
                  {project.description}
                </p>
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
        
        {/* Pagination */}
        {projects.length > itemsPerPage && (
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {Array.from({ length: Math.ceil(projects.length / itemsPerPage) }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-all ${
                  currentPage === page 
                    ? 'bg-[#ef233c] text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(p => Math.min(Math.ceil(projects.length / itemsPerPage), p + 1))}
              disabled={currentPage === Math.ceil(projects.length / itemsPerPage)}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
        </>
      )}
    </section>
  );
}
