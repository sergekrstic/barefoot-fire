import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { CurrenciesApiCurrenciesIdGetRequest, Currency } from '@fire/pocketsmith-api'
import { usePocketsmithApi } from 'hooks'

// Todo: test this function
export function useListCurrencies(): UseQueryResult<Currency[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['list-currencies'],
    queryFn: async () => (await api.currencies.currenciesGet()).data,
  })
}

// Todo: test this function
export function useGetCurrency(args: CurrenciesApiCurrenciesIdGetRequest): UseQueryResult<Currency, Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['get-currencies', args],
    queryFn: async () => (await api.currencies.currenciesIdGet(args)).data,
  })
}
