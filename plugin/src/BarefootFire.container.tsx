import { StrictMode } from 'react'
import { Root, createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ItemView, WorkspaceLeaf } from 'obsidian'

import { BarefootFireComponent } from './BarefootFire.component'
import { BAREFOOT_FIRE_VIEW_TYPE } from './BarefootFire.defaults'
import { BarefootFirePluginSettings } from './BarefootFire.types'
import { useSettingsStore } from 'stores'

const queryClient = new QueryClient()

export class BarefootFireContainer extends ItemView {
  root: Root | null = null
  settings: BarefootFirePluginSettings

  constructor(leaf: WorkspaceLeaf, settings: BarefootFirePluginSettings) {
    super(leaf)
    this.settings = settings
    useSettingsStore.setState({ ...settings })
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
