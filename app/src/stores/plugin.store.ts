import { createStore } from './createStore'

interface AppState {
  selectedBudgetId: string | null
}

type AppActions = {
  setSelectedBudgetId: (value: string | null) => void
}

export type PluginStore = AppState & AppActions

const initialState: AppState = {
  selectedBudgetId: null,
}

export const usePluginStore = createStore<PluginStore>((setState: (newState: Partial<AppState>) => void) => ({
  ...initialState,
  setSelectedBudgetId: (value: string | null) => setState({ selectedBudgetId: value }),
}))
