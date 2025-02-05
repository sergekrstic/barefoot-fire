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
  onUpdateBudget: (budget: Partial<Budget>) => void
  onDelete: () => void
}

export function ScenarioBudgetItem({
  type,
  depth,
  expanded,
  budget,
  onAddItem,
  onUpdateBudget,
  onDelete,
}: ScenarioBudgetItemProps): React.JSX.Element {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <CollapsibleTreeNode
        className="cursor-pointer px-4 hover:bg-slate-800"
        type={type}
        depth={depth}
        expanded={expanded}
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className={'flex w-full flex-row items-center justify-center py-2'}>
          <div className="shrink-0 flex-grow">
            <EditableText
              mode="text"
              textClassName=""
              defaultValue={budget.name}
              onBlur={(value) => onUpdateBudget({ name: value })}
            />
          </div>
          <div className={'relative min-w-14 text-right text-slate-500'}>
            <span>{formatTransactionValue(budget.amount)}</span>
          </div>
          <div className="flex items-center justify-center">
            <ScenarioBudgetItemMenu type={type} onAddItem={onAddItem} onDelete={onDelete} />
          </div>
        </div>
      </CollapsibleTreeNode>
      {type === 'item' && showDetails && (
        <div className="pr-12 text-slate-500" style={{ paddingLeft: `${(depth + 2) * (16 + 2)}px` }}>
          <div className="flex py-2">
            <span>Initial</span>
            <EditableText
              mode="number"
              containerClassName="flex grow justify-end text-end"
              textClassName="text-slate-200 w-20"
              defaultValue={budget.initialAmount || '–'}
              onBlur={(value) => onUpdateBudget({ initialAmount: Number(value) })}
              rightAlign
            />
          </div>
          <div className="flex py-2">
            <span>Amount</span>
            <EditableText
              mode="number"
              containerClassName="flex grow justify-end text-end"
              textClassName="text-slate-200 w-20"
              defaultValue={budget.amount}
              onBlur={(value) => onUpdateBudget({ amount: Number(value) })}
              rightAlign
            />
          </div>
          <div className="flex justify-between py-2">
            <span>Frequency</span>
            <div className="text-slate-200">{budget.frequency}</div>
          </div>
          <div className="flex py-2">
            <span>Rate (%)</span>
            <EditableText
              mode="decimal"
              containerClassName="flex grow justify-end text-end"
              textClassName="text-slate-200 w-20"
              defaultValue={budget.interestRate === undefined ? undefined : budget.interestRate * 100}
              onBlur={(value) => onUpdateBudget({ interestRate: value === '' ? undefined : Number(value) / 100 })}
              rightAlign
            />
          </div>
        </div>
      )}
    </>
  )
}
