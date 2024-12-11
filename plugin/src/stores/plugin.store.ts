import { BarefootFirePluginSettings } from '../BarefootFire.types'
import { createStore } from './createStore'

type PluginState = BarefootFirePluginSettings & {
  lastCompletedReviewDate: string
}

type PluginActions = {
  setPocketsmithApiKey: (value: string) => void
  setLastCompletedReviewDate: (value: string) => void
}

export type PluginStore = PluginState & PluginActions

const initialState: PluginState = {
  pocketsmithApiKey: '',
  lastCompletedReviewDate: '2000-01-01',
}

export const usePluginStore = createStore<PluginStore>((setState: (newState: Partial<PluginState>) => void) => ({
  ...initialState,
  setPocketsmithApiKey: (value: string): void => setState({ pocketsmithApiKey: value }),
  setLastCompletedReviewDate: (value: string): void => setState({ lastCompletedReviewDate: value }),
}))
