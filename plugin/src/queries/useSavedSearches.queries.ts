import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { SavedSearch, SavedSearchesApiUsersIdSavedSearchesGetRequest } from '@fire/pocketsmith-api'

import { usePocketsmithApi } from 'hooks'

export function useListSavedSearchesInUser(
  args: SavedSearchesApiUsersIdSavedSearchesGetRequest,
): UseQueryResult<SavedSearch[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-saved-searches-in-user', args],
    queryFn: async () => (await api.savedSearches.usersIdSavedSearchesGet(args)).data,
  })
}
