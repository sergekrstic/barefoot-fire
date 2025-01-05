import { expect } from 'vitest'

export function expectToBeCloseToArray(actual: number[], expected: number[]): void {
  expect(actual.length).toBe(expected.length)
  actual.forEach((x, i) => expect(x).toBeCloseTo(expected[i]))
  // actual.forEach((x, i) => expect(x).withContext(`[${i}]`).toBeCloseTo(expected[i]))
}
// expect.extend({
//   toBeCloseToArray(received: number[], expected: number[]) {
//     const { isNot } = this

//     console.log('received', received)

//     if (received.length !== expected.length) {
//       return {
//         pass: false,
//         message: () => `expected ${received} to have length ${expected.length}`,
//       }
//     }

//     const result = received.every((x, i) => this.equals(x, expected[i]))
//     return {
//       pass: result,
//       message: () => `${received} is${isNot ? ' not' : ''} foo`,
//     }
//   },
// })
