import { memo } from 'react'
import { useListLabelsInUser } from 'queries'
import { USER_ID } from '../BarefootFire.defaults'

export const LabelList = memo(function LabelList(): JSX.Element {
  const { data: labels, isPending } = useListLabelsInUser({ id: USER_ID })

  if (isPending) return <p>Loading...</p>

  if (!labels) return <p>No labels found</p>

  return (
    <>
      {labels.map((label) => (
        <div key={label}>{label}</div>
      ))}
    </>
  )
})
