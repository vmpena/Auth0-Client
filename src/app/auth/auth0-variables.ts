interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'BnZhTQlaracm93j5w2sNoAO1Xvr9No1X',
  domain: 'vmpena.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'https://api.vmpena.com'
};
 