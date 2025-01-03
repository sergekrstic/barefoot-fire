import { memo } from 'react'
import { useListCategoryRulesInUser } from 'queries'

export const CategoryRuleList = memo(function CategoryRuleList(): React.JSX.Element {
  const { data: categoryRules, isPending } = useListCategoryRulesInUser()

  if (isPending) return <p>Loading...</p>

  if (!categoryRules) return <p>No categories rules found</p>

  return (
    <>
      {categoryRules.map((categoryRule) => (
        <div key={categoryRule.id}>{`${categoryRule.category?.title} - ${categoryRule.payee_matches}`}</div>
      ))}
    </>
  )
})
