import { Config } from './config'
import { createPocketSmithApi, Institution } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.institutions.usersIdInstitutionsGet({ id: config.userId })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(institutions: Institution[]): void {
  console.log('id, title, currency_code')

  for (const institution of institutions) {
    console.log(`${institution.id}, ${institution.title}, ${institution.currency_code}`)
  }
}
