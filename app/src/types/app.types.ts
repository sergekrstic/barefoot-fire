export interface TreeData extends Record<string, unknown> {
  id: string
  children?: TreeData[]
}

export interface BudgetCategories {
  name: string
  categories: TreeData[]
}
