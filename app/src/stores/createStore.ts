/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
  // Todo: figure out is this is slowing down the app in dev mode
  return create(f)
  // return create(withMiddlewares(f))
}
