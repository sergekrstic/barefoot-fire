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

import api from 'api';
import { createPocketSmithApi } from './pocketsmith-api';

const pocketSmithApiKey =
  'bfbd40039424fa21fff330bd992572f87d4094692b401f2e0934c24b5bcb1d983f8a60e79343b1f94247e6ebda1be83bf8e7fd4a2deb3c2cd4cc5f4e7e598758';

async function runScript() {
  // Generate the SDK on the fly using the with the API key
  try {
    const sdk = api('@pocketsmith/v2.0#3572nl100gn9o');
    sdk.auth(pocketSmithApiKey);
    const response = await sdk.getMe();
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}

async function runScript2() {
  try {
    const pocketSmithApi = createPocketSmithApi(pocketSmithApiKey);
    // const response = await pocketSmithApi.users.meGet();
    // console.log(response);

    const response = await pocketSmithApi.categories.usersIdCategoriesGet(85521);
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}

(async function () {
  await runScript2();
})()
  .then(() => console.log('Completed successfully'))
  .catch(() => console.error('An error occurred'));
