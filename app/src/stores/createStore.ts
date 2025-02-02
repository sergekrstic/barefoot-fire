/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { StateCreator, create } from 'zustand'
// import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

// const isDevMode = false

export function withMiddlewares<S>(f: StateCreator<S>) {
  const stateWithImmerAdded = immer(f as StateCreator<S, [['zustand/immer', never]]>)
  // const stateWithPersistAdded = persist(stateWithImmerAdded, { name: 'appStore' })
  // const stateWithDevtoolsAdded = devtools(stateWithPersistAdded, { enabled: isDevMode })
  return stateWithImmerAdded
}

export function createStore<S>(f: StateCreator<S>) {
  // Todo: figure out is this is slowing down the app in dev mode
  // - Is it immer that is slowing down the app?
  // - Is it the devtools that is slowing down the app?
  // - Is it the persist that is slowing down the app?
  // - Could I use a zustand middleware that that persists at periodic intervals?
  // - Perhaps it is best to use immer directly in the store.
  // - How do I create computed properties in zustand? Use middleware, or calculate it directly?
  // return create(withMiddlewares(f))
  return create(f)
}
