import { Config } from './config'
import { createPocketSmithApi, TransactionAccount } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.transactionAccounts.transactionAccountsIdGet({ id: 155173 })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(transactionAccount: TransactionAccount): void {
  console.log('id, type, number, name, current_balance, current_balance_date')
  console.log(
    `${transactionAccount.id}, ` +
      `${transactionAccount.type}, ` +
      `${transactionAccount.number}, ` +
      `${transactionAccount.name}, ` +
      `${transactionAccount.current_balance_date}, ` +
      `${transactionAccount.current_balance}`,
  )
}
