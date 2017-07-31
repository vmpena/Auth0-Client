

export class Config {

    // static apiEndpoint = 'http://testdocs.azurewebsites.net/api/documents';
    //
    // static tokenEndpoint = 'https://testdocs.auth0.com/oauth/token';
    //
    // static grant_token = {
    //     "client_id": "z0yZYgJJWBCjl3k1YaitcApGjJsSt6id",
    //     "client_secret": "xKiDj07A2aN3v6rWC2aB2nNPrVFPuFvRGp30iDiYP_3ApIT5KXsFwzPO7G9Ybu8T",
    //     "audience": "http://testdocs.azurewebsites.net/",
    //     "grant_type": "client_credentials"
    // };

    static apiEndpoint = 'https://api.occwatch.com/api/test';

    static tokenEndpoint = 'https://occwatch.auth0.com/oauth/token';

    static grant_token = {
      "client_id": "4070IZv1wBfKiFIprDw3oCv4HomjLsAJ",
      "client_secret": "pf1wM_FubMmKK3J9-yoK2n4NM15T4knHS0Gj9k5dSybQJkU7hSyrNwXpIycXpnQ0",
      "audience": "https://api.occwatch.com/",
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
