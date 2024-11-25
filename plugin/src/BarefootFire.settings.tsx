import { App, PluginSettingTab, Setting } from 'obsidian'
// import { unstable_batchedUpdates } from 'react-dom'

import { BarefootFirePlugin } from './BarefootFire.plugin'
import { useSettingsStore } from 'stores'

export class BarefootFireSettingTab extends PluginSettingTab {
  plugin: BarefootFirePlugin

  constructor(app: App, plugin: BarefootFirePlugin) {
    super(app, plugin)
    this.plugin = plugin
  }

  display(): void {
    const { containerEl } = this

    containerEl.empty()

    new Setting(containerEl)
      .setName('Pocketsmith API Key')
      .setDesc('The API key to access the Pocketsmith API.')
      .addText((text) =>
        text
          .setPlaceholder('Add your API key here')
          .setValue(this.plugin.settings.pocketsmithApiKey)
          .onChange(async (value) => {
            useSettingsStore.setState({ pocketsmithApiKey: value })
            this.plugin.settings.pocketsmithApiKey = value
            await this.plugin.saveSettings()
          }),
      )
  }
}
