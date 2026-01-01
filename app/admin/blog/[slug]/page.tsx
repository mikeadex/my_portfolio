'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save, Eye, Edit3 } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogEditor() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const isNew = slug === 'new';

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    content: '',
    featuredImage: '',
    tags: '',
    author: 'Michael Adeleye',
    readTime: '',
    published: false,
  });

  useEffect(() => {
    if (!isNew) {
      loadPost();
    }
  }, [slug]);

  const loadPost = async () => {
    try {
      const res = await fetch(`/api/blog/${slug}`);
      const data = await res.json();
      
      setFormData({
        slug: data.slug,
        title: data.title,
        description: data.description,
        content: data.content,
        featuredImage: data.featuredImage || '',
        tags: data.tags.join(', '),
        author: data.author || 'Michael Adeleye',
        readTime: data.readTime,
        published: data.published,
      });
    } catch (error) {
      console.error('Failed to load post:', error);
      alert('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', 'blog');

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setFormData(prev => ({ ...prev, featuredImage: data.url }));
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };

      const url = isNew ? '/api/blog' : `/api/blog/${slug}`;
      const method = isNew ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push('/admin');
      } else {
        const error = await res.json();
        alert(error.error || 'Failed to save post');
      }
    } catch (error) {
      console.error('Failed to save post:', error);
      alert('Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#151312] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#ef233c] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#151312]">
      <header className="border-b border-gray-800 bg-[#0a0a0a] sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <div>
              <h1 className="text-xl font-black text-white font-[family-name:var(--font-poppins)]">
                {isNew ? 'New Blog Post' : 'Edit Blog Post'}
              </h1>
            </div>
          </div>
          
          <button
            type="submit"
            form="blog-form"
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-[#ef233c] text-white rounded-lg hover:bg-[#d41f35] transition-colors font-medium disabled:opacity-50"
          >
            <Save size={18} />
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </header>

      <div className="px-6 py-8 max-w-4xl mx-auto">
        <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Slug (URL) *
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#ef233c] transition-colors"
                placeholder="my-blog-post"
                required
                disabled={!isNew}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Read Time *
              </label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#ef233c] transition-colors"
                placeholder="5min read"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#ef233c] transition-colors"
              placeholder="Enter post title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#ef233c] transition-colors resize-none"
              placeholder="Brief description of your post"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Featured Image
            </label>
            <div className="space-y-3">
              {formData.featuredImage && (
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-800">
                  <img 
                    src={formData.featuredImage} 
                    alt="Featured" 
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, featuredImage: '' })}
                    className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#ef233c] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-[#ef233c] file:text-white hover:file:bg-[#d41f35] file:cursor-pointer disabled:opacity-50"
              />
              {uploading && <p className="text-sm text-gray-400">Uploading...</p>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-300">
                Content * (Markdown supported)
              </label>
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm"
              >
                {showPreview ? (
                  <>
                    <Edit3 size={14} />
                    Edit
                  </>
                ) : (
                  <>
                    <Eye size={14} />
                    Preview
                  </>
                )}
              </button>
            </div>
            
            {showPreview ? (
              <div className="w-full min-h-[500px] px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white overflow-auto">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold text-white mt-4 mb-2">{children}</h3>,
                    p: ({ children }) => <p className="text-gray-300 mb-3">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-outside ml-6 space-y-2 my-4 text-gray-300">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-outside ml-6 space-y-2 my-4 text-gray-300">{children}</ol>,
                    li: ({ children }) => <li className="text-gray-300 pl-2">{children}</li>,
                    code: ({ className, children, ...props }: any) => {
                      const match = /language-(\w+)/.exec(className || '');
                      return match ? (
                        <pre className="bg-gray-900 rounded p-3 overflow-x-auto my-4 border border-gray-700">
                          <code className={className} {...props}>{children}</code>
                        </pre>
                      ) : (
                        <code className="bg-gray-800 px-1.5 py-0.5 rounded text-[#ef233c] font-mono text-sm" {...props}>
                          {children}
                        </code>
                      );
                    },
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-[#ef233c] pl-4 my-4 italic text-gray-400">
                        {children}
                      </blockquote>
                    ),
                    a: ({ children, href }) => (
                      <a href={href} className="text-[#ef233c] hover:underline">{children}</a>
                    ),
                  }}
                >
                  {formData.content || '*No content to preview*'}
                </ReactMarkdown>
              </div>
            ) : (
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#ef233c] transition-colors resize-none font-mono text-sm"
                placeholder="Write your post content here..."
                rows={20}
                required
              />
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#ef233c] transition-colors"
                placeholder="JavaScript, Web Development, Tutorial"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Author
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#ef233c] transition-colors"
                placeholder="Your name"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              className="w-5 h-5 bg-[#0a0a0a] border border-gray-800 rounded focus:ring-[#ef233c] focus:ring-2 text-[#ef233c]"
            />
            <label htmlFor="published" className="text-sm font-medium text-gray-300">
              Publish this post
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
