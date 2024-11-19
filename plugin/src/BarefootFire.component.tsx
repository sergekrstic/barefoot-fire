import { useState } from 'react'

import { EyeIcon, EyeOffIcon } from 'assets'
import { useCategories, usePocketsmithApi } from 'hooks'

import { BarefootFirePluginSettings } from './BarefootFire.types'

export interface BarefootFireComponentProps {
  settings: BarefootFirePluginSettings
}

export function BarefootFireComponent({ settings }: BarefootFireComponentProps): JSX.Element {
  const [showContent, setShowContent] = useState(false)
  const pocketsmithApi = usePocketsmithApi(settings.pocketsmithApiKey)
  const { data: categories } = useCategories(pocketsmithApi)

  return (
    <div className="fire-container">
      <div className="fire-title">
        <h4>Barefoot FIRE</h4>
        <button onMouseDown={(): void => setShowContent(true)} onMouseUp={(): void => setShowContent(false)}>
          {showContent ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {showContent && categories && (
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
                  <li key={category.id}>{category.title}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}
