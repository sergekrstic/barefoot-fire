import { BarefootFirePluginSettings } from '../BarefootFire.types'
import { createStore } from './createStore'

type PluginState = BarefootFirePluginSettings

type PluginActions = {
  setPocketsmithApiKey: (value: string) => void
}

export type PluginStore = PluginState & PluginActions

const initialState: PluginState = {
  pocketsmithApiKey: '',
}

export const usePluginStore = createStore<PluginStore>((setState: (newState: Partial<PluginState>) => void) => ({
  ...initialState,
  setPocketsmithApiKey: (value: string): void => setState({ pocketsmithApiKey: value }),
}))
