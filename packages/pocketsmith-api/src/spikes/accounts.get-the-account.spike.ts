import { Config } from './config'
import { createPocketSmithApi, Account } from '../index'

export async function runScript(config: Config): Promise<void> {
  try {
    const api = createPocketSmithApi(config.pocketSmithApiKey)
    const response = await api.accounts.accountsIdGet({ id: 1285348 })

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(account: Account): void {
  console.log('id, type, title, current_balance, current_balance_date')

  console.log(
    `\naccount: ` +
      `${account.id}, ` +
      `${account.type}, ` +
      `${account.title}, ` +
      `${account.current_balance}, ` +
      `${account.current_balance_date}`,
  )

  const primaryTransactionAccount = account.primary_transaction_account
  if (primaryTransactionAccount) {
    console.log(
      `  - primaryTransactionAccount: ` +
        `${primaryTransactionAccount.id}, ` +
        `${primaryTransactionAccount.type}, ` +
        `${primaryTransactionAccount.name}`,
    )
  }

  const primaryScenario = account.primary_scenario
  if (primaryScenario) {
    console.log(`  - primaryScenario: ${primaryScenario.id}, ${primaryScenario.type}, ${primaryScenario.title}`)
  }

  const transactionAccounts = account.transaction_accounts
  if (transactionAccounts) {
    for (const transactionAccount of transactionAccounts) {
      console.log(
        `  - transactionAccount: ` +
          `${transactionAccount.id}, ` +
          `${transactionAccount.type}, ` +
          `${transactionAccount.name}, ` +
          `${transactionAccount.latest_feed_name} `,
      )
    }
  }

  const scenarios = account.scenarios
  if (scenarios) {
    for (const scenario of scenarios) {
      console.log(
        `  - transactionAccount: ` +
          `${scenario.id}, ` +
          `${scenario.type}, ` +
          `${scenario.title}, ` +
          `${scenario.current_balance},` +
          `${scenario.current_balance_date} `,
      )
    }
  }
}
