import { memo } from 'react'
import { TransactionAccount } from '@fire/pocketsmith-api'

import { CollapsibleSection } from 'components'
import { useListAccountsInInstitution } from 'queries'

import { INSTITUTION_ID } from '../BarefootFire.defaults'

export const AccountList = memo(function AccountList(): React.JSX.Element {
  const { data: accounts, isPending } = useListAccountsInInstitution({ id: INSTITUTION_ID })

  if (isPending) return <p>Loading...</p>

  if (!accounts) return <p>No accounts found</p>

  return (
    <>
      {accounts.map((account) => (
        <CollapsibleSection
          key={account.id}
          title={account.title}
          insight={account.current_balance?.toFixed(0)}
          as="h6"
        >
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

function TransactionAccountItem({ transactionAccount }: TransactionAccountItemProps): React.JSX.Element {
  return (
    <div className="fire-section-item">
      <div>{transactionAccount.name}</div>
      <div>{transactionAccount.current_balance?.toFixed(0)}</div>
    </div>
  )
}
