import { notFound } from 'next/navigation'
import { BlogDetailPage } from '@/components/blog/blog-detail-page'
import { blogEntries, getBlogEntry } from '@/lib/blog-data'

export function generateStaticParams() {
  return blogEntries.map((entry) => ({ slug: entry.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getBlogEntry(slug)

  if (!entry) notFound()

  return <BlogDetailPage entry={entry} />
}
