import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { TimeZone } from '@fire/pocketsmith-api'
import { usePocketsmithApi } from 'hooks'

// Todo: test this function
export function useListTimeZones(): UseQueryResult<TimeZone[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-time-zones'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.timeZones.timeZonesGet()).data
    },
  })
}
