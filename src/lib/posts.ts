import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const postsDir = path.join(process.cwd(), 'posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
}

export interface Post extends PostMeta {
  contentHtml: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))

  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
    const { data } = matter(raw)

    return {
      slug,
      title: String(data.title ?? slug),
      date: data.date ?? '',
      description: data.description ?? '',
      tags: data.tags ?? [],
    } as PostMeta
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)

  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content)

  const contentHtml = processed.toString()

  return {
    slug,
    title: String(data.title ?? slug),
    date: data.date ?? '',
    description: data.description ?? '',
    tags: data.tags ?? [],
    contentHtml,
  }
}
