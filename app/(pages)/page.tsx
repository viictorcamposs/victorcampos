import { compareDesc } from 'date-fns'
import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

import ListArticles from '../components/ListArticles'
import Header from '../components/Header'

export const metadata = {
  keywords: ['nextjs', 'blog', 'react', 'typescript', 'development', 'tech', 'career'],
  openGraph: {
    images: '/og?title=Home'
  },
  twitter: {
    images: '/og?title=Home'
  }
}

export default function Home() {
  const posts: Post[] = allPosts.sort((a, b) =>
    compareDesc(new Date(a.releaseDate), new Date(b.releaseDate))
  )

  return (
    <>
      <Header />

      <main className="w-full max-w-[680px] mx-auto px-5 min-[375px]:px-7 md:px-0">
        <ListArticles articles={posts} />
      </main>
    </>
  )
}
