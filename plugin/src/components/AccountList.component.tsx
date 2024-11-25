import { useAccounts } from 'queries'

export function AccountList(): JSX.Element {
  const { data: accounts, isLoading } = useAccounts()

  return (
    <>
      <h5>Accounts</h5>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {accounts ? (
            <>
              {accounts.map((account) => (
                <div key={account.id}>{account.title}</div>
              ))}
            </>
          ) : (
            <p>No accounts found</p>
          )}
        </>
      )}
    </>
  )
}
