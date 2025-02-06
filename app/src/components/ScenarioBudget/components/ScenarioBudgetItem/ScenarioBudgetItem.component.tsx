import { useState } from 'react'

import { CollapsibleTreeNode, EditableText, Option, Select } from 'components'
import { Budget, BudgetFrequency, BudgetType } from 'types'
import { formatTransactionValue } from 'utils'

import { ScenarioBudgetItemMenu } from './ScenarioBudgetItem.menu'

export interface ScenarioBudgetItemProps {
  type: BudgetType
  depth: number
  expanded: boolean
  budget: Budget
  onAddBudget: (type: BudgetType) => void
  onUpdateBudget: (budget: Partial<Budget>) => void
  onDeleteBudget: () => void
}

export function ScenarioBudgetItem({
  type,
  depth,
  expanded,
  budget,
  onAddBudget,
  onUpdateBudget,
  onDeleteBudget,
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
            <span>{budget.rollup !== undefined ? formatTransactionValue(budget.rollup) : '–'}</span>
          </div>
          <div className="flex items-center justify-center">
            <ScenarioBudgetItemMenu type={type} onAddItem={onAddBudget} onDelete={onDeleteBudget} />
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
            <Select
              labelClassName="-mr-2 cursor-pointer px-2 text-slate-200 aria-[expanded=true]:bg-slate-700"
              listClassName="rounded-sm border border-slate-700 bg-slate-800"
              value={budget.frequency}
              onChange={(value) => {
                onUpdateBudget({ frequency: value as BudgetFrequency })
              }}
            >
              {['year', 'quarter', 'month', 'week', 'day'].map((option) => (
                <Option
                  className="px-2 py-1 text-right text-slate-200 aria-[active=true]:bg-violet-700 aria-[selected=true]:font-semibold aria-[active=true]:text-violet-200 aria-[selected=true]:text-violet-500"
                  key={option}
                  label={option}
                />
              ))}
            </Select>
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
