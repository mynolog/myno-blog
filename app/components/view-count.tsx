import { getViewsCount, incrementView } from 'queries/db'

interface ViewCountProps {
  slug: string
}

export async function ViewCount({ slug }: ViewCountProps) {
  await incrementView(slug)
  const views = await getViewsCount()
  const count = views.find((view) => view.slug === slug)?.count || 0

  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {count.toLocaleString()} views
    </p>
  )
}
