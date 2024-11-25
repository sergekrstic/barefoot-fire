import { Config } from './config'
import { createPocketSmithApi, Transaction } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.transactions.transactionsIdGet({ id: 1124984779 })

    // console.log(response.headers)
    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(transaction: Transaction): void {
  console.log('id, payee, amount, date')

  console.log(`${transaction.id}, ${transaction.payee}, ${transaction.amount}, ${transaction.date}`)

  const transaction_account = transaction.transaction_account
  if (transaction_account) {
    console.log(`  - transaction_account: ${transaction_account.id}, ${transaction_account.name}`)
  }

  const category = transaction.category
  if (category) {
    console.log(`  - category: ${category.id}, ${category.title}`)
  }

  console.log(`  - labels: ${transaction.labels}`)
}
