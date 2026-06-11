import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
}

interface Props {
  posts: Post[]
}

export function LatestBlogPosts({ posts }: Props) {

  return (
    <section className="bg-slate-50 px-6 py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Writing</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Latest Articles</h2>
          </div>
          <Link href="/blog" className="text-sm font-bold uppercase tracking-widest border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors">
            View all →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="group rounded-2xl p-8 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all"
            >
              <div className="mb-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <Link href={`/blog/${post.slug}`} className="group-hover:text-blue-700 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <time className="text-sm font-semibold text-slate-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>

              {post.description && (
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {post.description}
                </p>
              )}

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-blue-50 text-blue-700 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              )}

              <div className="mt-8">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
                >
                  Read article
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
