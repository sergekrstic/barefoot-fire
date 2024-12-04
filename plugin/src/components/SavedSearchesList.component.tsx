import { memo } from 'react'
import { useSavedSearches } from 'queries'

export const SavedSearchesList = memo(function SavedSearchesList(): JSX.Element {
  const { data: savedSearches, isPending } = useSavedSearches()

  if (isPending) return <p>Loading...</p>

  if (!savedSearches) return <p>No saved searches found</p>

  return (
    <div>
      {savedSearches.map((savedSearch) => (
        <li key={savedSearch.id}>{savedSearch.title}</li>
      ))}
    </div>
  )
})
