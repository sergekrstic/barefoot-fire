import { memo } from 'react'
import { Category } from '@fire/pocketsmith-api'

import { CollapsibleTree } from 'components'
import { useCategories } from 'queries'

export const CategoryList = memo(function CategoryList(): JSX.Element {
  const { data: categories, isPending } = useCategories()

  if (isPending) return <p>Loading...</p>

  if (!categories) return <p>No categories found</p>

  return (
    <CollapsibleTree
      tree={categories}
      renderCollapsibleItemContent={(item: Category) => <div>{item.title}</div>}
      renderLeafItemContent={(item: Category) => <div>{item.title}</div>}
    />
  )
})
