import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-12 pt-12 pb-20 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12">
        <div className="hidden lg:block w-[400px] flex-shrink-0"></div>
        <div className="flex-1 min-w-0 max-w-3xl">
          <div className="mb-16">
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-none mb-2">
              RECENT
            </h2>
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-gray-700 leading-none">
              PROJECTS
            </h2>
          </div>

          <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.liveUrl || project.githubUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-gray-800/50 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/20">
                <div className="sm:w-24 sm:h-24 w-full h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-800">
                  <span className="text-4xl font-bold text-gray-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
