import { useState } from 'react'

import { Budget } from 'types'
import { cn, formatTransactionValue } from 'utils'

import { EditableText } from './EditableText.component'
import { ScenarioBudgetItemMenu } from './ScenarioBudgetItem.menu'

export interface ScenarioBudgetItemProps {
  type: 'parent' | 'leaf'
  budget: Budget
}

export function ScenarioBudgetItem({ type, budget }: ScenarioBudgetItemProps): React.JSX.Element {
  const [name, setName] = useState(budget.name)
  const [amount, setValue] = useState(budget.amount)

  return (
    <div className="flex w-full flex-row items-center justify-center py-2">
      <div className="grow">
        <EditableText value={name} onChange={setName} />
      </div>
      <div className={cn('relative min-w-14 text-right', { 'text-gray-500': type === 'parent' })}>
        {type === 'parent' ? (
          <span>{formatTransactionValue(amount)}</span>
        ) : (
          <EditableText value={amount} onChange={() => setValue(Number(amount))} rightAlign />
        )}
      </div>
      <div className="flex items-center justify-center">
        <ScenarioBudgetItemMenu />
      </div>
    </div>
  )
}
