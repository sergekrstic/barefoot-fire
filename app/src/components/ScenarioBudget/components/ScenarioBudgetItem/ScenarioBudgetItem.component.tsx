import { useState } from 'react'

import { CollapsibleTreeNode, EditableText } from 'components'
import { Budget } from 'types'
import { formatTransactionValue } from 'utils'

import { ScenarioBudgetItemMenu } from './ScenarioBudgetItem.menu'

export interface ScenarioBudgetItemProps {
  type: 'group' | 'item'
  depth: number
  expanded: boolean
  budget: Budget
  onAddItem: () => void
  onUpdateName: (name: string) => void
  onUpdateAmount: (amount: number) => void
  onDelete: () => void
}

export function ScenarioBudgetItem({
  type,
  depth,
  expanded,
  budget,
  onAddItem,
  onUpdateName,
  onUpdateAmount,
  onDelete,
}: ScenarioBudgetItemProps): React.JSX.Element {
  const [showDetails, setShowDetails] = useState(false)
  const [name, setName] = useState(budget.name)
  const [amount, setAmount] = useState(budget.amount)

  const toggleDetails = (): void => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <CollapsibleTreeNode
        className="cursor-pointer px-4 hover:bg-slate-800"
        type={type}
        depth={depth}
        expanded={expanded}
        onClick={toggleDetails}
      >
        <div className={'flex w-full flex-row items-center justify-center py-2'}>
          <div className="grow">
            <EditableText value={name} onChange={setName} onBlur={onUpdateName} onCancel={() => setName(budget.name)} />
          </div>
          <div className={'relative min-w-14 text-right text-slate-500'}>
            <span>{formatTransactionValue(amount)}</span>
          </div>
          <div className="flex items-center justify-center">
            <ScenarioBudgetItemMenu type={type} onAddItem={onAddItem} onDelete={onDelete} />
          </div>
        </div>
      </CollapsibleTreeNode>
      {type === 'item' && showDetails && (
        <div className="pr-12 text-slate-500" style={{ paddingLeft: `${(depth + 2) * (16 + 4)}px` }}>
          <div className="flex justify-between py-2">
            <span>Initial</span>
            <EditableText
              textClassName="text-slate-200"
              value={budget.initialAmount || '–'}
              onChange={(value) => setAmount(Number(value))}
              onBlur={(value) => onUpdateAmount(Number(value))}
              onCancel={() => setAmount(budget.amount)}
              rightAlign
            />
          </div>
          <div className="flex justify-between py-2">
            <span>Amount</span>
            <EditableText
              textClassName="text-slate-200"
              value={amount}
              onChange={(value) => setAmount(Number(value))}
              onBlur={(value) => onUpdateAmount(Number(value))}
              onCancel={() => setAmount(budget.amount)}
              rightAlign
            />
          </div>
          <div className="flex justify-between py-2">
            <span>Frequency</span>
            <div className="text-slate-200">{budget.frequency}</div>
          </div>
          <div className="flex justify-between py-2">
            <span>Rate (%)</span>
            <EditableText
              textClassName="text-slate-200"
              value={budget.interestRate || '–'}
              onChange={(value) => setAmount(Number(value))}
              onBlur={(value) => onUpdateAmount(Number(value))}
              onCancel={() => setAmount(budget.amount)}
              rightAlign
            />
          </div>
        </div>
      )}
    </>
  )
}
