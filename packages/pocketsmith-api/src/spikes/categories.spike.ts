import { createPocketSmithApi } from "..";

export async function runScript(pocketSmithApiKey: string): Promise<void> {
	try {
		const pocketSmithApi = createPocketSmithApi(pocketSmithApiKey);
		// const response = await pocketSmithApi.users.meGet();
		// console.log(response);

		const response =
			await pocketSmithApi.categories.usersIdCategoriesGet(85521);
		console.log(response.data);
	} catch (err) {
		console.error(err);
	}
}
