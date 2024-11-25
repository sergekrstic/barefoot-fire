import { Config } from './config'
import { createPocketSmithApi, Institution } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.institutions.institutionsIdGet({ id: 7772 })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(institution: Institution): void {
  console.log('id, title')
  console.log(`${institution.id}, ${institution.title}, ${institution.currency_code}`)
}
