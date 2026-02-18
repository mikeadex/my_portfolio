import Image from 'next/image';
import type { Project } from '@/lib/types';
import { prisma } from '@/lib/prisma';
import ProjectsClient from './ProjectsClient';

async function getProjects(): Promise<Project[]> {
  try {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
    return projects.map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      technologies: p.technologies,
      githubUrl: p.githubUrl || undefined,
      liveUrl: p.liveUrl || undefined,
      imageUrl: p.imageUrl || undefined,
      projectType: p.projectType || undefined,
      problem: p.problem || undefined,
      solution: p.solution || undefined,
      outcome: p.outcome || undefined,
      role: p.role || undefined,
      featured: p.featured,
      order: p.order,
    }));
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}

export default async function Projects() {
  const projects = await getProjects();
  const itemsPerPage = 5;

  return (
    <section id="projects" className="pt-8 sm:pt-12 pb-12 sm:pb-20">
      <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.95] mb-8 sm:mb-10 lg:mb-16 font-[family-name:var(--font-poppins)] text-center lg:text-left">
        <span className="text-white block">RECENT</span>
        <span className="block" style={{color: '#353334'}}>PROJECTS</span>
      </h2>

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No projects available at the moment.</p>
        </div>
      ) : (
        <>
        <div className="space-y-4 sm:space-y-6">
          {projects.slice(0, itemsPerPage).map((project, index) => (
          <a
            key={project.id}
            href={project.liveUrl || project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            data-project
            id={`project-${project.id}`}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 hover:translate-x-2 transition-transform duration-300">
              <div 
                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-500"
                style={{
                  boxShadow: '0 8px 32px rgba(239, 35, 60, 0.15), 0 0 48px rgba(239, 35, 60, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.05)'
                }}
              >
                {project.imageUrl ? (
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    loading={index < 2 ? 'eager' : 'lazy'}
                    priority={index < 2}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-bold text-2xl text-gray-500">{project.title.substring(0, 2)}</span>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-1.5 group-hover:text-gray-300 transition-colors" itemProp="name">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2 line-clamp-2" itemProp="description">
                  {project.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-1 font-medium" itemProp="keywords">
                  {project.technologies.join(' • ')}
                </p>
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
          </a>
        ))}
        </div>
        
        {projects.length > itemsPerPage && (
          <ProjectsClient projects={projects} itemsPerPage={itemsPerPage} />
        )}
        </>
      )}
    </section>
  );
}
