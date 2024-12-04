import { Fragment, memo, useState } from 'react'
import { Category } from '@fire/pocketsmith-api'
import { ChevronDownIcon, ChevronRightIcon } from 'assets'
import { useCategories } from 'queries'

export const CategoryList = memo(function CategoryList(): JSX.Element {
  const { data: categories, isLoading } = useCategories()

  if (isLoading) return <p>Loading...</p>

  if (!categories) return <p>No categories found</p>

  return <CategoryTree categories={categories} level={0} />
})

interface CategoryTreeProps {
  categories: Category[]
  level: number
}

function CategoryTree({ categories, level }: CategoryTreeProps): JSX.Element {
  const [showNested, setShowNested] = useState<Record<number, boolean>>({})

  const toggleNested = (id: number): void => {
    setShowNested({ ...showNested, [id]: !showNested[id] })
  }

  return (
    <Fragment>
      {categories.map((parent) => {
        const isParent = parent.children && parent.children.length > 0

        return (
          <div key={parent.id} style={{ padding: `8px 0px 0px` }}>
            {/* Display the parent */}
            {isParent && (
              <div style={{ display: 'flex', flexDirection: 'row' }} onClick={() => toggleNested(parent.id!)}>
                <div style={{ paddingLeft: `${(level - 0) * 16}px` }} />
                {showNested[parent.id!] ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
                <div style={{ paddingLeft: '4px' }}>{parent.title}</div>
              </div>
            )}
            {/* Display the children */}
            {isParent && (
              <div style={{ display: showNested[parent.id!] ? 'block' : 'none' }}>
                {parent.children && <CategoryTree categories={parent.children} level={level + 1} />}
              </div>
            )}
            {/* Display the child */}
            {!isParent && <div style={{ paddingLeft: `${(level + 1) * (16 + 4)}px` }}>{parent.title}</div>}
          </div>
        )
      })}
    </Fragment>
  )
}
