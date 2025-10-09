import { getAllPosts, type BlogPost } from '@/lib/blog';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Ritam Bharat | Technology Insights & Business Tips',
  description: 'Latest insights on software development, business automation, and digital transformation for Indian businesses.',
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Blog</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Discover the latest insights on technology, business automation, and digital transformation 
            tailored for Indian businesses and entrepreneurs.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: BlogPost) => (
            <article
              key={post.slug}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="flex flex-col h-full">
                {/* Post Header */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-white text-sm line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* Post Meta */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm text-white">
                    <span className="font-medium">{post.author}</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center mt-3 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State (if no posts) */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-white mb-4">No Posts Yet</h3>
            <p className="text-white max-w-md mx-auto">
              We&apos;re working on some amazing content for you. Check back soon for insights 
              on technology and business automation!
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to stay updated?
          </h3>
          <p className="text-white mb-6">
            Follow our journey as we share insights, tips, and stories about building 
            technology solutions for Indian businesses.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
