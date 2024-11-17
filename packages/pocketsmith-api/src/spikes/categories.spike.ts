import { createPocketSmithApi } from "..";
import { Category } from "../types/api.types";

export async function runScript(pocketSmithApiKey: string): Promise<void> {
	try {
		const api = createPocketSmithApi(pocketSmithApiKey);
		// const response = await pocketSmithApi.users.meGet();
		// console.log(response);
		const userId = 85521;
		const response = await api.categories.usersIdCategoriesGet(userId);

		for (const category of response.data) {
			printCategoryTitle(category);
		}
		// console.log(response.data);
	} catch (err) {
		console.error(err);
	}
}

function printCategoryTitle(category: Category, depth = 0): void {
	console.log("  ".repeat(depth) + category.title);
	if (category.children) {
		for (const child of category.children) {
			printCategoryTitle(child, depth + 1);
		}
	}
}
