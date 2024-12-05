import { memo } from 'react'
import { useListSavedSearchesInUser } from 'queries'
import { USER_ID } from '../BarefootFire.defaults'

export const SavedSearchesList = memo(function SavedSearchesList(): JSX.Element {
  const { data: savedSearches, isPending } = useListSavedSearchesInUser({ id: USER_ID })

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
