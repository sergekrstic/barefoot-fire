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

export const scenarioSchema = z.object({
  id: z.string(),
  name: z.string(),
  startDate: z.string(),
  budgets: treeDataSchema.array(),
})

export const scenarioMapSchema = z.record(scenarioSchema)

export const budgetFrequencySchema = z.enum(['year', 'quarter', 'month', 'week', 'day'])

export const budgetSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.number(),
  frequency: budgetFrequencySchema,
  startDate: z.string(),
  endDate: z.string(),
  initialAmount: z.number().optional(),
  interestRate: z.number().optional(),
  rollup: z.number().optional(),
})

export const budgetMapSchema = z.record(budgetSchema)

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
