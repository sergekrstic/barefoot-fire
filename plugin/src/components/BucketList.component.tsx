import { memo } from 'react'

export const BucketList = memo(function BucketList(): JSX.Element {
  return (
    <>
      <p>
        Income: <b>$1000</b>
      </p>
      <p>
        Emergency fund: <b>$1000</b>
      </p>
      <p>
        Expense: <b>$1000</b>
      </p>
      <p>
        Super: <b>$1000</b>
      </p>
      <p>
        Deposit: <b>$100,000,000</b>
      </p>
    </>
  )
})
