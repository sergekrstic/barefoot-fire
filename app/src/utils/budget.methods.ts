import { Budget, RollupFrequency, TreeData } from 'types'

import { nanoid } from './nanoid.methods'

export function collectBudgetIds(budgetForest: TreeData[], excludeGroupBudgets = false): string[] {
  const budgetIds: string[] = []
  const fetchBudgetIds = (tree: TreeData): void => {
    if (tree.children) {
      tree.children.forEach(fetchBudgetIds)
    }
    if (tree.children && excludeGroupBudgets) {
      // Do not include group budgets
    } else {
      budgetIds.push(tree.id)
    }
  }
  budgetForest.forEach(fetchBudgetIds)

  return budgetIds
}

export function findBudgetInForest(budgetId: string, budgetForest: TreeData[]): TreeData | null {
  const findTreeNode = (tree: TreeData): TreeData | null => {
    let result: TreeData | null = null

    if (tree.id === budgetId) {
      result = tree
    } else if (tree.children) {
      tree.children.some((node) => {
        result = findTreeNode(node)
        return result // break loop
      })
    }

    return result
  }

  return budgetForest.map(findTreeNode).find((node) => node !== null) || null
}

export function generateNewBudgetIdMap(budgetIds: string[]): Record<string, string> {
  return budgetIds.reduce(
    (acc, originalId) => {
      acc[originalId] = nanoid()
      return acc
    },
    {} as Record<string, string>,
  )
}

export function cloneBudgetForest(budgetForest: TreeData[], newBudgetIdMap: Record<string, string>): TreeData[] {
  const preformClone = (tree: TreeData): TreeData => {
    const newTree = { ...tree, id: newBudgetIdMap[tree.id] }
    if (tree.children) {
      newTree.children = tree.children.map(preformClone)
    }
    return newTree
  }
  return budgetForest.map(preformClone)
}

export function calculateBudgetRollupValue(budget: Budget, rollupFrequency: RollupFrequency): number {
  const { amount, frequency: budgetFrequency } = budget
  switch (budgetFrequency) {
    case 'year':
      return rollupFrequency === 'yearly' ? amount : amount / 12
    case 'quarter':
      return rollupFrequency === 'yearly' ? amount * 4 : (amount * 4) / 12
    case 'month':
      return rollupFrequency === 'yearly' ? amount * 12 : amount
    case 'week':
      return rollupFrequency === 'yearly' ? amount * 52 : (amount * 52) / 12
    case 'day':
      return rollupFrequency === 'yearly' ? amount * 365 : (amount * 365) / 12
  }
}
