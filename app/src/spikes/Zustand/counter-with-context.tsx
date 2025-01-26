import { CounterStoreProvider, useCounterStoreContext } from './use-counter-store-context'

function Counter(): React.JSX.Element {
  const { count, inc } = useCounterStoreContext((state) => state)

  return (
    <div>
      <h2>Counter Store Context</h2>
      <h4>{count}</h4>
      <button onClick={inc}>One Up</button>
    </div>
  )
}

export function CounterWithContext(): React.JSX.Element {
  return (
    <CounterStoreProvider>
      <Counter />
    </CounterStoreProvider>
  )
}
