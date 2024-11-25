import { Config } from './config'
import { createPocketSmithApi, Currency } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.currencies.currenciesIdGet({ id: 'aud' })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(currency: Currency): void {
  console.log('id, name, symbol')
  console.log(`${currency.id}, ${currency.name}, ${currency.symbol}`)
}
