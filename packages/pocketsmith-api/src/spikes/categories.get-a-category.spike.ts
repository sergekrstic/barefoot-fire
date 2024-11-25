import { Config } from './config'
import { createPocketSmithApi, Category } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.categories.categoriesIdGet({ id: 619280 }) // <== I. Salary

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(category: Category): void {
  console.log('id, title')
  console.log(`${category.id}, ${category.title}`)
}
