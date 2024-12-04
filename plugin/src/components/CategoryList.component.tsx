import { memo } from 'react'
import { Category } from '@fire/pocketsmith-api'
import { useCategories } from 'queries'
import { CollapsibleTree } from './CollapsibleTree.component'

export const CategoryList = memo(function CategoryList(): JSX.Element {
  const { data: categories, isLoading } = useCategories()

  if (isLoading) return <p>Loading...</p>

  if (!categories) return <p>No categories found</p>

  return (
    <CollapsibleTree
      tree={categories}
      renderCollapsibleItemContent={(item: Category) => <div>{item.title}</div>}
      renderLeafItemContent={(item: Category) => <div>{item.title}</div>}
    />
  )
})
