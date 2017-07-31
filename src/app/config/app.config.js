"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = (function () {
    function Config() {
    }
    return Config;
}());
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
Config.apiEndpoint = 'https://api.occwatch.com/api/test';
Config.tokenEndpoint = 'https://occwatch.auth0.com/oauth/token';
Config.grant_token = {
    "client_id": "PdL1aqX75m2gGdYJvchsoqnItiICNTek",
    "client_secret": "ZYFy-goRhKjS5YlY2lVZ9pQ2FGDZ2zZqLvOTYEcZx37ZLeKq8vT2vr3THF_Ss4vg",
    "audience": "https://api.occwatch.com/",
    "grant_type": "client_credentials"
};
Config.AUTH_CONFIG = {
    clientID: '??????',
    domain: 'testdocs.auth0.com',
    callbackURL: 'http://localhost:4200/callback',
    apiUrl: 'http://testdocs.azurewebsites.net/'
};
exports.Config = Config;
