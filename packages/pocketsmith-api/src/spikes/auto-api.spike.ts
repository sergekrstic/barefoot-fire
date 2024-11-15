import api from "api";

export async function runScript(pocketSmithApiKey: string): Promise<void> {
	// Generate the SDK on the fly using the with the API key
	try {
		const sdk = api("@pocketsmith/v2.0#3572nl100gn9o");
		sdk.auth(pocketSmithApiKey);
		const response = await sdk.getMe();
		console.log(response.data);
	} catch (err) {
		console.error(err);
	}
}
