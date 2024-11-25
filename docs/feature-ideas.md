# Feature Ideas

- Categories: group the categories into buckets
- Saved Searches: display the total income and expenses for the tax
- Labels: group the labels into themes: subscription, tax, income, etc
- Category Rules: display the auto-categorisation rule to allow for a quick review.
- Institutions: list the active institutions

## Questions

- Is it possible to forecast using this API?
- What are events and how can I use them?
- What is the difference between events in user and scenario?
- What is the difference between accounts and transaction accounts?
  - The account is the user's bank account
  - Transaction accounts live within the user's bank account
    - credit card
    - debt card
    - savings
    - mortgage
  - There two types of accounts:
    - institution, typed as "bank"
    - pocketsmith, where you can create a custom type, such as: property, stocks and vehicle
- How can I use the scenario events to determine the various financial outcomes?
- How do I specify `per_page` as a query parameter for the paginated resource? For example `transactions?page=3&per_page=500`.

## Actions

- Explore [parse-link-header](https://github.com/thlorenz/parse-link-header) to handle pagination more elegantly.
- Modify the transaction api to include the `per_page` query parameter.
- Figure out how the budgeting data works.
- Figure out how the events data works.
- Figure out how I might use the "budgeting" data for my barefoot fire dashboard
- Figure out how I might use the "event" data for my barefoot fire dashboard
