'use client';

import { useState, useEffect } from 'react';
import type { BlogPost } from '@/lib/types';

export default function Thoughts() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('/api/blog', {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(data => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch blog posts:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="thoughts" className="pt-8 sm:pt-12 pb-12 sm:pb-20">
      <div className="mb-8 sm:mb-10 lg:mb-16">
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.95] mb-0 font-[family-name:var(--font-poppins)] text-center lg:text-left">
          MY
        </h2>
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.95] font-[family-name:var(--font-poppins)] text-center lg:text-left" style={{color: '#353334'}}>
          THOUGHTS
        </h2>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-4 border-[#ef233c] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
        <div className="space-y-6 sm:space-y-8">
          {blogPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="py-4 sm:py-6 border-b border-gray-800 hover:border-[#ef233c] transition-colors">
              <div className="flex items-start gap-6">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 transition-colors font-[family-name:var(--font-poppins)]" onMouseEnter={(e) => e.currentTarget.style.color = '#ef233c'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed font-medium">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 font-medium group-hover:text-[#ef233c] transition-colors">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" style={{color: '#ef233c'}}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          </a>
        ))}
        </div>
        
        {/* Pagination */}
        {blogPosts.length > itemsPerPage && (
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
            
            {Array.from({ length: Math.ceil(blogPosts.length / itemsPerPage) }, (_, i) => i + 1).map(page => (
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
              onClick={() => setCurrentPage(p => Math.min(Math.ceil(blogPosts.length / itemsPerPage), p + 1))}
              disabled={currentPage === Math.ceil(blogPosts.length / itemsPerPage)}
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
