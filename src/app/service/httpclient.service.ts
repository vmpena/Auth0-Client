import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { StorageService } from './storage.service';
import 'rxjs/Rx';

@Injectable()
export class HttpClientService {

    constructor(public http: Http, public storageService: StorageService) {
    }

    get(endpoint: string, isSecured = true) {
        const headers = this.getHeaders(isSecured);

        return this.http.get(endpoint, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    post(endpoint: string, data: any, isSecured = true) {
        let body = data;

        console.log("-------- Inside httpClient.post ----------- ");
        console.log("data: ", data);
        console.log("endpoint", endpoint);

        if (typeof data === 'object' || data instanceof Array) {
            body = JSON.stringify(data);
        }

        const headers = this.getHeaders(isSecured);

        return this.http.post(endpoint, body, { headers: headers })
            .map((res: Response) => {
                console.log("Inside http.post", res);
                return res.json();
            })
            .catch(this.handleError);
    }

    private getHeaders(isSecured: boolean): Headers {
        const headers = new Headers();

        console.log("isSecured: ", isSecured);

        if (isSecured) {
            const token = this.storageService.get('token');
            headers.append('Authorization', 'Bearer ' + token);
        }
        // headers.append('Accept', 'application/json');
        // headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        console.log("Headers: ", headers);

        return headers;
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error("Error Message: ", errMsg);
        return Observable.throw(errMsg);
    }
};
