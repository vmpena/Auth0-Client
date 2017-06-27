

export class Config {

    static apiEndpoint = 'http://localhost:5000/api/test';

    static tokenEndpoint = 'https://vmpena.auth0.com/oauth/token';

    static grant_token = {
        "client_id": "PG4TyD0Bi3EHdUYam5ZDdCSpgZiMNLeT",
        "client_secret": "FAw-Z0JD34_p4j07Wvpp-OjLABdhNS4PvccWNt9u-0LxI2mHCYAxxBiuwmAXGy_V",
        "audience": "https://api.vmpena.com",
        "grant_type": "client_credentials"
    };

    static AUTH_CONFIG: AuthConfig = {
          clientID: 'PG4TyD0Bi3EHdUYam5ZDdCSpgZiMNLeT',
          domain: 'vmpena.auth0.com',
          callbackURL: 'http://localhost:4200/callback',
          apiUrl: 'https://api.vmpena.com'
    };
}

interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
    apiUrl: string;
}