import { Category, createPocketSmithApi } from '../index'

export async function runScript(pocketSmithApiKey: string): Promise<void> {
  try {
    const api = createPocketSmithApi(pocketSmithApiKey)
    const userId = 85521
    const response = await api.categories.usersIdCategoriesGet({ id: userId })

    for (const category of response.data) {
      printCategoryTitle(category)
    }
  } catch (err) {
    console.error(err)
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
