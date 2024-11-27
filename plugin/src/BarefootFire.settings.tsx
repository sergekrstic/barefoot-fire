import { App, PluginSettingTab, Setting } from 'obsidian'

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

    containerEl.createEl('h2', { text: 'Barefoot F.I.R.E. Settings' })

    const pocketSmithApiKeyDescription = document.createDocumentFragment()
    pocketSmithApiKeyDescription.append(
      'The API key to access the Pocketsmith API.',
      pocketSmithApiKeyDescription.createEl('br'),
      pocketSmithApiKeyDescription.createEl('br'),
      'Visit ',
      pocketSmithApiKeyDescription.createEl('a', {
        href: 'https://github.com/phibr0/obsidian-dictionary#privacy',
        text: 'Pocketsmith',
      }),
      ' to generate a new key.',
      pocketSmithApiKeyDescription.createEl('br'),
      'Click ',
      pocketSmithApiKeyDescription.createEl('b', {
        text: '[User Icon] > [Security & integrations] > [Manage developer keys] > [CREATE KEY]',
      }),
      '.',
      pocketSmithApiKeyDescription.createEl('br'),
      pocketSmithApiKeyDescription.createEl('br'),
      pocketSmithApiKeyDescription.createEl('b', { text: 'Note: ' }),
      pocketSmithApiKeyDescription.createEl('i', {
        text: 'This key is stored in your Obsidian vault and is not shared with anyone.',
      }),
    )

    new Setting(containerEl)
      .setName('Pocketsmith API Key')
      .setDesc(pocketSmithApiKeyDescription)
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
