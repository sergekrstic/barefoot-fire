import { act, renderHook } from '@testing-library/react'
import cy from 'cytoscape'
import { saveAs } from 'file-saver'
import * as mocks from 'mocks'
import { describe, expect, it, vi } from 'vitest'

import * as utils from '../utils'
import { initialState, useAppStore } from './app.store'

const mockDataForInitialAtlas = {
  scenarioGraph: mocks.initialScenarioGraph,
  scenarioMap: mocks.initialScenarioMap,
  budgetMap: mocks.initialBudgetMap,
}

const mockDataForSimpleAtlas = {
  scenarioGraph: mocks.simpleScenarioGraph,
  scenarioMap: mocks.simpleScenarioMap,
  budgetMap: mocks.simpleBudgetMap,
}

vi.mock('file-saver', () => {
  const saveAs = vi.fn()
  return { saveAs }
})

vi.mock('../utils/nanoid', async () => {
  const originalModule = await vi.importActual('../utils/nanoid')

  return { ...originalModule, nanoid: vi.fn() }
})

describe('@app.store()', () => {
  describe('file actions', () => {
    it('creates a store with initial values', () => {
      const { result } = renderHook(() => useAppStore())

      expect(result.current).toBeDefined()
      expect(result.current.data).toStrictEqual(initialState.data)
      expect(result.current.ui).toStrictEqual(initialState.ui)
    })

    it('loads data into the store', () => {
      const { result } = renderHook(() => useAppStore())

      expect(result.current.data).toEqual(initialState.data)

      act(() => {
        result.current.actions.load(mockDataForSimpleAtlas)
      })

      expect(result.current.data).toEqual(mockDataForSimpleAtlas)
    })

    it('resets the store to its initial values', () => {
      const { result } = renderHook(() => useAppStore())

      act(() => {
        result.current.actions.load(mockDataForSimpleAtlas)
        result.current.actions.selectScenario('job-1')
        result.current.actions.highlightPath(['root', 'job-1'])
        result.current.actions.reset()
      })

      expect(result.current.data).toEqual(initialState.data)
    })

    it('saves the store to file', () => {
      const { result } = renderHook(() => useAppStore())

      act(() => {
        result.current.actions.load(mockDataForSimpleAtlas)
        result.current.actions.saveAs('barefoot_fire.json')
      })

      expect(result.current.data).toEqual(mockDataForSimpleAtlas)
      expect(saveAs).toHaveBeenCalled()
    })
  })

  describe('scenario actions', () => {
    const parentId = 'root'

    it('adds a new scenario to an empty project', () => {
      const { result } = renderHook(() => useAppStore())
      vi.mocked(utils.nanoid).mockReturnValueOnce('scenario-1')

      act(() => {
        result.current.actions.addScenario(parentId)
      })

      expect(result.current.data).toStrictEqual({
        scenarioGraph: {
          nodes: [
            {
              data: { id: 'root', name: 'New scenario' },
            },
            {
              data: { id: 'scenario-1', name: 'New scenario' },
            },
          ],
          edges: [
            {
              data: { source: 'root', target: 'scenario-1' },
            },
          ],
        },
        scenarioMap: {
          root: {
            id: 'root',
            name: 'New scenario',
            startDate: '2024-01-01',
            budgets: [],
          },
          'scenario-1': {
            id: 'scenario-1',
            name: 'New scenario',
            startDate: '2024-01-01',
            budgets: [],
          },
        },
        budgetMap: {},
      })
    })

    it('adds a new scenario to an initial project with existing budgets', () => {
      const { result } = renderHook(() => useAppStore())
      vi.mocked(utils.nanoid)
        .mockReturnValueOnce('i-salary-clone')
        .mockReturnValueOnce('i-other-clone')
        .mockReturnValueOnce('i-clone')
        .mockReturnValueOnce('e-living-clone')
        .mockReturnValueOnce('e-clone')
        .mockReturnValueOnce('scenario-1')

      act(() => {
        result.current.actions.load(mockDataForInitialAtlas)
        result.current.actions.addScenario(parentId)
      })

      expect(result.current.data).toStrictEqual({
        scenarioGraph: {
          nodes: [
            {
              data: { id: 'root', name: 'Start' },
            },
            {
              data: { id: 'scenario-1', name: 'New scenario' },
            },
          ],
          edges: [
            {
              data: { source: 'root', target: 'scenario-1' },
            },
          ],
        },
        scenarioMap: {
          ...mocks.initialScenarioMap,
          'scenario-1': {
            id: 'scenario-1',
            name: 'New scenario',
            startDate: '2024-01-01',
            budgets: [
              {
                id: 'i-clone',
                children: [{ id: 'i-salary-clone' }, { id: 'i-other-clone' }],
              },
              {
                id: 'e-clone',
                children: [{ id: 'e-living-clone' }],
              },
            ],
          },
        },
        budgetMap: {
          ...mocks.initialBudgetMap,
          'i-clone': {
            id: 'i-clone',
            name: 'Income',
            amount: 300,
            frequency: 'month',
            startDate: '2024-07-01',
            endDate: '2034-01-01',
          },
          'i-salary-clone': {
            id: 'i-salary-clone',
            name: 'Salary',
            amount: 0,
            frequency: 'month',
            startDate: '2024-07-01',
            endDate: '2034-01-01',
          },
          'i-other-clone': {
            id: 'i-other-clone',
            name: 'Other',
            amount: 300,
            frequency: 'month',
            startDate: '2024-07-01',
            endDate: '2034-01-01',
          },
          'e-clone': {
            id: 'e-clone',
            name: 'Expenses',
            amount: 250,
            frequency: 'month',
            startDate: '2024-07-01',
            endDate: '2034-01-01',
          },
          'e-living-clone': {
            id: 'e-living-clone',
            name: 'Living',
            amount: 250,
            frequency: 'month',
            startDate: '2024-07-01',
            endDate: '2034-01-01',
          },
        },
      })
    })

    it('updates a scenario name', () => {
      const { result } = renderHook(() => useAppStore())

      act(() => {
        result.current.actions.load(mockDataForSimpleAtlas)
        result.current.actions.updateScenarioName('job-3', 'New name')
      })

      expect(result.current.data.scenarioMap['job-3'].name).toBe('New name')
      expect(result.current.data.scenarioGraph).toStrictEqual({
        nodes: [
          { data: { id: 'root', name: 'Start' } },
          { data: { id: 'job-1', name: 'Job 1' } },
          { data: { id: 'job-2', name: 'Job 2' } },
          { data: { id: 'job-3', name: 'New name' } },
        ],
        edges: [
          { data: { source: 'root', target: 'job-1' } },
          { data: { source: 'job-1', target: 'job-2' } },
          { data: { source: 'job-1', target: 'job-3' } },
        ],
      })
    })

    it('updates a scenario start date', () => {
      const { result } = renderHook(() => useAppStore())

      act(() => {
        result.current.actions.load(mockDataForSimpleAtlas)
      })

      expect(result.current.data.scenarioMap['job-3'].startDate).toBe('2030-11-01')
      expect(result.current.data.budgetMap['i-job-3'].startDate).toBe('2030-11-01')
      expect(result.current.data.budgetMap['i-salary-job-3'].startDate).toBe('2030-11-01')
      expect(result.current.data.budgetMap['i-other-job-3'].startDate).toBe('2030-11-01')
      expect(result.current.data.budgetMap['e-job-3'].startDate).toBe('2030-11-01')
      expect(result.current.data.budgetMap['e-living-job-3'].startDate).toBe('2030-11-01')
      expect(result.current.data.budgetMap['e-rent-job-3'].startDate).toBe('2030-11-01')
      expect(result.current.data.budgetMap['e-bills-job-3'].startDate).toBe('2030-11-01')
      expect(result.current.data.budgetMap['e-bills-electricity-job-3'].startDate).toBe('2030-11-01')
      expect(result.current.data.budgetMap['e-bills-phone-job-3'].startDate).toBe('2030-11-01')

      act(() => {
        result.current.actions.updateScenarioStartDate('job-3', '2032-07-01')
      })

      expect(result.current.data.scenarioMap['job-3'].startDate).toBe('2032-07-01')
      expect(result.current.data.budgetMap['i-job-3'].startDate).toBe('2032-07-01')
      expect(result.current.data.budgetMap['i-salary-job-3'].startDate).toBe('2032-07-01')
      expect(result.current.data.budgetMap['i-other-job-3'].startDate).toBe('2032-07-01')
      expect(result.current.data.budgetMap['e-job-3'].startDate).toBe('2032-07-01')
      expect(result.current.data.budgetMap['e-living-job-3'].startDate).toBe('2032-07-01')
      expect(result.current.data.budgetMap['e-rent-job-3'].startDate).toBe('2032-07-01')
      expect(result.current.data.budgetMap['e-bills-job-3'].startDate).toBe('2032-07-01')
      expect(result.current.data.budgetMap['e-bills-electricity-job-3'].startDate).toBe('2032-07-01')
      expect(result.current.data.budgetMap['e-bills-phone-job-3'].startDate).toBe('2032-07-01')
    })

    it('deletes a scenario', () => {
      const { result } = renderHook(() => useAppStore())

      act(() => {
        result.current.actions.load(mockDataForSimpleAtlas)
        result.current.actions.setCytoInstance(cy({ elements: utils.deepClone(mocks.simpleScenarioGraph) }))
      })

      expect(result.current.data.scenarioMap['root']).toBeDefined()
      expect(result.current.data.scenarioMap['job-1']).toBeDefined()
      expect(result.current.data.scenarioMap['job-2']).toBeDefined()
      expect(result.current.data.scenarioMap['job-3']).toBeDefined()
      expect(result.current.data.scenarioGraph).toStrictEqual({
        nodes: [
          { data: { id: 'root', name: 'Start' } },
          { data: { id: 'job-1', name: 'Job 1' } },
          { data: { id: 'job-2', name: 'Job 2' } },
          { data: { id: 'job-3', name: 'Job 3' } },
        ],
        edges: [
          { data: { source: 'root', target: 'job-1' } },
          { data: { source: 'job-1', target: 'job-2' } },
          { data: { source: 'job-1', target: 'job-3' } },
        ],
      })

      act(() => {
        result.current.actions.deleteScenario('job-1')
      })

      expect(result.current.data.scenarioMap['root']).toBeDefined()
      expect(result.current.data.scenarioMap['job-1']).toBeUndefined()
      expect(result.current.data.scenarioMap['job-2']).toBeUndefined()
      expect(result.current.data.scenarioMap['job-3']).toBeUndefined()
      expect(result.current.data.scenarioGraph).toStrictEqual({
        nodes: [{ data: { id: 'root', name: 'Start' } }],
        edges: [],
      })
      expect(result.current.data.scenarioMap).toStrictEqual({
        root: {
          id: 'root',
          name: 'Start',
          startDate: '2024-07-01',
          budgets: [
            {
              id: 'i-start',
              children: [
                {
                  id: 'i-salary-start',
                },
                {
                  id: 'i-other-start',
                },
              ],
            },
            {
              id: 'e-start',
              children: [
                {
                  id: 'e-living-start',
                },
              ],
            },
          ],
        },
      })
      expect(result.current.data.budgetMap).toStrictEqual({
        'i-start': {
          id: 'i-start',
          name: 'Income',
          amount: 300,
          frequency: 'month',
          startDate: '2024-07-01',
          endDate: '2034-01-01',
        },
        'i-salary-start': {
          id: 'i-salary-start',
          name: 'Salary',
          amount: 0,
          frequency: 'month',
          startDate: '2024-07-01',
          endDate: '2034-01-01',
        },
        'i-other-start': {
          id: 'i-other-start',
          name: 'Other',
          amount: 300,
          frequency: 'month',
          startDate: '2024-07-01',
          endDate: '2034-01-01',
        },
        'e-start': {
          id: 'e-start',
          name: 'Expenses',
          amount: 250,
          frequency: 'month',
          startDate: '2024-07-01',
          endDate: '2034-01-01',
        },
        'e-living-start': {
          id: 'e-living-start',
          name: 'Living',
          amount: 250,
          frequency: 'month',
          startDate: '2024-07-01',
          endDate: '2034-01-01',
        },
      })
    })
  })

  describe('budget actions', () => {
    it('adds a new budget to a scenario', () => {
      const { result } = renderHook(() => useAppStore())
      vi.mocked(utils.nanoid).mockReturnValueOnce('e-new-expense-job-3')

      act(() => {
        result.current.actions.load(mockDataForSimpleAtlas)
        result.current.actions.addBudget('job-3', 'e-job-3', 'item')
      })

      expect(result.current.data).toStrictEqual({
        scenarioGraph: {
          ...mockDataForSimpleAtlas.scenarioGraph,
        },
        scenarioMap: {
          ...mockDataForSimpleAtlas.scenarioMap,
          'job-3': {
            id: 'job-3',
            name: 'Job 3',
            startDate: '2030-11-01',
            budgets: [
              {
                id: 'i-job-3',
                children: [{ id: 'i-salary-job-3' }, { id: 'i-other-job-3' }],
              },
              {
                id: 'e-job-3',
                children: [
                  { id: 'e-rent-job-3' },
                  {
                    id: 'e-bills-job-3',
                    children: [{ id: 'e-bills-electricity-job-3' }, { id: 'e-bills-phone-job-3' }],
                  },
                  { id: 'e-living-job-3' },
                  { id: 'e-new-expense-job-3' },
                ],
              },
            ],
          },
        },
        budgetMap: {
          ...mockDataForSimpleAtlas.budgetMap,
          'e-new-expense-job-3': {
            id: 'e-new-expense-job-3',
            name: 'New budget',
            amount: 0,
            frequency: 'month',
            startDate: '2024-01-01',
            endDate: '2034-01-01',
          },
        },
      })
    })

    it('updates a budget with partial data', () => {
      const { result } = renderHook(() => useAppStore())

      act(() => {
        result.current.actions.load(mockDataForSimpleAtlas)
      })

      expect(result.current.data.budgetMap['i-job-3']).toStrictEqual({
        id: 'i-job-3',
        name: 'Income',
        amount: 3200,
        frequency: 'month',
        startDate: '2030-11-01',
        endDate: '2034-01-01',
      })

      act(() => {
        result.current.actions.updateBudget('i-job-3', { name: 'New name', amount: 100, initialAmount: 2000 })
      })

      expect(result.current.data.budgetMap['i-job-3']).toStrictEqual({
        id: 'i-job-3',
        name: 'New name',
        initialAmount: 2000,
        amount: 100,
        frequency: 'month',
        startDate: '2030-11-01',
        endDate: '2034-01-01',
      })
    })

    it('deletes a budget', () => {
      const { result } = renderHook(() => useAppStore())
      const scenarioId = 'job-3'
      const budgetId = 'e-job-3'

      act(() => {
        result.current.actions.load(mockDataForSimpleAtlas)
      })

      expect(result.current.data.budgetMap[budgetId]).toBeDefined()
      expect(result.current.data.scenarioMap[scenarioId].budgets).toStrictEqual([
        {
          id: 'i-job-3',
          children: [{ id: 'i-salary-job-3' }, { id: 'i-other-job-3' }],
        },
        {
          id: 'e-job-3',
          children: [
            { id: 'e-rent-job-3' },
            {
              id: 'e-bills-job-3',
              children: [{ id: 'e-bills-electricity-job-3' }, { id: 'e-bills-phone-job-3' }],
            },
            { id: 'e-living-job-3' },
          ],
        },
      ])

      act(() => {
        result.current.actions.deleteBudget(scenarioId, budgetId)
      })

      expect(result.current.data.budgetMap[budgetId]).toBeUndefined()
      expect(result.current.data.budgetMap['e-rent-job-3']).toBeUndefined()
      expect(result.current.data.budgetMap['e-bills-electricity-job-3']).toBeUndefined()
      expect(result.current.data.budgetMap['e-bills-phone-job-3']).toBeUndefined()
      expect(result.current.data.budgetMap['e-bills-job-3']).toBeUndefined()
      expect(result.current.data.budgetMap['e-living-job-3']).toBeUndefined()
      expect(result.current.data.budgetMap['e-job-3']).toBeUndefined()
      expect(result.current.data.scenarioMap[scenarioId].budgets).toStrictEqual([
        {
          id: 'i-job-3',
          children: [{ id: 'i-salary-job-3' }, { id: 'i-other-job-3' }],
        },
      ])
    })
  })
})
