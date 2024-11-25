import { useLabels } from 'queries'

export function LabelList(): JSX.Element {
  const { data: labels, isLoading } = useLabels()

  return (
    <>
      <h5>Labels</h5>
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
    </>
  )
}
