import { memo, useState } from 'react'

import { EyeIcon, EyeOffIcon } from 'assets'
import { AccountList, BucketList, CategoryList, CategoryRuleList, ConfigureApiKey, LabelList } from 'components'
import { usePluginStore } from 'stores'

export const BarefootFireComponent = memo(function BarefootFireComponent(): JSX.Element {
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
          <BucketList />
          <CategoryList />
          <CategoryRuleList />
          <LabelList />
        </div>
      )}
    </div>
  )
})
