import { z } from 'zod'

const baseTreeDataSchema = z.object({
  id: z.string(),
})

type TreeData = z.infer<typeof baseTreeDataSchema> & {
  [string: string]: unknown
  children?: TreeData[]
}

export const treeDataSchema: z.ZodType<TreeData> = baseTreeDataSchema.extend({
  children: z.lazy(() => treeDataSchema.array().optional()),
})

const baseBudgetItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.number(),
})

type BudgetItem = z.infer<typeof baseBudgetItemSchema> & {
  children?: BudgetItem[]
}

export const budgetItemSchema: z.ZodType<BudgetItem> = baseBudgetItemSchema.extend({
  children: z.lazy(() => budgetItemSchema.array().optional()),
})

export const budgetTreeSchema = z.object({
  id: z.string(),
  name: z.string(),
  budgets: budgetItemSchema.array(),
})

export const budgetForestSchema = z.record(budgetTreeSchema)

export const budgetSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.number(),
  frequency: z.enum(['year', 'quarter', 'month', 'week', 'day']),
  startDate: z.string(),
  endDate: z.string(),
  initialAmount: z.number().optional(),
  interestRate: z.number().optional(),
})

export const budgetMapSchema = z.record(budgetSchema)

export const scenarioSchema = z.object({
  id: z.string(),
  name: z.string(),
  budgetIds: z.string().array(),
  startDate: z.string(),
})

export const scenarioMapSchema = z.record(scenarioSchema)

export const graphDefinitionSchema = z.object({
  nodes: z.array(
    z.object({
      data: z.object({
        id: z.string(),
        name: z.string(),
      }),
    }),
  ),
  edges: z.array(
    z.object({
      data: z.object({
        source: z.string(),
        target: z.string(),
      }),
    }),
  ),
})
