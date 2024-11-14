import { AccountsApi } from "./endpoints/accounts";
import { AttachmentsApi } from "./endpoints/attachments";
import { BudgetingApi } from "./endpoints/budgeting";
import { CategoriesApi } from "./endpoints/categories";
import { CategoryRulesApi } from "./endpoints/categoryRules";
import { Configuration } from "./shared/configuration";
import { CurrenciesApi } from "./endpoints/currencies";
import { EventsApi } from "./endpoints/events";
import { InstitutionsApi } from "./endpoints/institutions";
import { LabelsApi } from "./endpoints/labels";
import { SavedSearchesApi } from "./endpoints/savedSearches";
import { TimeZonesApi } from "./endpoints/timeZones";
import { TransactionAccountsApi } from "./endpoints/transactionAccounts";
import { TransactionsApi } from "./endpoints/transactions";
import { UsersApi } from "./endpoints/users";

export function createPocketSmithApi(pocketSmithApiKey: string) {
	const configuration = new Configuration({ apiKey: pocketSmithApiKey });
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
	};
}
