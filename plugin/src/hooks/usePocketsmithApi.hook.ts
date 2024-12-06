import { useEffect, useRef } from 'react'
import { createPocketSmithApi, PocketSmithApi } from '@fire/pocketsmith-api'
import { usePluginStore } from 'stores'

export function usePocketsmithApi(): PocketSmithApi {
  const apiKey = usePluginStore((state) => state.pocketsmithApiKey)
  const pocketsmithApi = useRef<PocketSmithApi>(createPocketSmithApi(apiKey))

  useEffect(() => {
    if (!apiKey) throw new Error('No API key provided')
    pocketsmithApi.current = createPocketSmithApi(apiKey)
  }, [apiKey])

  return pocketsmithApi.current
}
