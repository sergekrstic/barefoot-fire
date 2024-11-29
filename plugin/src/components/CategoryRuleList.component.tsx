import { useCategoryRules } from 'queries'
import { CollapsibleSection } from 'components'

export function CategoryRuleList(): JSX.Element {
  const { data: categoryRules, isLoading } = useCategoryRules()

  return (
    <CollapsibleSection title="Category Rules" as="h5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {categoryRules ? (
            <>
              {categoryRules.map((categoryRule) => (
                <div key={categoryRule.id}>{`${categoryRule.category?.title} - ${categoryRule.payee_matches}`}</div>
              ))}
            </>
          ) : (
            <p>No categories rules found</p>
          )}
        </>
      )}
    </CollapsibleSection>
  )
}
