

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { StorageService } from './storage.service';
import 'rxjs/Rx';

@Injectable()
export class HttpClientService {

    constructor(
        public http: Http,
        public storageService: StorageService
    ) {
    }

    get(endpoint: string, routeName: string = '') {
        let headers = this.getHeaders();
        return this.http.get(endpoint, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(null);
            });
    }

    post(endpoint: string, data: any) {
        debugger;
        let body = data;
        if (typeof data === "object" || data instanceof Array) {
            body = JSON.stringify(data);
        }
        let headers = this.getHeaders();
        return this.http.post(endpoint, body, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch(err => {
                return Observable.throw(null)
            });
    }

    private getHeaders(): Headers {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        headers.append('Content-Type', 'application/json');

        return headers;
    }
}