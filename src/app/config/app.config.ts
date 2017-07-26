

export class Config {

    static apiEndpoint = 'https://api.occwatch.com/api/test';

    static tokenEndpoint = 'https://occwatch.auth0.com/oauth/token';

    static grant_token = {
        "client_id": "gGppfae7TZMOG9Po9u98XhzfWmgaQ50M",
        "client_secret": "ZVVwNuZyx8GymKko62q41cBg7LExUD8FH0LXgyD5duVuZ_POZsASjlg8x3HNV_Jk",
        "audience": "https://api.occwatch.com",
        "grant_type": "client_credentials"
    };

    static AUTH_CONFIG: AuthConfig = {
          clientID: 'PG4TyD0Bi3EHdUYam5ZDdCSpgZiMNLeT',
          domain: 'occwatch.auth0.com',
          callbackURL: 'http://localhost:4200/callback',
          apiUrl: 'https://api.occwatch.com'
    };
}

interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
    apiUrl: string;
}
