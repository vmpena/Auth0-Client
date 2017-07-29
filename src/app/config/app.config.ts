

export class Config {

    static apiEndpoint = 'http://testdocs.azurewebsites.net/api/documents';

    static tokenEndpoint = 'https://testdocs.auth0.com/oauth/token';

    static grant_token = {
        "client_id": "?????",
        "client_secret": "?????",
        "audience": "http://testdocs.azurewebsites.net/",
        "grant_type": "client_credentials"
    };

    static AUTH_CONFIG: AuthConfig = {
          clientID: '??????',
          domain: 'testdocs.auth0.com',
          callbackURL: 'http://localhost:4200/callback',
          apiUrl: 'http://testdocs.azurewebsites.net/'
    };
}

interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
    apiUrl: string;
}
