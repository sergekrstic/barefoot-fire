import { useState } from 'react'

import { BudgetItem } from 'types'
import { cn, formatTransactionValue } from 'utils'

import { EditableText } from './EditableText.component'
import { ScenarioBudgetItemMenu } from './ScenarioBudgetItem.menu'

export function ScenarioBudgetItem({ type, item }: { type: 'parent' | 'leaf'; item: BudgetItem }): React.JSX.Element {
  const [name, setName] = useState(item.name)
  const [value, setValue] = useState(item.value)

  return (
    <div className="flex w-full flex-row items-center justify-center py-2">
      <div className="grow">
        <EditableText value={name} onChange={setName} />
      </div>
      <div className={cn('relative min-w-14 text-right', { 'text-gray-500': type === 'parent' })}>
        {type === 'parent' ? (
          <span>{formatTransactionValue(value)}</span>
        ) : (
          <EditableText value={value} onChange={() => setValue(Number(value))} rightAlign />
        )}
      </div>
      <div className="flex items-center justify-center">
        <ScenarioBudgetItemMenu />
      </div>
    </div>
  )
}
