/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-refresh/only-export-components */
import { type ReactNode, createContext, useContext, useRef } from 'react'

import { StoreApi, createStore } from 'zustand'
import { shallow } from 'zustand/shallow'
import { useStoreWithEqualityFn } from 'zustand/traditional'

import { type CounterStore, counterStoreCreator } from './counter-store-creator'

export const createCounterStore = (): StoreApi<CounterStore> => {
  return createStore<CounterStore>(counterStoreCreator)
}

export type CounterStoreApi = ReturnType<typeof createCounterStore>

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(undefined)

export interface CounterStoreProviderProps {
  children: ReactNode
}

export function CounterStoreProvider({ children }: CounterStoreProviderProps): React.JSX.Element {
  const counterStoreRef = useRef<CounterStoreApi>(null)
  if (!counterStoreRef.current) {
    counterStoreRef.current = createCounterStore()
  }

  return <CounterStoreContext.Provider value={counterStoreRef.current}>{children}</CounterStoreContext.Provider>
}

export type UseCounterStoreContextSelector<T> = (store: CounterStore) => T

export function useCounterStoreContext<T>(selector: UseCounterStoreContextSelector<T>): T {
  const counterStoreContext = useContext(CounterStoreContext)

  if (counterStoreContext === undefined) {
    throw new Error('useCounterStoreContext must be used within CounterStoreProvider')
  }

  return useStoreWithEqualityFn(counterStoreContext, selector, shallow)
}
