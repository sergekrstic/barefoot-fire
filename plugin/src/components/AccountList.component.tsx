import { TransactionAccount } from '@fire/pocketsmith-api'

import { CollapsibleSection } from 'components'
import { useAccounts } from 'queries'

export function AccountList(): JSX.Element {
  const { data: accounts, isLoading } = useAccounts()

  return (
    <CollapsibleSection title="Accounts" as="h5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {accounts ? (
            <>
              {accounts.map((account) => (
                <CollapsibleSection key={account.id} title={account.title} insight={account.current_balance} as="h6">
                  {account.transaction_accounts?.map((transactionAccount) => (
                    <TransactionAccountItem key={transactionAccount.id} transactionAccount={transactionAccount} />
                  ))}
                </CollapsibleSection>
              ))}
            </>
          ) : (
            <p>No accounts found</p>
          )}
        </>
      )}
    </CollapsibleSection>
  )
}

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
