import { useState } from 'react'

import { EditableText } from 'components'
import { Budget } from 'types'
import { cn, formatTransactionValue } from 'utils'

import { ScenarioBudgetItemMenu } from './ScenarioBudgetItem.menu'

export interface ScenarioBudgetItemProps {
  type: 'parent' | 'leaf'
  budget: Budget
  onUpdateName: (name: string) => void
  onUpdateAmount: (amount: number) => void
  onDelete: () => void
}

export function ScenarioBudgetItem({
  type,
  budget,
  onUpdateName,
  onUpdateAmount,
  onDelete,
}: ScenarioBudgetItemProps): React.JSX.Element {
  const [name, setName] = useState(budget.name)
  const [amount, setAmount] = useState(budget.amount)

  return (
    <div className="flex w-full flex-row items-center justify-center py-2">
      <div className="grow">
        <EditableText value={name} onChange={setName} onBlur={onUpdateName} onCancel={() => setName(budget.name)} />
      </div>
      <div className={cn('relative min-w-14 text-right', { 'text-slate-500': type === 'parent' })}>
        {type === 'parent' ? (
          <span>{formatTransactionValue(amount)}</span>
        ) : (
          <EditableText
            value={amount}
            onChange={(value) => setAmount(Number(value))}
            onBlur={(value) => onUpdateAmount(Number(value))}
            onCancel={() => setAmount(budget.amount)}
            rightAlign
          />
        )}
      </div>
      <div className="flex items-center justify-center">
        <ScenarioBudgetItemMenu onDelete={onDelete} />
      </div>
    </div>
  )
}
