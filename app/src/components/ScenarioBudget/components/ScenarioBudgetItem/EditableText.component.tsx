import { useState } from 'react'

import { cn, formatTransactionValue } from 'utils'

export interface EditableTextProps {
  textClassName?: string
  inputClassName?: string
  rightAlign?: boolean
  value: string | number
  onChange: (value: string) => void
}

export function EditableText({
  textClassName,
  inputClassName,
  value,
  onChange,
  rightAlign = false,
}: EditableTextProps): React.JSX.Element {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="relative">
      {isEditing && (
        <input
          type="text"
          autoFocus
          className={cn(
            'absolute rounded-md border border-violet-500 bg-slate-800 px-2 py-1 text-slate-300 outline-0',
            {
              '-bottom-1 -top-1': true,
              '-left-[9px] right-3 text-left': !rightAlign,
              '-right-[9px] left-3 text-right': rightAlign,
            },
            inputClassName,
          )}
          value={value}
          onBlur={() => setIsEditing(false)}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      <span
        className={cn('cursor-text', textClassName)}
        onClick={(e) => {
          e.stopPropagation()
          setIsEditing(true)
        }}
      >
        {formatValue(value)}
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
