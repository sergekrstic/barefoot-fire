import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { SavedSearch } from '@fire/pocketsmith-api'

import { usePocketsmithApi } from '../hooks'
import { USER_ID } from '../BarefootFire.defaults'

export function useSavedSearches(): UseQueryResult<SavedSearch[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['saved-searches'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.savedSearches.usersIdSavedSearchesGet({ id: USER_ID })).data
    },
  })
}
