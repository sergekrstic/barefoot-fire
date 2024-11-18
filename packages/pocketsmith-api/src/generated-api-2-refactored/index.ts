import { Configuration } from './shared/configuration'
import {
  AccountsApi,
  AttachmentsApi,
  BudgetingApi,
  CategoriesApi,
  CategoryRulesApi,
  CurrenciesApi,
  EventsApi,
  InstitutionsApi,
  LabelsApi,
  SavedSearchesApi,
  TimeZonesApi,
  TransactionAccountsApi,
  TransactionsApi,
  UsersApi,
} from '../endpoints'

export * from './shared/configuration'
export * from './types/api.types'

export function createPocketSmithApi(pocketSmithApiKey: string) {
  const configuration = new Configuration({ apiKey: pocketSmithApiKey })
  return {
    users: new UsersApi(configuration),
    institutions: new InstitutionsApi(configuration),
    accounts: new AccountsApi(configuration),
    transactionAccounts: new TransactionAccountsApi(configuration),
    transactions: new TransactionsApi(configuration),
    categories: new CategoriesApi(configuration),
    categoryRules: new CategoryRulesApi(configuration),
    budgeting: new BudgetingApi(configuration),
    events: new EventsApi(configuration),
    attachments: new AttachmentsApi(configuration),
    labels: new LabelsApi(configuration),
    savedSearches: new SavedSearchesApi(configuration),
    currencies: new CurrenciesApi(configuration),
    timeZones: new TimeZonesApi(configuration),
  }
}
