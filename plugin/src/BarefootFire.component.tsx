import { useEffect, useState } from 'react'

// Todo: Figure out to import local pnpm package
import { createPocketSmithApi } from '../../packages/pocketsmith-api/src/generated-api-2-refactored/index'
// import { createPocketSmithApi } from "@fire/pocketsmith-api";
//
import { EyeIcon, EyeOffIcon } from 'assets'
import { BarefootFirePluginSettings } from './BarefootFire.types'

export interface BarefootFireComponentProps {
  settings: BarefootFirePluginSettings
}

export function BarefootFireComponent({ settings }: BarefootFireComponentProps): JSX.Element {
  const [showContent, setShowContent] = useState(false)
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      const api = createPocketSmithApi(settings.pocketsmithApiKey)
      const userId = 85521
      const response = await api.categories.usersIdCategoriesGet(userId)
      const categoryTitles = response.data.map((category) => category.title || '')
      setCategories(categoryTitles)
    }

    void fetchCategories()
  }, [])

  return (
    <div className="fire-container">
      <div className="fire-title">
        <h4>Barefoot FIRE</h4>
        <button onMouseDown={(): void => setShowContent(true)} onMouseUp={(): void => setShowContent(false)}>
          {showContent ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {showContent && (
        <div className="fire-content">
          <p>
            Income: <b>$1000</b>
          </p>
          <p>
            Emergency fund: <b>$1000</b>
          </p>
          <p>
            Expense: <b>$1000</b>
          </p>
          <p>
            Super: <b>$1000</b>
          </p>
          <p>
            Deposit: <b>$100,000,000</b>
          </p>
          {categories.length > 0 && (
            <>
              <h4>Categories</h4>
              <ul>
                {categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}
