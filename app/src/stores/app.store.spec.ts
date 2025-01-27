import { renderHook } from '@testing-library/react'
import { simpleBudgetMap, simpleScenarioGraph, simpleScenarioMap } from 'mocks'
import { describe, expect, it } from 'vitest'

import { PluginStore, useAppStore } from './app.store'

describe('@app.store()', () => {
  it('creates a store with initial values', () => {
    const store = renderStore()
    expect(store).toBeDefined()
    expect(store.data).toStrictEqual({
      scenarioGraph: {
        edges: [],
        nodes: [{ data: { id: 'root', name: 'New scenario' } }],
      },
      scenarioMap: {
        // Todo: figure out how to remove the duplicated data (name property)
        root: { budgets: [], id: 'root', name: 'New scenario', startDate: '2024-01-01' },
      },
      budgetMap: {},
    })
    expect(store.ui).toStrictEqual({
      // Graph
      cytoInstance: null,
      selectedScenarioId: 'root',
      highlightedPath: [],
      pinnedPath: null,
      // Chart
      timeScrubberSelection: [0, 100],
      scenarioStartEvents: [],
      highlightedPlotData: [],
      pinnedPlotData: null,
    })
  })

  it('loads data into the store', () => {
    const store = renderStore()
    store.actions.load({
      scenarioGraph: simpleScenarioGraph,
      scenarioMap: simpleScenarioMap,
      budgetMap: simpleBudgetMap,
    })
    expect(store).toBeDefined()
  })

  it('resets the store to its initial values', () => {
    const store = renderStore()
    store.actions.reset()
    expect(store).toBeDefined()
  })
})

function renderStore(): PluginStore {
  return renderHook(() => useAppStore()).result.current
}
