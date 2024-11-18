import { ItemView, WorkspaceLeaf } from 'obsidian'

export const VIEW_TYPE_EXAMPLE = 'simple-view'

export class SimpleView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf)
  }

  getViewType(): string {
    return VIEW_TYPE_EXAMPLE
  }

  getDisplayText(): string {
    return 'Simple view'
  }

  async onOpen(): Promise<void> {
    const container = this.containerEl.children[1]
    container.empty()
    container.createEl('h4', { text: 'Simple view' })
  }

  async onClose(): Promise<void> {
    // Nothing to clean up.
  }
}
