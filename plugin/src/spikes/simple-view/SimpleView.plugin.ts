import { Plugin, WorkspaceLeaf } from 'obsidian'
import { SimpleView, VIEW_TYPE_EXAMPLE } from './SimpleView.container'

export class SimpleViewPlugin extends Plugin {
  async onload(): Promise<void> {
    this.registerView(VIEW_TYPE_EXAMPLE, (leaf) => new SimpleView(leaf))

    this.addRibbonIcon('dice', 'Activate view', () => {
      this.activateView()
    })
  }

  async onunload(): Promise<void> {}

  async activateView(): Promise<void> {
    const { workspace } = this.app

    let leaf: WorkspaceLeaf | null = null
    const leaves = workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)

    if (leaves.length > 0) {
      // A leaf with our view already exists, use that
      leaf = leaves[0]
    } else {
      // Our view could not be found in the workspace, create a new leaf
      // in the right sidebar for it
      leaf = workspace.getRightLeaf(false)
      await leaf?.setViewState({ type: VIEW_TYPE_EXAMPLE, active: true })
    }

    // "Reveal" the leaf in case it is in a collapsed sidebar
    if (leaf) workspace.revealLeaf(leaf)
  }
}
