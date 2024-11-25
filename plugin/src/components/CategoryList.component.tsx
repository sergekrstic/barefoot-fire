import { Fragment, useState } from 'react'
import { Category } from '@fire/pocketsmith-api'
import { useCategories } from 'queries'

export function CategoryList(): JSX.Element {
  const { data: categories, isLoading } = useCategories()

  return (
    <>
      <h5>Categories</h5>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>{categories ? <CategoryTree categories={categories} /> : <p>No categories found</p>}</>
      )}
    </>
  )
}

interface CategoryTreeProps {
  categories: Category[]
}

function CategoryTree({ categories }: CategoryTreeProps): JSX.Element {
  const [showNested, setShowNested] = useState<Record<number, boolean>>({})

  const toggleNested = (id: number): void => {
    setShowNested({ ...showNested, [id]: !showNested[id] })
  }

  return (
    <div style={{ paddingLeft: '16px' }}>
      {categories.map((parent) => {
        const isParent = parent.children && parent.children.length > 0
        return (
          <Fragment key={parent.id}>
            {!isParent && <div>{parent.title}</div>}
            {isParent && <div onClick={() => toggleNested(parent.id!)}>{parent.title}</div>}
            <div style={{ display: showNested[parent.id!] ? 'block' : 'none' }}>
              {parent.children && <CategoryTree categories={parent.children} />}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
