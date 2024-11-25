import { Config } from './config'
import { createPocketSmithApi, CategoryRule } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.categoryRules.usersIdCategoryRulesGet({ id: config.userId })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(categoryRules: CategoryRule[]): void {
  console.log('id, category.title, payee_matches')

  for (const categoryRule of categoryRules) {
    console.log(`${categoryRule.id}, ${categoryRule.category?.title}, ${categoryRule.payee_matches}`)
  }
}
