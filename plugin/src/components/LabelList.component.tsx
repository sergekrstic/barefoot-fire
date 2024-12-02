import { memo } from 'react'
import { useLabels } from 'queries'

export const LabelList = memo(function LabelList(): JSX.Element {
  const { data: labels, isLoading } = useLabels()

  if (isLoading) return <p>Loading...</p>

  if (!labels) return <p>No labels found</p>

  return (
    <>
      {labels.map((label) => (
        <div key={label}>{label}</div>
      ))}
    </>
  )
})
