import { Config } from './config'
import { createPocketSmithApi, SavedSearch } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.savedSearches.usersIdSavedSearchesGet({ id: config.userId })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(savedSearches: SavedSearch[]): void {
  console.log('id, title')
  for (const savedSearch of savedSearches) {
    console.log(`${savedSearch.id}, ${savedSearch.title}`)
  }
}
