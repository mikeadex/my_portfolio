import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getBlogPost(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/blog/${slug}`, {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    return null;
  }
  
  return res.json();
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#151312]">
      <main className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <article className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/#thoughts"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ef233c] transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Blog</span>
          </Link>

          {/* Header */}
          <header className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-[family-name:var(--font-poppins)]">
              {post.title}
            </h1>

            {post.featuredImage && (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full max-h-96 object-cover"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} style={{ color: '#ef233c' }} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} style={{ color: '#ef233c' }} />
                <span>{post.readTime}</span>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">{post.author}</span>
                </div>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border-2"
                    style={{
                      borderColor: '#ef233c',
                      color: '#ef233c',
                      backgroundColor: 'rgba(239, 35, 60, 0.1)'
                    }}
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-300 leading-relaxed space-y-6"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8'
              }}
            >
              {post.content.split('\n\n').map((paragraph: string, index: number) => {
                // Handle headings
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-4xl font-black text-white mt-12 mb-6 font-[family-name:var(--font-poppins)]">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-white mt-10 mb-4 font-[family-name:var(--font-poppins)]">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-3 font-[family-name:var(--font-poppins)]">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                
                // Handle lists
                if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                  const items = paragraph.split('\n').filter((line: string) => line.startsWith('- ') || line.startsWith('* '));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-6">
                      {items.map((item: string, i: number) => (
                        <li key={i} className="text-gray-300">
                          {item.replace(/^[*-] /, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                // Handle numbered lists
                if (/^\d+\./.test(paragraph)) {
                  const items = paragraph.split('\n').filter((line: string) => /^\d+\./.test(line));
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 my-6">
                      {items.map((item: string, i: number) => (
                        <li key={i} className="text-gray-300">
                          {item.replace(/^\d+\. /, '')}
                        </li>
                      ))}
                    </ol>
                  );
                }

                // Handle code blocks
                if (paragraph.includes('```')) {
                  const code = paragraph.replace(/```\w*\n?/g, '').trim();
                  return (
                    <pre key={index} className="bg-gray-900 rounded-lg p-4 overflow-x-auto my-6 border-2" style={{ borderColor: '#ef233c' }}>
                      <code className="text-sm text-gray-300">{code}</code>
                    </pre>
                  );
                }
                
                // Regular paragraphs
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  );
                }
                
                return null;
              })}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t-2" style={{ borderColor: '#353334' }}>
            <Link 
              href="/#thoughts"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: '#ef233c',
                color: '#ffffff'
              }}
            >
              <ArrowLeft size={20} />
              Back to All Posts
            </Link>
          </footer>
        </article>
      </main>
    </div>
  );
}
