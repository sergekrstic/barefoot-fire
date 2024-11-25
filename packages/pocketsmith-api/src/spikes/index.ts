/* Notes:

  contenders (ordered by downloads)
    - @openapitools/openapi-generator
    - typescript-json-schema
    - openapi-typescript
    - ts-json-schema-generator
    - tsoa
    - api

  npmTrends:
    - https://npmtrends.com/@openapitools/openapi-generator-cli-vs-api-vs-openapi-typescript-vs-ts-json-schema-generator-vs-tsoa-vs-typescript-json-schema

  sources
    - https://www.stefanwille.com/2021/05/2021-05-30-openapi-code-generator-for-typescript
    - https://github.com/pocketsmith/api/blob/master/openapi.json
    - https://developers.pocketsmith.com/reference/get_me-1
    - https://api.readme.dev/docs/installation
    - https://openapi-generator.tech/docs/installation

  thoughts
    - just use 'api' to explore
    - then use axios in the browser when ready create an app
    - otherwise it is most likely too much unnecessary work

*/

import { config } from './config'

// // import { runScript } from './accounts.get-the-account.spike.ts'
// // import { runScript } from './accounts.list-accounts-in-institution.spike'
// // import { runScript } from './accounts.list-accounts-in-user.spike'
// import { runScript } from './attachments.get-attachment.spike'
// import { runScript } from './attachments.list-attachment-in-transaction.spike'
// import { runScript } from './attachments.list-attachment-in-user.spike'
// import { runScript } from './budgeting.get-budget-summary-for-user.spike'
// import { runScript } from './budgeting.get-trend-analysis-for-user.spike'
import { runScript } from './budgeting.list-budget-for-user.spike'
// // import { runScript } from './categories.get-a-category.spike.ts'
// // import { runScript } from './categories.list-categories-in-user.spike'
// // import { runScript } from './category-rules.list-category-rules-in-user.spike'
// // import { runScript } from './currencies.get-currency.spike'
// // import { runScript } from './currencies.list-currencies.spike'
// import { runScript } from './events.get-event.spike'
// import { runScript } from './events.list-events-in-scenario.spike'
// import { runScript } from './events.list-events-in-user.spike'
// // import { runScript } from './institutions.get-institution.spike'
//// import { runScript } from './institutions.list-institution-in-user.spike.ts'
// // import { runScript } from './labels.list-labels-in-user.spike'
// // import { runScript } from './saved-searches.list-saved-searches-in-user.spike'
// // import { runScript } from './time-zones.list-time-zones.spike'
// // import { runScript } from './transaction-accounts.get-the-transaction-account.spike'
// // import { runScript } from './transaction-accounts.list-transaction-accounts-in-user.spike.ts'
// // import { runScript } from './transactions.get-a-transaction.spike'
// // import { runScript } from './transactions.list-transactions-in-account.spike'
// // import { runScript } from './transactions.list-transactions-in-categories.spike'
// // import { runScript } from './transactions.list-transactions-in-transaction-account.spike.ts'
// // import { runScript } from './transactions.list-transactions-in-user.spike.ts'
// // import { runScript } from './users.get-authorised-user.spike'
// // import { runScript } from './users.get-user.spike'

try {
  runScript(config)
} catch (err) {
  console.error(err)
}
