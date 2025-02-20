import { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

import { ScenarioBudgets, ScenarioEvents, calculateScenarioEvents } from '@fire/forecast-engine'

const scenarioBudgets: ScenarioBudgets = {
  period: {
    startDate: '2024-01-01',
    endDate: '2024-12-31',
  },
  budgets: [
    {
      id: '1',
      name: 'Budget 1',
      amount: 1000,
      frequency: 'year',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
    {
      id: '2',
      name: 'Budget 2',
      amount: 100,
      frequency: 'week',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
    {
      id: '3',
      name: 'Budget 33',
      amount: 10,
      frequency: 'day',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
    {
      id: '4',
      name: 'Budget 4',
      amount: 10,
      frequency: 'day',
      startDate: '2024-01-01',
      endDate: '2034-12-31',
    },
  ],
}

const scenarioEvents = calculateScenarioEvents(scenarioBudgets)

export function ScenarioExpenseChart(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const processedData = scenarioEvents.budgetEvents.map((budgetEvent) => {
      return budgetEvent.events.map((event) => ({
        date: new Date(event.date),
        amount: event.value,
        name: budgetEvent.budget.name,
      }))
    })

    const plot = Plot.plot({
      y: { grid: true },
      marks: [
        Plot.ruleY([0]),
        Plot.rectY(
          // @ts-ignore
          processedData.flat(),
          Plot.binX({ y: 'sum' }, { x: 'date', y: 'amount', fill: 'name', interval: 'month', cumulative: true }),
        ),
      ],
    })

    containerRef.current?.append(plot)
    return (): void => plot.remove()
  }, [])

  return <div ref={containerRef} />
}
