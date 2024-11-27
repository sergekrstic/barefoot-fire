/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const isDevMode = false

export function withMiddlewares<S>(f: StateCreator<S>) {
  const stateWithImmer = immer(f as StateCreator<S, [['zustand/immer', never]]>)
  const stateWithPersist = persist(stateWithImmer, { name: 'pluginStore' })
  const stateWithDevtools = devtools(stateWithPersist, { enabled: isDevMode })
  return stateWithDevtools
}

export function createStore<S, P = unknown>(f: StateCreator<S & P>) {
  return create<S>()(withMiddlewares(f))
}
