import { memo } from 'react'
import { Category } from '@fire/pocketsmith-api'

import { CollapsibleTree } from 'components'
import { useListCategoriesInUser } from 'queries'

import { USER_ID } from '../BarefootFire.defaults'

export const CategoryList = memo(function CategoryList(): React.JSX.Element {
  const { data: categories, isPending } = useListCategoriesInUser({ id: USER_ID })

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
