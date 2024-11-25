import { Config } from './config'
import { createPocketSmithApi } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.labels.usersIdLabelsGet({ id: config.userId })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(labels: string[]): void {
  for (const label of labels) {
    console.log(label)
  }
}
