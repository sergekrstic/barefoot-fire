import { StateCreator, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const isDevMode = false

export function withMiddlewares<S>(f: StateCreator<S>) {
  const stateWithImmerAdded = immer(f as StateCreator<S, [['zustand/immer', never]]>)
  const stateWithPersistAdded = persist(stateWithImmerAdded, { name: 'appStore' })
  const stateWithDevtoolsAdded = devtools(stateWithPersistAdded, { enabled: isDevMode })
  return stateWithDevtoolsAdded
}

export function createStore<S>(f: StateCreator<S>) {
  return create(withMiddlewares(f))
}
