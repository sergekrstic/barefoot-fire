import { BarefootFirePluginSettings } from '../BarefootFire.types'
import { createStore } from './createStore'

type SettingsState = BarefootFirePluginSettings

type SettingsActions = {
  setPocketsmithApiKey: (value: string) => void
}

export type SettingsStore = SettingsState & SettingsActions

const initialState: SettingsState = {
  pocketsmithApiKey: '',
}

export const useSettingsStore = createStore<SettingsStore>((setState: (newState: Partial<SettingsState>) => void) => ({
  ...initialState,
  setPocketsmithApiKey: (value: string): void => setState({ pocketsmithApiKey: value }),
}))
