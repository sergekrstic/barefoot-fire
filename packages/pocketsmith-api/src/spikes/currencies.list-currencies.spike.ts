import { Config } from './config'
import { createPocketSmithApi, Currency } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.currencies.currenciesGet()

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(currencies: Currency[]): void {
  console.log('id, name, symbol')

  for (const currency of currencies) {
    console.log(`${currency.id}, ${currency.name}, ${currency.symbol}`)
  }
}
