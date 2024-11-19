import { createPocketSmithApi, PocketSmithApi } from '@fire/pocketsmith-api'

export function usePocketsmithApi(apiKey: string): PocketSmithApi {
  const pocketsmithApi = createPocketSmithApi(apiKey)

  return pocketsmithApi
}
