"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var callback_component_1 = require("./callback/callback.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'callback', component: callback_component_1.CallbackComponent },
    { path: '**', redirectTo: '' }
];
