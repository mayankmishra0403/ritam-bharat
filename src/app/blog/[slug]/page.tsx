import { getPostBySlug, getAllPostSlugs, type BlogPost } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Ritam Bharat',
    };
  }

  return {
    title: `${post.title} - Ritam Bharat Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Process markdown content
  const processedContent = await remark()
    .use(html)
    .process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-24">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.description && (
              <p className="text-xl text-white mb-8 leading-relaxed">
                {post.description}
              </p>
            )}

            <div className="flex items-center justify-center space-x-6 text-white text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-12 shadow-2xl">
            <div 
              className="prose prose-lg prose-invert max-w-none
              prose-headings:text-white prose-headings:font-bold prose-headings:drop-shadow-sm
              prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:text-white
              prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-white prose-h2:font-bold
              prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-white prose-h3:font-bold
              prose-p:text-white prose-p:leading-relaxed prose-p:mb-6 prose-p:drop-shadow-sm
              prose-strong:text-white prose-strong:font-semibold prose-strong:drop-shadow-sm
              prose-em:text-white prose-em:drop-shadow-sm
              prose-ul:text-white prose-ol:text-white
              prose-li:mb-2 prose-li:leading-relaxed prose-li:text-white prose-li:drop-shadow-sm
              prose-blockquote:border-l-4 prose-blockquote:border-white 
              prose-blockquote:bg-white/15 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
              prose-blockquote:text-white prose-blockquote:italic prose-blockquote:drop-shadow-sm
              prose-code:text-yellow-300 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:drop-shadow-sm
              prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg
              prose-a:text-white prose-a:underline hover:prose-a:text-gray-200 prose-a:drop-shadow-sm
              prose-hr:border-gray-600 prose-hr:my-12"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help with Your Business?
            </h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              At Ritam Bharat, we specialize in creating custom software solutions that help Indian businesses 
              grow and scale efficiently. Let&apos;s discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
