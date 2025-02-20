import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function deepClone<T>(data: T): T {
  return JSON.parse(JSON.stringify(data))
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function formatTransactionValue(value: number): string {
  const integerValue = Math.floor(Math.round(value))
  const formattedNumber = Math.abs(integerValue).toLocaleString()
  return value >= 0 ? formattedNumber : `(${formattedNumber})`
}
