import { Config } from './config'
import { createPocketSmithApi, User } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.users.meGet()

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(user: User): void {
  console.log('id, name, email')
  console.log(`${user.id}, ${user.name}, ${user.email}`)
}
