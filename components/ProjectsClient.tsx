'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';

interface ProjectsClientProps {
  projects: Project[];
  itemsPerPage: number;
}

export default function ProjectsClient({ projects, itemsPerPage }: ProjectsClientProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const scrollToSection = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    scrollToSection();
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Previous page"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {Array.from({ length: Math.ceil(projects.length / itemsPerPage) }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-all ${
            currentPage === page 
              ? 'bg-[#ef233c] text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
          aria-label={`Go to page ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => handlePageChange(Math.min(Math.ceil(projects.length / itemsPerPage), currentPage + 1))}
        disabled={currentPage === Math.ceil(projects.length / itemsPerPage)}
        className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Next page"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
