import { StrictMode } from 'react'
import { Root, createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider, QueryKey } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { ItemView, WorkspaceLeaf } from 'obsidian'
// import { compress, decompress } from 'lz-string'

import { BarefootFireComponent } from './BarefootFire.component'
import { BAREFOOT_FIRE_VIEW_TYPE } from './BarefootFire.defaults'
import { BarefootFirePluginSettings } from './BarefootFire.types'
import { usePluginStore } from 'stores'

const doNotPersistQueries: QueryKey[] = []

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // gcTime: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  },
})

persistQueryClient({
  // @ts-ignore
  queryClient: queryClient,
  persister: createSyncStoragePersister({
    storage: window.localStorage,
    // serialize: (data) => compress(JSON.stringify(data)),
    // deserialize: (data) => JSON.parse(decompress(data)),
  }),
  maxAge: Infinity,
  hydrateOptions: {},
  dehydrateOptions: {
    shouldDehydrateQuery: ({ queryKey }) => {
      return !doNotPersistQueries.includes(queryKey)
    },
  },
})

export class BarefootFireContainer extends ItemView {
  root: Root | null = null
  settings: BarefootFirePluginSettings

  constructor(leaf: WorkspaceLeaf, settings: BarefootFirePluginSettings) {
    super(leaf)
    this.settings = settings
    usePluginStore.setState({ ...settings })
  }

  getViewType(): string {
    return BAREFOOT_FIRE_VIEW_TYPE
  }

  getDisplayText(): string {
    return 'Obsidian F.I.R.E.'
  }

  async onOpen(): Promise<void> {
    this.root = createRoot(this.containerEl.children[1])
    this.root.render(
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <BarefootFireComponent />
        </QueryClientProvider>
      </StrictMode>,
    )
  }

  async onClose(): Promise<void> {
    this.root?.unmount()
  }
}
