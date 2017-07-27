

export class Config {

    static apiEndpoint = 'https://api.occwatch.com/api/test';

    static tokenEndpoint = 'https://occwatch.auth0.com/oauth/token';

    static grant_token = {
        "client_id": "PdL1aqX75m2gGdYJvchsoqnItiICNTek",
        "client_secret": "ZYFy-goRhKjS5YlY2lVZ9pQ2FGDZ2zZqLvOTYEcZx37ZLeKq8vT2vr3THF_Ss4vg",
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
