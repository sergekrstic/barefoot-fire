# Feature Ideas

- [ ] Categories: group the categories into buckets
- [ ] Saved Searches: display the total income and expenses for the tax
- [ ] Labels: group the labels into themes: subscription, tax, income, etc
- [ ] Category Rules: display the auto-categorisation rule to allow for a quick review.
- [ ] Institutions: list the active institutions

## Dashboard features

The dashboard displays the current state of your bucket.

- [ ] Health status
  - [ ] Displays an overall financial health status and percentage trend
  - [ ] Health statuses include: exceeding target, on target, no change, failing target.
- [ ] Goals
  - [ ] Displays remaining time required to achieve any financial goals.
- [ ] Actions
  - [ ] Display a list of required actions to maintain financial health.
  - [ ] Action include: monthly barefoot review, yearly tax return, purchase goal, update failing financial plan.
- [ ] Buckets
  - [ ] Displays a breakdown of each bucket for the current month and previous two months in terms of percentage and dollar amount.
  - [ ] Within each buckets, the associated account's percentage and dollar amounts are also displayed.
  - [ ] Note your Grow bucket shows the amount in your super and investments accounts.
- [ ] Forecast
  - [ ] Shows a one year financial forecast as a graph designed to keep you motivated.
  - [ ] Allows you to select different scenarios to compare forecasts.
  - [ ] Displays the end of year difference between base and scenario forecast.
- [ ] Budgets
  - [ ] Display the roll-up and expanded budgets in percentage and dollar amounts.
- [ ] Keyboard shortcuts
  - [x] Open dashboard
  - [ ] Refresh dashboard
- [ ] Status bar
  - [ ] Display an icon reflect your financial health status.
- [ ] Notifications
  - [ ] Reminder to conduct monthly barefoot review.
  - [ ] Financial goal achieved.
  - [ ] Financial goal almost achieved in 1, 3 and 6 months.

## Questions

- [ ] Is it possible to forecast using this API?
- [ ] What are events and how can I use them?
- [ ] What is the difference between events in user and scenario?
- [x] What is the difference between accounts and transaction accounts?
  - The account is the user's bank account
  - Transaction accounts live within the user's bank account
    - credit card
    - debt card
    - savings
    - mortgage
  - There two types of accounts:
    - institution, typed as "bank"
    - pocketsmith, where you can create a custom type, such as: property, stocks and vehicle
- [ ] How can I use the scenario events to determine the various financial outcomes?
- [ ] How do I specify `per_page` as a query parameter for the paginated resource? For example `transactions?page=3&per_page=500`.

## Actions

- [ ] Explore [parse-link-header](https://github.com/thlorenz/parse-link-header) to handle pagination more elegantly.
- [ ] Modify the transaction api to include the `per_page` query parameter.
- [ ] Figure out how the budgeting data works.
- [ ] Figure out how the events data works.
- [ ] Figure out how I might use the "budgeting" data for my barefoot fire dashboard
- [ ] Figure out how I might use the "event" data for my barefoot fire dashboard
- [ ] Figure out how to normalise the data in `react-query`. This will reduce the memory footprint.

## Statusbar

- Phase I
  - Implement a React component to handle the status functionality
  - Add a timer to check is a new day has passed
  - Check if the new day is a Barefoot review night
  - Set the status item to yellow/orange to indicate a review is require
  - Keep the status yellow/orange for three days
  - After three days, revert the status to OK
- Phase II
  - Add state to record when the review was completed
  - Retrieve the state when the plugin opens
  - Allow the used to click the statusbar item to open popup menu
  - In the popup menu, allow the user to click button the indicate the review has been completed
  - Update the state to record the completed task
  - If the user exceeds the three day period, update the statusbar to 'red' indicated the review is overdue.
- Phase III
  - Figure out what additional functionality can be added.
