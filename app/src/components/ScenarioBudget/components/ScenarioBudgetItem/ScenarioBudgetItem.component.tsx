import { Budget } from 'types'
import { cn, formatTransactionValue } from 'utils'

import { EditableText } from './EditableText.component'
import { ScenarioBudgetItemMenu } from './ScenarioBudgetItem.menu'

export interface ScenarioBudgetItemProps {
  type: 'parent' | 'leaf'
  budget: Budget
  onNameChange: (name: string) => void
  onAmountChange: (amount: number) => void
}

export function ScenarioBudgetItem({
  type,
  budget,
  onNameChange,
  onAmountChange,
}: ScenarioBudgetItemProps): React.JSX.Element {
  const { name, amount } = budget

  return (
    <div className="flex w-full flex-row items-center justify-center py-2">
      <div className="grow">
        <EditableText value={name} onChange={onNameChange} />
      </div>
      <div className={cn('relative min-w-14 text-right', { 'text-gray-500': type === 'parent' })}>
        {type === 'parent' ? (
          <span>{formatTransactionValue(amount)}</span>
        ) : (
          <EditableText value={amount} onChange={(value) => onAmountChange(Number(value))} rightAlign />
        )}
      </div>
      <div className="flex items-center justify-center">
        <ScenarioBudgetItemMenu />
      </div>
    </div>
  )
}
