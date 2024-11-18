import { App, PluginSettingTab, Setting } from 'obsidian'

import { BarefootFirePlugin } from './BarefootFire.plugin'

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
            this.plugin.settings.pocketsmithApiKey = value
            await this.plugin.saveSettings()
          }),
      )
  }
}
