import { useEffect, useState } from 'react'
import { createPocketSmithApi, PocketSmithApi } from '@fire/pocketsmith-api'
import { usePluginStore } from 'stores'

export function usePocketsmithApi(): PocketSmithApi | null {
  const apiKey = usePluginStore((state) => state.pocketsmithApiKey)
  const [pocketsmithApi, setPocketsmithApi] = useState<PocketSmithApi | null>(null)

  useEffect(() => {
    const api = apiKey ? createPocketSmithApi(apiKey) : null
    setPocketsmithApi(api)
  }, [apiKey])

  return pocketsmithApi
}
