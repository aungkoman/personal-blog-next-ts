import { getAllPosts, getPost } from '@/lib/posts'
import type { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug)

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <Link href="/" className="back-link">
        ← All posts
      </Link>

      <article>
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <time dateTime={post.date}>{formattedDate}</time>
            {post.tags && post.tags.length > 0 && (
              <div className="post-tags" style={{ margin: 0 }}>
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </>
  )
}
