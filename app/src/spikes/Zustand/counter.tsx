import { useCounterStore } from './use-counter-store'

export function Counter(): React.JSX.Element {
  const { count, inc } = useCounterStore()

  return (
    <div>
      <h2>Counter Store</h2>
      <h4>{count}</h4>
      <button onClick={inc}>One Up</button>
    </div>
  )
}
