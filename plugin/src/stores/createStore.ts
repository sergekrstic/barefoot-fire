/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { create, StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const isDevMode = true

export function withMiddlewares<S>(f: StateCreator<S>) {
  return devtools(immer(f as StateCreator<S, [['zustand/immer', never]]>), {
    enabled: isDevMode,
  })
}

export function createStore<S, P = unknown>(f: StateCreator<S & P>) {
  return create<S>()(withMiddlewares(f))
}
