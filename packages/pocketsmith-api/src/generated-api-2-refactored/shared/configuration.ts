export interface ConfigurationParameters {
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>);
  username?: string;
  password?: string;
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>);
  basePath?: string;
  baseOptions?: any;
  formDataCtor?: new () => any;
}

export class Configuration implements ConfigurationParameters {
  // parameter for apiKey security
  apiKey: ConfigurationParameters['apiKey'];

  // parameter for basic security
  username: ConfigurationParameters['username'];

  // parameter for basic security
  password: ConfigurationParameters['password'];

  // parameter for oauth2 security
  accessToken: ConfigurationParameters['accessToken'];

  // override base path
  basePath: ConfigurationParameters['basePath'];

  // base options for axios calls
  baseOptions: ConfigurationParameters['baseOptions'];

  // The FormData constructor that will be used to create multipart form data
  // requests. You can inject this here so that execution environments that
  // do not support the FormData class can still run the generated client.
  formDataCtor: ConfigurationParameters['formDataCtor'];

  constructor(param: ConfigurationParameters = {}) {
    this.apiKey = param.apiKey;
    this.username = param.username;
    this.password = param.password;
    this.accessToken = param.accessToken;
    this.basePath = param.basePath;
    this.baseOptions = param.baseOptions;
    this.formDataCtor = param.formDataCtor;
  }

  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  public isJsonMime(mime: string): boolean {
    const jsonMime: RegExp = new RegExp(
      '^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$',
      'i',
    );
    return (
      mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json')
    );
  }
}
