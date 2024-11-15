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

import { createPocketSmithApi } from "../index";
import { pocketSmithApiKey } from "../config/keys.config";
import { runScript } from "./categories.spike";

(async function () {
	await runScript(pocketSmithApiKey);
})()
	.then(() => console.log("Completed successfully"))
	.catch(() => console.error("An error occurred"));
