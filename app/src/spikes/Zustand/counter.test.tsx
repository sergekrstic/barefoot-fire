import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'

import { Counter } from './counter'

describe('Counter', () => {
  test('should render with initial state of 1', async () => {
    renderCounter()

    expect(await screen.findByText(/^1$/)).toBeInTheDocument()
    expect(await screen.findByRole('button', { name: /one up/i })).toBeInTheDocument()
  })

  test('should increase count by clicking a button', async () => {
    const user = userEvent.setup()

    renderCounter()

    expect(await screen.findByText(/^1$/)).toBeInTheDocument()

    await act(async () => {
      await user.click(await screen.findByRole('button', { name: /one up/i }))
    })

    expect(await screen.findByText(/^2$/)).toBeInTheDocument()
  })
})

function renderCounter(): ReturnType<typeof render> {
  return render(<Counter />)
}
