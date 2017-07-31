"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("../config/app.config");
var HomeComponent = (function () {
    function HomeComponent(auth, httpClient, storage, http) {
        this.auth = auth;
        this.httpClient = httpClient;
        this.storage = storage;
        this.http = http;
        this.list = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getToken();
    };
    HomeComponent.prototype.getToken = function () {
        // console.log("Inside getToken()", Config.tokenEndpoint);
        // console.log("config.grant_Token()", Config.grant_token);
        var _this = this;
        this.httpClient.post(app_config_1.Config.tokenEndpoint, app_config_1.Config.grant_token, false).subscribe(function (response) {
            _this.token = response.access_token;
            _this.storage.put('token', response.access_token);
            _this.getDocuments();
        });
    };
    HomeComponent.prototype.getDocuments = function () {
        // console.log("------ Inside getDocuments(): ");
        var _this = this;
        // debugger;
        this.httpClient.get(app_config_1.Config.apiEndpoint, true).subscribe(function (response) {
            // Gets the document list
            // console.log(response);
            _this.list = response;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
