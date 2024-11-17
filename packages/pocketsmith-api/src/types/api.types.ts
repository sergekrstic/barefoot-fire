export interface ModelError {
	// A message describing the error that occurred.
	error?: string;
}

export interface Period {
	// The start date of the period.
	start_date?: string;

	// The end date of the period.
	end_date?: string;

	// The currency of the period.
	currency_code?: string;

	// The sum of all actuals (transactions) in the period.
	actual_amount?: number;

	// The sum of all forecast sources (budget events) in the period, for comparison against the actual amount
	forecast_amount?: number;

	// This attribute tracks the amount that has been refunded or deducted to the actual amount. When a category is set to \"always expense\", any credit transactions are treated as refunds and when set to \"always income\", any debit transactions are treated as deductions.
	refund_amount?: number;

	// Whether this period is current, such that the current date (in the user\'s time zone) falls within the date range.
	current?: boolean;

	// Whether the budget has been exceeded in the period.
	over_budget?: boolean;

	// Whether the budget has not been exceeded in the period.
	under_budget?: boolean;

	// How much the budget has been exceeded by in the period.
	over_by?: number;

	// How much there is left in the budget for the period.
	under_by?: number;

	// The percentage of the budget that has been used in the period.
	percentage_used?: number;
}

export interface Account {
	// The unique identifier of the account.
	id?: number;

	// The title of the account.
	title?: string;

	// The currency code for the account.
	currency_code?: string;

	// The type of the account.
	type?: AccountTypeEnum;

	// Whether the account is a net worth asset.
	is_net_worth?: boolean;

	primary_transaction_account?: TransactionAccount;

	primary_scenario?: Scenario;

	// All transaction accounts that compose the account, including the primary.
	transaction_accounts?: Array<TransactionAccount>;

	// All scenarios that compose the account, including the primary.
	scenarios?: Array<Scenario>;

	// When the account was created.
	created_at?: string;

	// When the account was last updated.
	updated_at?: string;

	// The current balance of the account.
	current_balance?: number;

	// The date of the current balance.
	current_balance_date?: string;

	// The current balance of the account in the user's base currency.
	current_balance_in_base_currency?: number;

	// The exchange rate between the account's currency and the user's base currency,
	// when different.If the currencies are the same, null is returned.
	current_balance_exchange_rate?: number;

	// The current safe balance, if safe balance is activated on the account. If safe
	// balance is not activated, then null is returned.
	safe_balance?: number;

	// The current safe balance in the user\'s base currency, if safe balance is activated
	// on the account.If safe balance is not activated, then null is returned.
	safe_balance_in_base_currency?: number;
}

export const AccountTypeEnum = {
	Bank: "bank",
	Credits: "credits",
	Cash: "cash",
	Stocks: "stocks",
	Mortgage: "mortgage",
	Loans: "loans",
	Vehicle: "vehicle",
	Property: "property",
	Insurance: "insurance",
	OtherAsset: "other_asset",
	OtherLiability: "other_liability",
} as const;

export type AccountTypeEnum =
	(typeof AccountTypeEnum)[keyof typeof AccountTypeEnum];

export interface AccountsIdDeleteRequest {
	// A new title for the account.
	title?: string;

	// A new currency code for the account.
	currency_code?: string;

	// The type of the account.
	type?: AccountsIdDeleteRequestTypeEnum;

	// Whether the account is a net worth account.
	is_net_worth?: boolean;
}

export const AccountsIdDeleteRequestTypeEnum = {
	Bank: "bank",
	Credits: "credits",
	Cash: "cash",
	Loans: "loans",
	Mortgage: "mortgage",
	Stocks: "stocks",
	Vehicle: "vehicle",
	Property: "property",
	Insurance: "insurance",
	OtherAsset: "other_asset",
	OtherLiability: "other_liability",
} as const;

export type AccountsIdDeleteRequestTypeEnum =
	(typeof AccountsIdDeleteRequestTypeEnum)[keyof typeof AccountsIdDeleteRequestTypeEnum];

/**
 *
 * @export
 * @interface Attachment
 */
export interface Attachment {
	/**
	 * The unique identifier of the attachment
	 * @type {number}
	 * @memberof Attachment
	 */
	id?: number;
	/**
	 * The title of the attachment. If blank or not provided, the title will be derived from the file name.
	 * @type {string}
	 * @memberof Attachment
	 */
	title?: string;
	/**
	 * The file name of the attachment.
	 * @type {string}
	 * @memberof Attachment
	 */
	file_name?: string;
	/**
	 * The type of attachment.
	 * @type {string}
	 * @memberof Attachment
	 */
	type?: string;
	/**
	 * The content type of the attachment.
	 * @type {string}
	 * @memberof Attachment
	 */
	content_type?: string;
	/**
	 *
	 * @type {AttachmentContentTypeMeta}
	 * @memberof Attachment
	 */
	content_type_meta?: AttachmentContentTypeMeta;
	/**
	 * The url of the attachment.
	 * @type {string}
	 * @memberof Attachment
	 */
	original_url?: string;
	/**
	 *
	 * @type {AttachmentVariants}
	 * @memberof Attachment
	 */
	variants?: AttachmentVariants;
	/**
	 * When the attachment was created.
	 * @type {string}
	 * @memberof Attachment
	 */
	created_at?: string;
	/**
	 * When the attachment was last updated.
	 * @type {string}
	 * @memberof Attachment
	 */
	updated_at?: string;
}
/**
 *
 * @export
 * @interface AttachmentContentTypeMeta
 */
export interface AttachmentContentTypeMeta {
	// The content type title of the attachment.
	title?: string;

	// The content type description of the attachment.
	description?: string;

	// The extension type of the attachment.
	extension?: string;
}

export interface AttachmentVariants {
	// The url of the large version of the attachment.
	large_url?: string;

	// The url of the thumb version of the attachment.
	thumb_url?: string;
}

export interface AttachmentsIdDeleteRequest {
	// The new title of the attachment. If the title is blank or not provided,
	// the server will derive a title from the file name.
	title?: string;
}

export interface BudgetAnalysis {
	// The start date of the budget analysis.
	start_date?: string;

	// The end date of the budget analysis.
	end_date?: string;

	// The currency of the budget analysis.
	currency_code?: string;

	// The total actual (transactions) amount across all periods.
	total_actual_amount?: number;

	// The average actual (transactions) amount across all periods.
	average_actual_amount?: number;

	// The total budgeted amount across all periods.
	total_forecast_amount?: number;

	// The average budgeted amount across all periods.
	average_forecast_amount?: number;

	// The total amount the budget was exceeded across all periods.
	total_over_by?: number;

	// The total amount the budget was under by across all periods.
	total_under_by?: number;

	// The period analyses that this budget analysis comprises.
	periods?: Array<Period>;
}

export interface BudgetAnalysisPackage {
	category?: Category;

	// Whether the expense budget analysis looks like a transfer to
	// the income budget analysis, based on a number of heuristics.
	is_transfer?: boolean;

	expense?: BudgetAnalysis;

	income?: BudgetAnalysis;
}

export interface CategoriesIdCategoryRulesPostRequest {
	// The keyword/s to match the transaction payees.
	payee_matches: string;

	// Apply the created category rule to all uncategorised transactions.
	apply_to_uncategorised?: boolean;

	// Apply the created category rule to all transactions.
	apply_to_all?: boolean;
}

export interface CategoriesIdDeleteRequest {
	// A new title for the category.
	title?: string;

	// A new CSS-style hex colour for the category.
	colour?: string;

	// The unique identifier of a parent category for the category, making this category a child of that category.
	parent_id?: number;

	// Set the category as a transfer category.
	is_transfer?: boolean;

	// Set the category as a bill category.
	is_bill?: boolean;

	// Set the category to be rolled up into its parent category.
	roll_up?: boolean;

	// Set the refund behaviour of the category.
	refund_behaviour?: CategoriesIdDeleteRequestRefundBehaviourEnum;
}

export const CategoriesIdDeleteRequestRefundBehaviourEnum = {
	DebitsAreDeductions: "debits_are_deductions",
	CreditsAreRefunds: "credits_are_refunds",
	Null: "null",
} as const;

export type CategoriesIdDeleteRequestRefundBehaviourEnum =
	(typeof CategoriesIdDeleteRequestRefundBehaviourEnum)[keyof typeof CategoriesIdDeleteRequestRefundBehaviourEnum];

export interface Category {
	// The unique identifier of the category.
	id?: number;

	// The title of the category.
	title?: string;

	// The colour for the category.
	colour?: string;

	// The category\'s child categories.
	children?: Array<Category>;

	// The unique identifier of the parent category of this category,
	// or null if this category has no parent(i.e.is a top - level category)
	parent_id?: number;

	// Whether this category has been marked as a transfer category.
	is_transfer?: boolean;

	// Whether the category is a bill category. A bill category is when budgeted amounts
	// are normally spent at once, instead of spread across a budgeting period.This category
	// will be included in the bill reminder email when set to true.
	is_bill?: boolean;

	// Whether the category's budget is rolled up into its parent category, if a parent category is present.
	roll_up?: boolean;

	// How the category's refunds or deductions should be reported on.
	refund_behaviour?: CategoryRefundBehaviourEnum;

	// When the category was created.
	created_at?: string;

	// When the category was last updated.
	updated_at?: string;
}

export const CategoryRefundBehaviourEnum = {
	DebitsAreDeductions: "debits_are_deductions",
	CreditsAreRefunds: "credits_are_refunds",
	Null: "null",
} as const;

export type CategoryRefundBehaviourEnum =
	(typeof CategoryRefundBehaviourEnum)[keyof typeof CategoryRefundBehaviourEnum];

export interface CategoryRule {
	category?: Category;

	// The unique identifier of the category rule.
	id?: number;

	// The keyword/s to match the transactions payees.
	payee_matches?: string;

	// When the category rule was created.
	created_at?: string;

	// When the category rule was last updated.
	updated_at?: string;
}

export interface Currency {
	// The ISO 4217 or unofficial currency code.
	id?: string;

	// The name of the currency.
	name?: string;

	// The number of digits after the minor unit separator.
	minor_unit?: number;

	separators?: CurrencySeparators;

	// The symbol of the currency.
	symbol?: string;
}

export interface CurrencySeparators {
	// The separator used in the major unit.
	major?: string;

	// The separator used for the minor unit.
	minor?: string;
}

export interface Event {
	// The unique identifier of the event.
	id?: string;

	category?: Category;

	scenario?: Scenario;

	// The amount of the event.
	amount?: number;

	// The amount of the event in the user\'s base currency.
	amount_in_base_currency?: number;

	// The currency code of the event.
	currency_code?: string;

	// The date of the event.
	date?: string;

	// The CSS hex-style colour of the event.
	colour?: string;

	// The note of the event.
	note?: string;

	// The repeat type of the event.
	repeat_type?: EventRepeatTypeEnum;

	// The repeat interval of how often the event takes place.
	repeat_interval?: number;

	// The unique identifier of the series that the event belongs to.
	series_id?: number;

	// The unique identifier of the series followed by the series\'s start date.
	series_start_id?: string;

	// Whether the event repeats and does not have an end date.
	infinite_series?: boolean;
}

export const EventRepeatTypeEnum = {
	Once: "once",
	Daily: "daily",
	Weekly: "weekly",
	Fortnightly: "fortnightly",
	Monthly: "monthly",
	Yearly: "yearly",
	EachWeekday: "each weekday",
} as const;

export type EventRepeatTypeEnum =
	(typeof EventRepeatTypeEnum)[keyof typeof EventRepeatTypeEnum];

export interface EventsIdDeleteRequest {
	// Whether the update applies only to this event, to all events within the series
	// from this event or to all events within the series.
	behaviour: EventsIdDeleteRequestBehaviourEnum;

	// The amount of the event. A positive amount is a credit, and a negative amount is a debit.
	amount?: number;

	// The repeat type of the event.
	repeat_type?: EventsIdDeleteRequestRepeatTypeEnum;

	// The repeat interval of the event.
	repeat_interval?: number;

	// A note for the event.
	note?: string;
}

export const EventsIdDeleteRequestBehaviourEnum = {
	One: "one",
	Forward: "forward",
	All: "all",
} as const;

export type EventsIdDeleteRequestBehaviourEnum =
	(typeof EventsIdDeleteRequestBehaviourEnum)[keyof typeof EventsIdDeleteRequestBehaviourEnum];
export const EventsIdDeleteRequestRepeatTypeEnum = {
	Once: "once",
	Daily: "daily",
	Weekly: "weekly",
	Fortnightly: "fortnightly",
	Monthly: "monthly",
	Yearly: "yearly",
	EachWeekday: "each weekday",
} as const;

export type EventsIdDeleteRequestRepeatTypeEnum =
	(typeof EventsIdDeleteRequestRepeatTypeEnum)[keyof typeof EventsIdDeleteRequestRepeatTypeEnum];

export interface Institution {
	// The currency code of the institution.
	currency_code?: string;

	// The title of the institution.
	title?: string;

	// When the institution was last updated.
	updated_at?: string;

	// When the institution was created.
	created_at?: string;

	// The unique identifier of the institution.
	id?: number;
}

export interface InstitutionsIdDeleteRequest {
	// A new title for the institution.
	title?: string;

	// A new currency code for the institution.
	currency_code?: string;
}

export interface SavedSearch {
	// The unique identifier of the saved search.
	id?: number;

	// The title of the saved search.
	title?: string;
	// When the saved search was created.
	created_at?: string;

	// When the saved search was last updated.
	updated_at?: string;
}

export interface Scenario {
	// The unique identifier of the scenario.
	id?: number;

	// The title of the scenario.
	title?: string;

	// A short description of what the scenario is modelling.
	description?: string;

	// The amount of interest to apply to the balance. Will apply periodically
	// depending on what `interest_rate_repeat_id` is set to.
	interest_rate?: number;

	// A number representing how often the interest should be applied. 0 is used
	// for no interest, 2 is weekly, 3 is fortnightly, 4 is monthly, 5 is yearly
	// and 7 for quarterly.
	interest_rate_repeat_id?: number;

	// The type of the scenario.
	type?: ScenarioTypeEnum;

	"minimum-value"?: number;

	"maximum-value"?: number;

	// For goals, the date that they should be achieved by.
	achieve_date?: string;

	// The starting balance of the scenario.
	starting_balance?: number;

	// The date of the starting balance.
	starting_balance_date?: string;

	// The closing balance of the scenario.
	closing_balance?: number;

	// The date of the closing balance.
	closing_balance_date?: string;

	// The current balance of the scenario.
	current_balance?: number;

	// The date of the current balance.
	current_balance_date?: string;

	// The current balance of the scenario in the user's base currency.
	current_balance_in_base_currency?: number;

	// The exchange rate between the scenario's currency and the user's base
	// currency, when different. If the currencies are the same, null is returned.
	current_balance_exchange_rate?: number;

	// The current safe balance in the user's base currency, if safe balance is
	// activated on the account associated with the scenario. If safe balance
	// is not activated, then null is returned.
	safe_balance?: number;

	// The current safe balance in the user's base currency, if safe balance is activated
	// on the account associated with the scenario.If safe balance is not available,
	// then null is returned.
	safe_balance_in_base_currency?: number;

	// When the scenario was created.
	created_at?: string;

	// When the scenario was last updated.
	updated_at?: string;
}

export const ScenarioTypeEnum = {
	NoInterest: "no-interest",
	Savings: "savings",
	Debt: "debt",
} as const;

export type ScenarioTypeEnum =
	(typeof ScenarioTypeEnum)[keyof typeof ScenarioTypeEnum];

export interface ScenariosIdEventsGetRequest {
	// The unique identifier of the category for the event.
	category_id: number;

	// The starting date of the event.
	date: string;

	// The amount of the event. A positive amount is a credit, and a negative amount is a debit.
	amount: number;

	// The repeat type of the event.
	repeat_type: ScenariosIdEventsGetRequestRepeatTypeEnum;

	// The repeat interval of the event.
	repeat_interval?: number;

	// A note for the event.
	note?: string;
}

export const ScenariosIdEventsGetRequestRepeatTypeEnum = {
	Once: "once",
	Daily: "daily",
	Weekly: "weekly",
	Fortnightly: "fortnightly",
	Monthly: "monthly",
	Yearly: "yearly",
	EachWeekday: "each weekday",
} as const;

export type ScenariosIdEventsGetRequestRepeatTypeEnum =
	(typeof ScenariosIdEventsGetRequestRepeatTypeEnum)[keyof typeof ScenariosIdEventsGetRequestRepeatTypeEnum];

export interface TimeZone {
	// The name of the time zone.
	name?: string;

	// The time zone\'s UTC offset in seconds.
	utc_offset?: number;

	// The formatted name of the time zone.
	formatted_name?: string;

	// The formatted offset of the time zone.
	formatted_offset?: string;

	// The abbreviation of the time zone.
	abbreviation?: string;

	// The tz database name of the time zone.
	identifier?: string;
}

export interface TransactionAccount {
	id?: number;

	name?: string;

	number?: string;

	current_balance?: number;

	current_balance_date?: string;

	// The current balance of the transaction account in the user's base currency.
	current_balance_in_base_currency?: number;

	// The exchange rate between the transaction account's currency and the user's
	// base currency, when different.If the currencies are the same, null is returned.
	current_balance_exchange_rate?: number;

	// The current safe balance, if safe balance is activated and available for the
	// transaction account.If safe balance is not available, then null is returned.
	safe_balance?: number;

	// The current safe balance in the user's base currency, if safe balance is activated
	// and available for the transaction account.If safe balance is not available, then
	// null is returned.
	safe_balance_in_base_currency?: number;

	starting_balance?: number;

	starting_balance_date?: string;

	created_at?: string;

	updated_at?: string;

	institution?: Institution;

	// The currency that the account is in. This is determined by the account that the
	// transaction account belongs to.
	currency_code?: string;

	// The type of the transaction account.
	type?: TransactionAccountTypeEnum;
}

export const TransactionAccountTypeEnum = {
	Bank: "bank",
	Credits: "credits",
	Cash: "cash",
	Stocks: "stocks",
	Mortgage: "mortgage",
	Loans: "loans",
	Vehicle: "vehicle",
	Property: "property",
	Insurance: "insurance",
	OtherAsset: "other_asset",
	OtherLiability: "other_liability",
} as const;

export type TransactionAccountTypeEnum =
	(typeof TransactionAccountTypeEnum)[keyof typeof TransactionAccountTypeEnum];

export interface TransactionAccountsIdGetRequest {
	// The unique identifier of a new institution for the transaction account.
	institution_id?: number;

	// The starting balance amount of the transaction account.
	starting_balance?: number;

	// The starting balance date of the transaction account.
	starting_balance_date?: string;
}

export interface TransactionAccountsIdTransactionsGetRequest {
	// The payee/merchant of the transaction.
	payee: string;

	// The amount of the transaction. A positive amount is a credit, and a negative amount is a debit.
	amount: number;

	// The date when the transaction occurred.
	date: string;

	// Whether the transaction should be indicated as a transfer.
	is_transfer?: boolean;

	// A set of comma-separated labels for the transaction.
	labels?: string;

	// The unique identifier of a category for the transaction.
	category_id?: number;

	// A note for the transaction.
	note?: string;

	// A memo for the transaction.
	memo?: string;

	// A cheque number for the transaction.
	cheque_number?: string;

	// Whether the transaction needs to be reviewed or not.
	needs_review?: boolean;
}

export interface Transaction {
	cheque_number?: string;

	// Whether the transaction is a debit or a credit
	type?: TransactionTypeEnum;

	memo?: string;

	// The payee/merchant of the transaction.
	payee?: string;

	amount?: number;

	// The amount of the transaction in the user\'s base currency.
	amount_in_base_currency?: number;

	// The date the transaction took place.
	date?: string;

	// Whether the transaction is a transfer.
	is_transfer?: boolean;

	category?: Category;

	note?: string;

	labels?: Array<string>;

	// The unique identifier of the transaction.
	id?: number;

	// The payee the transaction was created with.
	original_payee?: string;

	// Where the transaction came from.
	upload_source?: string;

	// The closing balance of the account at the transaction.
	closing_balance?: number;

	transaction_account?: TransactionAccount;

	// The status of the transaction. Pending transactions are temporary and may be
	// superseded later by their posted counterparts, which are permanent.
	status?: TransactionStatusEnum;

	// Whether the transaction needs to be reviewed.
	needs_review?: boolean;

	// When the transaction was created.
	created_at?: string;

	// When the transaction was last updated.
	updated_at?: string;
}

export const TransactionTypeEnum = {
	Debit: "debit",
	Credit: "credit",
} as const;

export type TransactionTypeEnum =
	(typeof TransactionTypeEnum)[keyof typeof TransactionTypeEnum];
export const TransactionStatusEnum = {
	Pending: "pending",
	Posted: "posted",
} as const;

export type TransactionStatusEnum =
	(typeof TransactionStatusEnum)[keyof typeof TransactionStatusEnum];

export interface TransactionsIdAttachmentsGetRequest {
	// The unique identifier of the attachment.
	attachment_id?: number;
}

export interface TransactionsIdDeleteRequest {
	// A new memo for the transaction.
	memo?: string;

	// A new cheque number for the transaction.
	cheque_number?: string;

	// A new payee for the transaction.
	payee?: string;

	// A new amount for the transaction.
	amount?: number;

	// A new date for the transaction.
	date?: string;

	// Whether the transaction is a transfer or not.
	is_transfer?: boolean;

	// The unique identifier of a new category for the transaction.
	category_id?: number;

	// A new note for the transaction.
	note?: string;

	// Whether the transaction needs to be reviewed or not.
	needs_review?: boolean;

	// A new comma-separated set of labels for the transaction.
	labels?: string;
}

export interface User {
	// The unique identifier of the user.
	id?: number;

	// The user\'s username.
	login?: string;

	// The full name of the user, although not all users will have a name set.
	name?: string;

	// The user\'s email address.
	email?: string;

	// The URL to the user\'s avatar.
	avatar_url?: string;

	// Whether the user has opted in to beta features.
	beta_user?: boolean;

	// The user\'s time zone.
	time_zone?: string;

	// The day of the week the user wishes their calendars to start on. A number
	//between 0 and 6, where 0 is Sunday and 6 is Saturday.
	week_start_day?: number;

	// Whether the user wants to review new transactions, transfer transactions
	// or categorisation.
	is_reviewing_transactions?: boolean;

	// The user\'s base currency.
	base_currency_code?: string;

	// Whether the user wants to see all accounts in their base currency instead of
	// the native account currency.
	always_show_base_currency?: boolean;

	// Whether the user has multiple currencies in use across their account.
	using_multiple_currencies?: boolean;

	// The user\'s total number of available accounts.
	available_accounts?: number;

	// The user\'s total number of available budgets.
	available_budgets?: number;

	// When the user\'s forecast was last updated.
	forecast_last_updated_at?: string;

	// When the user\'s forecast was last accessed.
	forecast_last_accessed_at?: string;

	// The date that the user\'s forecast starts.
	forecast_start_date?: string;

	// The date that the user\'s forecast ends.
	forecast_end_date?: string;

	// Whether the user\'s forecast recalculation should be deferred.
	forecast_defer_recalculate?: boolean;

	// Whether the user\'s forecast needs to be recalculated.
	forecast_needs_recalculate?: boolean;

	// When the user last logged into PocketSmith.
	last_logged_in_at?: string;

	// When the user last interacted with PocketSmith, via any application or the API.
	last_activity_at?: string;

	// When the user signed up.
	created_at?: string;

	// When the user was last updated.
	updated_at?: string;
}

export interface UsersIdAccountsGetRequest {
	// List the account objects in their new display order.
	accounts: Array<Account>;
}

export interface UsersIdAccountsGetRequest1 {
	// The ID of the institution to create this account in.
	institution_id: number;

	// A title for the account.
	title: string;

	// A currency code for the account.
	currency_code: string;

	// The type of the account.
	type: UsersIdAccountsGetRequest1TypeEnum;
}

export const UsersIdAccountsGetRequest1TypeEnum = {
	Bank: "bank",
	Credits: "credits",
	Cash: "cash",
	Loans: "loans",
	Mortgage: "mortgage",
	Stocks: "stocks",
	Vehicle: "vehicle",
	Property: "property",
	Insurance: "insurance",
	OtherAsset: "other_asset",
	OtherLiability: "other_liability",
} as const;

export type UsersIdAccountsGetRequest1TypeEnum =
	(typeof UsersIdAccountsGetRequest1TypeEnum)[keyof typeof UsersIdAccountsGetRequest1TypeEnum];

export interface UsersIdAttachmentsGetRequest {
	// The title of the attachment. If the title is blank or not provided, the
	// title will derived from the file name.
	title?: string;

	// The file name of the attachment.
	file_name?: string;

	// The base64-encoded contents of the source file. The supported file types are
	// png, jpg, pdf, xls, xlsx, doc, docx.
	file_data?: string;
}

export interface UsersIdCategoriesGetRequest {
	// A title for the category.
	title: string;

	// A CSS-style hex colour for the category.
	colour?: string;

	// The unique identifier of a category to be the parent of this category.
	parent_id?: number;

	// Set the category as a transfer category.
	is_transfer?: boolean;

	// Set the category as a bill category.
	is_bill?: boolean;

	// Set the category to be rolled up into its parent category.
	roll_up?: boolean;

	// Set the refund behaviour of the category.
	refund_behaviour?: UsersIdCategoriesGetRequestRefundBehaviourEnum;
}

export const UsersIdCategoriesGetRequestRefundBehaviourEnum = {
	DebitsAreDeductions: "debits_are_deductions",
	CreditsAreRefunds: "credits_are_refunds",
	Null: "null",
} as const;

export type UsersIdCategoriesGetRequestRefundBehaviourEnum =
	(typeof UsersIdCategoriesGetRequestRefundBehaviourEnum)[keyof typeof UsersIdCategoriesGetRequestRefundBehaviourEnum];

export interface UsersIdGetRequest {
	///
	email?: string;

	// A new name for the user.
	name?: string;

	// A new time zone for the user.
	time_zone?: string;

	// The day of the week the user wishes their calendars to start on. A number
	// between 0 and 6, where 0 is Sunday and 6 is Saturday.
	week_start_day?: number;

	// Whether the user is a beta user, and wishes to try out new features.
	beta_user?: boolean;

	// A new base currency code for the user.
	base_currency_code?: string;

	// Whether the user wishes to have all monetary values converted to their base currency.
	always_show_base_currency?: boolean;
}

export interface UsersIdInstitutionsGetRequest {
	// A title for the institution.
	title: string;

	// A currency code for the institution.
	currency_code: string;
}
