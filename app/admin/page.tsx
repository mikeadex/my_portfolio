'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, FileText, Folder, Plus } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'blogs' | 'projects'>('blogs');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [blogsRes, projectsRes] = await Promise.all([
        fetch('/api/blog'),
        fetch('/api/projects'),
      ]);
      
      const blogsData = await blogsRes.json();
      const projectsData = await projectsRes.json();
      
      setBlogs(blogsData);
      setProjects(projectsData);
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const handleDelete = async (type: 'blog' | 'project', id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const endpoint = type === 'blog' 
        ? `/api/blog/${id}` 
        : `/api/projects/${id}`;
      
      const res = await fetch(endpoint, { method: 'DELETE' });
      
      if (res.ok) {
        loadData();
      }
    } catch (error) {
      console.error('Failed to delete:', error);
      alert('Failed to delete item');
    }
  };

  return (
    <div className="min-h-screen bg-[#151312]">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a0a]">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-white font-[family-name:var(--font-poppins)]">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-400 mt-1">Manage your content</p>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-[#ef233c] text-white rounded-lg hover:bg-[#d41f35] transition-colors font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <div className="px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-800">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors relative ${
              activeTab === 'blogs'
                ? 'text-[#ef233c]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FileText size={20} />
            Blog Posts
            {activeTab === 'blogs' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ef233c]"></div>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors relative ${
              activeTab === 'projects'
                ? 'text-[#ef233c]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Folder size={20} />
            Projects
            {activeTab === 'projects' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ef233c]"></div>
            )}
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-[#ef233c] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {activeTab === 'blogs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Blog Posts ({blogs.length})</h2>
                  <button
                    onClick={() => router.push('/admin/blog/new')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#ef233c] text-white rounded-lg hover:bg-[#d41f35] transition-colors font-medium"
                  >
                    <Plus size={18} />
                    New Post
                  </button>
                </div>
                
                <div className="space-y-4">
                  {blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6 hover:border-[#ef233c] transition-colors"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                          <p className="text-gray-400 text-sm mb-3">{blog.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>{blog.date}</span>
                            <span>{blog.readTime}</span>
                            <span className={`px-2 py-1 rounded ${blog.published ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                              {blog.published ? 'Published' : 'Draft'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => router.push(`/admin/blog/${blog.slug}`)}
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete('blog', blog.slug)}
                            className="px-4 py-2 bg-red-900/30 text-red-500 rounded hover:bg-red-900/50 transition-colors text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Projects ({projects.length})</h2>
                  <button
                    onClick={() => router.push('/admin/project/new')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#ef233c] text-white rounded-lg hover:bg-[#d41f35] transition-colors font-medium"
                  >
                    <Plus size={18} />
                    New Project
                  </button>
                </div>
                
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6 hover:border-[#ef233c] transition-colors"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech: string, i: number) => (
                              <span key={i} className="px-2 py-1 bg-[#ef233c]/10 text-[#ef233c] text-xs rounded border border-[#ef233c]/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                          {project.featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => router.push(`/admin/project/${project.id}`)}
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete('project', project.id)}
                            className="px-4 py-2 bg-red-900/30 text-red-500 rounded hover:bg-red-900/50 transition-colors text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
