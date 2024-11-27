/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const isDevMode = false

export function withMiddlewares<S>(f: StateCreator<S>) {
  const stateWithImmerAdded = immer(f as StateCreator<S, [['zustand/immer', never]]>)
  const stateWithPersistAdded = persist(stateWithImmerAdded, { name: 'pluginStore' })
  const stateWithDevtoolsAdded = devtools(stateWithPersistAdded, { enabled: isDevMode })
  return stateWithDevtoolsAdded
}

export function createStore<S, P = unknown>(f: StateCreator<S & P>) {
  return create<S>()(withMiddlewares(f))
}
