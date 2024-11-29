import { memo } from 'react'
import { useLabels } from 'queries'
import { CollapsibleSection } from 'components'

export const LabelList = memo(function LabelList(): JSX.Element {
  const { data: labels, isLoading } = useLabels()

  console.log('response =>', { isLoading, labels })

  return (
    <CollapsibleSection title="Labels" as="h5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {labels ? (
            <>
              {labels.map((label) => (
                <div key={label}>{label}</div>
              ))}
            </>
          ) : (
            <p>No labels found</p>
          )}
        </>
      )}
    </CollapsibleSection>
  )
  //
})
