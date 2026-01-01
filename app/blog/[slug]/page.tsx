import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author || 'Michael Adeleye' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author || 'Michael Adeleye'],
      tags: post.tags,
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD structured data for blog post
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.featuredImage,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author || 'Michael Adeleye',
      url: 'https://mikeadeleye.dev',
    },
    publisher: {
      '@type': 'Person',
      name: 'Michael Adeleye',
      url: 'https://mikeadeleye.dev',
    },
    keywords: post.tags?.join(', '),
    articleBody: post.content,
    url: `https://mikeadeleye.dev/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mikeadeleye.dev/blog/${slug}`,
    },
  };

  return (
    <div className=\"min-h-screen bg-[#151312]\">
      <script
        type=\"application/ld+json\"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-[family-name:var(--font-poppins)]" itemProp="headline">
              {post.title}
            </h1>

            {post.featuredImage && (
              <div className="mb-6 rounded-lg overflow-hidden" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full max-h-96 object-cover"
                  itemProp="url"
                />
                <meta itemProp="caption" content={post.title} />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} style={{ color: '#ef233c' }} />
                <time dateTime={post.createdAt} itemProp="datePublished">{post.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} style={{ color: '#ef233c' }} />
                <span itemProp="timeRequired">{post.readTime}</span>
              </div>
              {post.author && (
                <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span className="font-medium text-white" itemProp="name">{post.author}</span>
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
                    itemProp="keywords"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none" itemProp="articleBody">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-black text-white mt-12 mb-6 font-[family-name:var(--font-poppins)]">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-white mt-10 mb-4 font-[family-name:var(--font-poppins)]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-white mt-8 mb-3 font-[family-name:var(--font-poppins)]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-300 mb-4 text-lg leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-outside ml-6 space-y-3 my-6 text-gray-300">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside ml-6 space-y-3 my-6 text-gray-300">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-300 pl-2">{children}</li>
                ),
                code: ({ className, children, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                    <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto my-6 border-2" style={{ borderColor: '#ef233c' }}>
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className="bg-gray-800 px-2 py-1 rounded text-[#ef233c] font-mono text-sm" {...props}>
                      {children}
                    </code>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 pl-4 my-6 italic text-gray-400" style={{ borderColor: '#ef233c' }}>
                    {children}
                  </blockquote>
                ),
                a: ({ children, href }) => (
                  <a 
                    href={href}
                    className="text-[#ef233c] hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-bold">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="text-gray-200 italic">{children}</em>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
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
