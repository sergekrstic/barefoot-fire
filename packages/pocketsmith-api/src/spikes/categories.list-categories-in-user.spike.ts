import { Config } from './config'
import { Category, createPocketSmithApi } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)

    const response = await api.categories.usersIdCategoriesGet({ id: config.userId })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(categories: Category[]): void {
  for (const category of categories) {
    printCategoryTitle(category)
  }
}

function printCategoryTitle(category: Category, depth = 0): void {
  console.log('  '.repeat(depth) + category.title)
  if (category.children) {
    for (const child of category.children) {
      printCategoryTitle(child, depth + 1)
    }
  }
}
