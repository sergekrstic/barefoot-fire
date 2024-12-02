import { memo } from 'react'
import { useCategoryRules } from 'queries'

export const CategoryRuleList = memo(function CategoryRuleList(): JSX.Element {
  const { data: categoryRules, isLoading } = useCategoryRules()

  if (isLoading) return <p>Loading...</p>

  if (!categoryRules) return <p>No categories rules found</p>

  return (
    <>
      {categoryRules.map((categoryRule) => (
        <div key={categoryRule.id}>{`${categoryRule.category?.title} - ${categoryRule.payee_matches}`}</div>
      ))}
    </>
  )
})
