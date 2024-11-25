import { Config } from './config'
import { createPocketSmithApi, BudgetAnalysisPackage } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.budgeting.usersIdBudgetGet({ id: config.userId })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(budgetAnalysisPackages: BudgetAnalysisPackage[]): void {
  console.log('category, income, expense, is_transfer')

  let index = 0
  for (const budgetAnalysisPackage of budgetAnalysisPackages) {
    const category = budgetAnalysisPackage.category
    console.log(`${index++}: ${category?.id}, ${category?.title}`)

    const income = budgetAnalysisPackage.income
    if (income) {
      // console.log(`${income}`)
    }

    const expense = budgetAnalysisPackage.expense
    if (expense) {
      // console.log(`${expense}`)
    }
  }
}
