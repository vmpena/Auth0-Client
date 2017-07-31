"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var HttpClientService = (function () {
    function HttpClientService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    HttpClientService.prototype.get = function (endpoint, isSecured) {
        if (isSecured === void 0) { isSecured = true; }
        var headers = this.getHeaders(isSecured);
        return this.http.get(endpoint, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    HttpClientService.prototype.post = function (endpoint, data, isSecured) {
        if (isSecured === void 0) { isSecured = true; }
        var body = data;
        // console.log("-------- Inside httpClient.post ----------- ");
        // console.log("data: ", data);
        // console.log("endpoint", endpoint);
        if (typeof data === 'object' || data instanceof Array) {
            body = JSON.stringify(data);
        }
        var headers = this.getHeaders(isSecured);
        return this.http.post(endpoint, body, { headers: headers })
            .map(function (res) {
            // console.log("Inside http.post", res);
            return res.json();
        })
            .catch(this.handleError);
    };
    HttpClientService.prototype.getHeaders = function (isSecured) {
        var headers = new http_1.Headers();
        // console.log("isSecured: ", isSecured);
        if (isSecured) {
            var token = this.storageService.get('token');
            headers.append('Authorization', 'Bearer ' + token);
        }
        // headers.append('Accept', 'application/json');
        // headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        // console.log("Headers: ", headers);
        return headers;
    };
    HttpClientService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error("Error Message: ", errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return HttpClientService;
}());
HttpClientService = __decorate([
    core_1.Injectable()
], HttpClientService);
exports.HttpClientService = HttpClientService;
;
