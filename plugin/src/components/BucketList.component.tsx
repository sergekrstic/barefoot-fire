import { CollapsibleSection } from 'components'

export function BucketListComponent(): JSX.Element {
  return (
    <CollapsibleSection title="Buckets" as="h5">
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
    </CollapsibleSection>
  )
}
