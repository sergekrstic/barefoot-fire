import { useRef, useState } from 'react'

import { useHotkeys } from 'react-hotkeys-hook'
import { cn, formatTransactionValue } from 'utils'

export interface EditableTextProps {
  textClassName?: string
  inputClassName?: string
  rightAlign?: boolean
  value: string | number
  onChange?: (value: string) => void
  onBlur?: (value: string) => void
  onCancel?: () => void
}

export function EditableText({
  textClassName,
  inputClassName,
  value,
  onChange,
  onBlur,
  onCancel,
  rightAlign = false,
}: EditableTextProps): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState(false)

  // Note: the `useHotkeys` hook is mounted globally and will trigger on any input if an element
  // ref is not attached. However, this is not possible when the input is conditionally rendered.
  // So we need to ensure that the input is mounted (isEditing) before handling hotkeys.
  useHotkeys<HTMLInputElement>(
    ['esc', 'return'],
    (event, handler) => {
      // Ensure that the input is mounted
      if (!inputRef.current) return
      switch (handler.hotkey) {
        case 'esc':
          if (onCancel) onCancel()
          setIsEditing(false)
          break
        case 'return':
          // @ts-expect-error - don't know how to define this
          if (onBlur) onBlur(event.target.value)
          setIsEditing(false)
          break
      }
    },
    {
      enableOnFormTags: ['input'],
    },
    [value, isEditing],
  )

  return (
    <div className="relative grow">
      {isEditing && (
        <input
          ref={inputRef}
          type={typeof value === 'string' ? 'text' : 'number'}
          autoFocus
          className={cn(
            'absolute rounded-md border border-violet-500 bg-slate-800 px-2 py-1 text-slate-300 outline-0',
            {
              '-bottom-1 -top-1': true,
              '-left-[9px] right-3 text-left': !rightAlign,
              '-right-[9px] left-3 text-right': rightAlign,
              // Remove the spinner from number inputs
              'appearance-none': typeof value === 'number',
            },
            inputClassName,
          )}
          value={value}
          onBlur={(e) => {
            setIsEditing(false)
            if (onBlur) {
              onBlur(e.target.value)
            }
          }}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value)
            }
          }}
        />
      )}
      <span
        className={cn('cursor-text', textClassName)}
        onClick={(e) => {
          e.stopPropagation()
          setIsEditing(true)
        }}
      >
        {/* Ensure that underlying text is not visible when editing */}
        {isEditing ? '.' : formatValue(value)}
      </span>
    </div>
  )
}

function formatValue(value: string | number): string {
  if (typeof value === 'number') {
    return formatTransactionValue(value)
  }

  if (typeof value === 'string') {
    return value ? value : 'No name'
  }

  throw new Error('Invalid value type')
}
