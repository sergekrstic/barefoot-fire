import { describe, expect, it } from 'vitest'

import { dateFromCurrentInterval, getCurrentInterval } from './utils.methods'

describe('@getCurrentInterval()', () => {
  const mockDate = new Date('2024-04-09T11:30:00.000Z')

  it('creates a year interval', () => {
    const interval = getCurrentInterval(mockDate, 'year')
    expect(interval).toBe('2024')
  })

  it('creates a month interval', () => {
    const interval = getCurrentInterval(mockDate, 'month')
    expect(interval).toBe('2024-04')
  })

  it('creates a week interval', () => {
    const interval = getCurrentInterval(mockDate, 'week')
    expect(interval).toBe('2024-15')
  })
})

describe('@dateFromCurrentInterval()', () => {
  it('creates date from year interval', () => {
    const date = dateFromCurrentInterval('2024', 'year')
    expect(date.toISOString()).toBe('2023-12-31T16:00:00.000Z')
  })

  it('creates date from month interval', () => {
    const date = dateFromCurrentInterval('2024-04', 'month')
    expect(date.toISOString()).toBe('2024-04-30T16:00:00.000Z')
  })

  it('creates date from week interval', () => {
    const date = dateFromCurrentInterval('2024-15', 'week')
    expect(date.toISOString()).toBe('2024-04-07T16:00:00.000Z')
  })
})
