import { memo } from 'react'
import { TransactionAccount } from '@fire/pocketsmith-api'

import { CollapsibleSection } from 'components'
import { useAccounts } from 'queries'

export const AccountList = memo(function AccountList(): JSX.Element {
  const { data: accounts, isLoading } = useAccounts()

  if (isLoading) return <p>Loading...</p>

  if (!accounts) return <p>No accounts found</p>

  return (
    <>
      {accounts.map((account) => (
        <CollapsibleSection key={account.id} title={account.title} insight={account.current_balance} as="h6">
          {account.transaction_accounts?.map((transactionAccount) => (
            <TransactionAccountItem key={transactionAccount.id} transactionAccount={transactionAccount} />
          ))}
        </CollapsibleSection>
      ))}
    </>
  )
})

interface TransactionAccountItemProps {
  transactionAccount: TransactionAccount
}

function TransactionAccountItem({ transactionAccount }: TransactionAccountItemProps): JSX.Element {
  return (
    <div className="fire-section-item">
      <div>{transactionAccount.name}</div>
      <div>{transactionAccount.current_balance}</div>
    </div>
  )
}
