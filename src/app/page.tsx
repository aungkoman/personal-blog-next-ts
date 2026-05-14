import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      <section className="intro">
        <h1>Writing</h1>
        <p>Notes on software, systems, and the web.</p>
      </section>

      <ul className="post-list">
        {posts.map(post => (
          <li key={post.slug} className="post-item">
            <h2 className="post-item-title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            {post.description && (
              <p className="post-item-desc">{post.description}</p>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}

            <time className="post-item-date" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </li>
        ))}
      </ul>
    </>
  )
}
