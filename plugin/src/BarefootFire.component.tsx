import { useState } from 'react'

import { EyeIcon, EyeOffIcon } from 'assets'
import { AccountList } from 'components'
// import { BucketListComponent } from 'components'
// import { LabelList } from 'components'
// import { CategoryList } from 'components'
// import { CategoryRuleList } from 'components'
import { ConfigureApiKey } from 'components'
import { usePluginStore } from 'stores'

export function BarefootFireComponent(): JSX.Element {
  const apiKey = usePluginStore((state) => state.pocketsmithApiKey)
  const [showContent, setShowContent] = useState(true)

  if (!apiKey) {
    return <ConfigureApiKey />
  }

  return (
    <div className="fire-container">
      <div className="fire-title">
        <h4>Barefoot FIRE</h4>
        {/* <button onMouseDown={(): void => setShowContent(true)} onMouseUp={(): void => setShowContent(false)}> */}
        <button onClick={(): void => setShowContent(!showContent)}>{showContent ? <EyeOffIcon /> : <EyeIcon />}</button>
      </div>
      {showContent && (
        <div className="fire-content">
          <AccountList />
          {/* <BucketListComponent /> */}
          {/* <CategoryList /> */}
          {/* <CategoryRuleList /> */}
          {/* <LabelList /> */}
        </div>
      )}
    </div>
  )
}
