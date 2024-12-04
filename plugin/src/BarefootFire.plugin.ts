import { normalizePath, Plugin, WorkspaceLeaf } from 'obsidian'

import { BarefootFireContainer } from './BarefootFire.container'
import { BarefootFireSettingTab } from './BarefootFire.settings'
import { BarefootFirePluginSettings, PluginCache } from './BarefootFire.types'
import { BAREFOOT_FIRE_VIEW_TYPE, DEFAULT_SETTINGS, DEFAULT_CACHE } from './BarefootFire.defaults'
import { createBarefootFireStatusBar } from './BarefootFire.statusbar'

export class BarefootFirePlugin extends Plugin {
  settings: BarefootFirePluginSettings
  // statusbarItem: HTMLElement
  cache: PluginCache

  async onload(): Promise<void> {
    await Promise.all([this.loadSettings(), this.loadCache()])

    this.registerView(BAREFOOT_FIRE_VIEW_TYPE, (leaf) => new BarefootFireContainer(leaf, this.settings))

    this.addRibbonIcon('flame', 'Barefoot F.I.R.E.', () => {
      this.activateView()
    })

    this.addCommand({
      id: 'barefoot-fire-open-view',
      name: 'Open Barefoot FIRE dashboard',
      callback: async () => {
        await this.activateView()
      },
      hotkeys: [{ modifiers: ['Mod', 'Shift'], key: 'b' }],
    })

    // const item = this.addStatusBarItem()
    // item.createEl('span', { text: '🔥' })

    // this.statusbarItem = this.addStatusBarItem()
    // createBarefootFireStatusBar(this.statusbarItem)

    const statusbarItem = this.addStatusBarItem()
    createBarefootFireStatusBar(statusbarItem)

    this.addSettingTab(new BarefootFireSettingTab(this.app, this))
  }

  async onunload(): Promise<void> {}

  async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings)
  }

  async loadCache(): Promise<void> {
    this.cache = Object.assign({}, DEFAULT_CACHE, await this.loadCacheFromDisk())
  }

  async loadCacheFromDisk(): Promise<PluginCache> {
    const path = normalizePath(`${this.manifest.dir}/cache.json`)
    if (!(await this.app.vault.adapter.exists(path))) {
      await this.app.vault.adapter.write(path, '{}')
    }
    return JSON.parse(await this.app.vault.adapter.read(path)) as PluginCache
  }

  async saveCache(): Promise<void> {
    await this.app.vault.adapter.write(normalizePath(`${this.manifest.dir}/cache.json`), JSON.stringify(this.cache))
  }

  async activateView(): Promise<void> {
    const { workspace } = this.app

    let leaf: WorkspaceLeaf | null = null
    const leaves = workspace.getLeavesOfType(BAREFOOT_FIRE_VIEW_TYPE)

    if (leaves.length > 0) {
      // A leaf with our view already exists, use that
      leaf = leaves[0]
    } else {
      // Our view could not be found in the workspace, create a new leaf in the right sidebar
      leaf = workspace.getRightLeaf(false)
      await leaf?.setViewState({ type: BAREFOOT_FIRE_VIEW_TYPE, active: true })
    }

    // "Reveal" the leaf in case it is in a collapsed sidebar
    if (leaf) workspace.revealLeaf(leaf)
  }
}
