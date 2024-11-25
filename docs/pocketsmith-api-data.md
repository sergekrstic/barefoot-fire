# Pocketsmith API and data

- Users
  - Get the authorised user
  - Get the user
  - Update the user
- Institutions
  - Get the institution
  - Update the institution
  - Delete the institution
  - List institution in user
  - Create institution in user
- Accounts
  - Get the account
  - Update the account
  - Delete the account
  - List accounts in user
  - Update the display order of accounts in user
  - Create an account in user
  - List accounts in institution
- Transaction Accounts
  - Get the transaction account
  - Update transaction account
  - List transaction accounts in user
- Transactions
  - Get a transaction
  - Update a transaction
  - Delete a transaction
  - List transactions in user
  - List transactions in account
  - List transactions in categories
  - List transactions in transaction account
  - Create a transaction in transaction account
- Categories
  - Get a category
  - Delete a category
  - List categories in user
  - Create category in user
- Category Rules
  - List category rules in user
  - Create category rule in category
- Budgeting
  - List budget for user
  - Get budget summary for user
  - Get trend analysis for user
  - Delete forecast cache for user
- Events
  - Get event
  - Update event
  - Delete event
  - List events in user
  - List events in scenario
  - Create event in scenario
- Attachments
  - Get attachment
  - Update attachment
  - Delete attachment
  - List attachment in user
  - Create attachment in user
  - List attachment in transaction
  - Assign attachment in transaction
  - Unassign attachment in transaction
- Labels
  - List labels in user
- Saved Searches
  - List saved searches in user
- Currencies
  - List currencies
  - Get currency
- Time Zones
  - List time zones

## Feature Ideas

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
