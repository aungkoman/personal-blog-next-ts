import { getAllPosts } from '../../lib/posts'
import HomeClient from './page-client'

export default function Home() {
  const posts = getAllPosts().slice(0, 4)
  return <HomeClient latestPosts={posts} />
}
