import { TreeData } from 'components'

export const mockBudgetStart: TreeData[] = [
  {
    id: '1',
    name: 'Income',
    value: 2200,
    children: [
      { id: '1.1', name: 'Salary', value: 0 },
      { id: '1.2', name: 'Other', value: 300 },
    ],
  },
  {
    id: '2',
    name: 'Expenses',
    value: 1000,
    children: [{ id: '2.2', name: 'Living', value: 250 }],
  },
]

export const mockBudgetOne: TreeData[] = [
  {
    id: '1',
    name: 'Income',
    value: 2200,
    children: [
      { id: '1.1', name: 'Salary', value: 2000 },
      { id: '1.2', name: 'Other', value: 200 },
    ],
  },
  {
    id: '2',
    name: 'Expenses',
    value: 1000,
    children: [
      { id: '2.1', name: 'Rent', value: 300 },
      {
        id: '2.2',
        name: 'Bills',
        value: 300,
        children: [
          { id: '2.2.1', name: 'Electricity', value: 100 },
          { id: '2.2.2', name: 'Phone', value: 200 },
        ],
      },
      { id: '2.2', name: 'Living', value: 400 },
    ],
  },
]

export const mockBudgetTwo: TreeData[] = [
  {
    id: '1',
    name: 'Income',
    value: 2700,
    children: [
      { id: '1.1', name: 'Salary', value: 2500 },
      { id: '1.2', name: 'Other', value: 200 },
    ],
  },
  {
    id: '2',
    name: 'Expenses',
    value: 1100,
    children: [
      { id: '2.1', name: 'Rent', value: 350 },
      {
        id: '2.2',
        name: 'Bills',
        value: 300,
        children: [
          { id: '2.2.1', name: 'Electricity', value: 100 },
          { id: '2.2.2', name: 'Phone', value: 200 },
        ],
      },
      { id: '2.2', name: 'Living', value: 450 },
    ],
  },
]

export const mockBudgetThree: TreeData[] = [
  {
    id: '1',
    name: 'Income',
    value: 3200,
    children: [
      { id: '1.1', name: 'Salary', value: 3000 },
      { id: '1.2', name: 'Other', value: 200 },
    ],
  },
  {
    id: '2',
    name: 'Expenses',
    value: 1100,
    children: [
      { id: '2.1', name: 'Rent', value: 350 },
      {
        id: '2.2',
        name: 'Bills',
        value: 300,
        children: [
          { id: '2.2.1', name: 'Electricity', value: 100 },
          { id: '2.2.2', name: 'Phone', value: 200 },
        ],
      },
      { id: '2.2', name: 'Living', value: 450 },
    ],
  },
]

export const mockBudgetMap: Record<string, TreeData[]> = {
  start: mockBudgetStart,
  job1: mockBudgetOne,
  job2: mockBudgetTwo,
  job3: mockBudgetThree,
}
