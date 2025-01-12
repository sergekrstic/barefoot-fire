import { Selection, TimeSeriesData } from 'types'
import { describe, expect, it } from 'vitest'

import { filterTimeseries } from './ScenarioChart.methods'

describe('@filterData()', () => {
  const fullSelection: Selection = [0, 100]
  const lowSelection: Selection = [0, 50]
  const highSelection: Selection = [50, 100]
  const partialSelection: Selection = [25, 75]
  const zeroSelection: Selection = [0, 0]
  const oneHundredSelection: Selection = [100, 100]

  const mockPlotData: TimeSeriesData = [
    { date: '2025-01-01', amount: 100, name: 'selected' },
    { date: '2025-02-01', amount: 200, name: 'selected' },
    { date: '2025-03-01', amount: 300, name: 'selected' },
    { date: '2025-04-01', amount: 400, name: 'selected' },
    { date: '2025-05-01', amount: 500, name: 'selected' },
    { date: '2025-06-01', amount: 600, name: 'selected' },
    { date: '2025-07-01', amount: 700, name: 'selected' },
    { date: '2025-08-01', amount: 800, name: 'selected' },
    { date: '2025-09-01', amount: 900, name: 'selected' },
    { date: '2025-10-01', amount: 1000, name: 'selected' },
  ]

  describe('empty array', () => {
    it('filters with full selection', () => {
      const filteredTimeseries = filterTimeseries([], fullSelection)

      expect(filteredTimeseries.length).toBe(0)
      expect(filteredTimeseries).toStrictEqual([])
    })

    it('filters with low selection', () => {
      const filteredTimeseries = filterTimeseries([], lowSelection)

      expect(filteredTimeseries.length).toBe(0)
      expect(filteredTimeseries).toStrictEqual([])
    })

    it('filters with high selection', () => {
      const filteredTimeseries = filterTimeseries([], highSelection)

      expect(filteredTimeseries.length).toBe(0)
      expect(filteredTimeseries).toStrictEqual([])
    })

    it('filters with partial selection', () => {
      const filteredTimeseries = filterTimeseries([], partialSelection)

      expect(filteredTimeseries.length).toBe(0)
      expect(filteredTimeseries).toStrictEqual([])
    })

    it('filters with zero selection', () => {
      const filteredTimeseries = filterTimeseries([], zeroSelection)

      expect(filteredTimeseries.length).toBe(0)
      expect(filteredTimeseries).toStrictEqual([])
    })

    it('filters with one hundred selection', () => {
      const filteredTimeseries = filterTimeseries([], oneHundredSelection)

      expect(filteredTimeseries.length).toBe(0)
      expect(filteredTimeseries).toStrictEqual([])
    })
  })

  describe('array with one element', () => {
    const data = mockPlotData.slice(0, 1)

    it('filters with full selection', () => {
      const filteredTimeseries = filterTimeseries(data, fullSelection)

      expect(filteredTimeseries.length).toBe(1)
      expect(filteredTimeseries).toStrictEqual([{ date: '2025-01-01', amount: 100, name: 'selected' }])
    })

    it('filters with low selection', () => {
      const filteredTimeseries = filterTimeseries(data, lowSelection)

      expect(filteredTimeseries.length).toBe(1)
      expect(filteredTimeseries).toStrictEqual([{ date: '2025-01-01', amount: 100, name: 'selected' }])
    })

    it('filters with high selection', () => {
      const filteredTimeseries = filterTimeseries(data, highSelection)

      expect(filteredTimeseries.length).toBe(1)
      expect(filteredTimeseries).toStrictEqual([{ date: '2025-01-01', amount: 100, name: 'selected' }])
    })

    it('filters with partial selection', () => {
      const filteredTimeseries = filterTimeseries(data, partialSelection)

      expect(filteredTimeseries.length).toBe(1)
      expect(filteredTimeseries).toStrictEqual([{ date: '2025-01-01', amount: 100, name: 'selected' }])
    })

    it('filters with zero selection', () => {
      const filteredTimeseries = filterTimeseries(data, zeroSelection)

      expect(filteredTimeseries.length).toBe(1)
      expect(filteredTimeseries).toStrictEqual([{ date: '2025-01-01', amount: 100, name: 'selected' }])
    })

    it('filters with one hundred selection', () => {
      const filteredTimeseries = filterTimeseries(data, oneHundredSelection)

      expect(filteredTimeseries.length).toBe(1)
      expect(filteredTimeseries).toStrictEqual([{ date: '2025-01-01', amount: 100, name: 'selected' }])
    })
  })

  describe('array with two elements', () => {
    const data = mockPlotData.slice(0, 2)

    it('filters with full selection', () => {
      const filteredTimeseries = filterTimeseries(data, fullSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })

    it('filters with low selection', () => {
      const filteredTimeseries = filterTimeseries(data, lowSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })

    it('filters with high selection', () => {
      const filteredTimeseries = filterTimeseries(data, highSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })

    it('filters with partial selection', () => {
      const filteredTimeseries = filterTimeseries(data, partialSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })

    it('filters with zero selection', () => {
      const filteredTimeseries = filterTimeseries(data, zeroSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })

    it('filters with one hundred selection', () => {
      const filteredTimeseries = filterTimeseries(data, oneHundredSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })
  })

  describe('array with three elements', () => {
    const data = mockPlotData.slice(0, 3)

    it('filters with full selection', () => {
      const filteredTimeseries = filterTimeseries(data, fullSelection)

      expect(filteredTimeseries.length).toBe(3)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
        { date: '2025-03-01', amount: 300, name: 'selected' },
      ])
    })

    it('filters with low selection', () => {
      const filteredTimeseries = filterTimeseries(data, lowSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })

    it('filters with high selection', () => {
      const filteredTimeseries = filterTimeseries(data, highSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-02-01', amount: 200, name: 'selected' },
        { date: '2025-03-01', amount: 300, name: 'selected' },
      ])
    })

    it('filters with partial selection', () => {
      const filteredTimeseries = filterTimeseries(data, partialSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })

    it('filters with zero selection', () => {
      const filteredTimeseries = filterTimeseries(data, zeroSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })

    it('filters with one hundred selection', () => {
      const filteredTimeseries = filterTimeseries(data, oneHundredSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-02-01', amount: 200, name: 'selected' },
        { date: '2025-03-01', amount: 300, name: 'selected' },
      ])
    })
  })

  describe('array with many elements', () => {
    const data = mockPlotData

    it('filters with full selection', () => {
      const filteredTimeseries = filterTimeseries(data, fullSelection)

      expect(filteredTimeseries.length).toBe(10)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
        { date: '2025-03-01', amount: 300, name: 'selected' },
        { date: '2025-04-01', amount: 400, name: 'selected' },
        { date: '2025-05-01', amount: 500, name: 'selected' },
        { date: '2025-06-01', amount: 600, name: 'selected' },
        { date: '2025-07-01', amount: 700, name: 'selected' },
        { date: '2025-08-01', amount: 800, name: 'selected' },
        { date: '2025-09-01', amount: 900, name: 'selected' },
        { date: '2025-10-01', amount: 1000, name: 'selected' },
      ])
    })

    it('filters with low selection', () => {
      const filteredTimeseries = filterTimeseries(data, lowSelection)

      expect(filteredTimeseries.length).toBe(5)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
        { date: '2025-03-01', amount: 300, name: 'selected' },
        { date: '2025-04-01', amount: 400, name: 'selected' },
        { date: '2025-05-01', amount: 500, name: 'selected' },
      ])
    })

    it('filters with high selection', () => {
      const filteredTimeseries = filterTimeseries(data, highSelection)

      expect(filteredTimeseries.length).toBe(6)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-05-01', amount: 500, name: 'selected' },
        { date: '2025-06-01', amount: 600, name: 'selected' },
        { date: '2025-07-01', amount: 700, name: 'selected' },
        { date: '2025-08-01', amount: 800, name: 'selected' },
        { date: '2025-09-01', amount: 900, name: 'selected' },
        { date: '2025-10-01', amount: 1000, name: 'selected' },
      ])
    })

    it('filters with partial selection', () => {
      const filteredTimeseries = filterTimeseries(data, partialSelection)

      expect(filteredTimeseries.length).toBe(5)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-03-01', amount: 300, name: 'selected' },
        { date: '2025-04-01', amount: 400, name: 'selected' },
        { date: '2025-05-01', amount: 500, name: 'selected' },
        { date: '2025-06-01', amount: 600, name: 'selected' },
        { date: '2025-07-01', amount: 700, name: 'selected' },
      ])
    })

    it('filters with zero selection', () => {
      const filteredTimeseries = filterTimeseries(data, zeroSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-01-01', amount: 100, name: 'selected' },
        { date: '2025-02-01', amount: 200, name: 'selected' },
      ])
    })

    it('filters with one hundred selection', () => {
      const filteredTimeseries = filterTimeseries(data, oneHundredSelection)

      expect(filteredTimeseries.length).toBe(2)
      expect(filteredTimeseries).toStrictEqual([
        { date: '2025-09-01', amount: 900, name: 'selected' },
        { date: '2025-10-01', amount: 1000, name: 'selected' },
      ])
    })
  })
})
