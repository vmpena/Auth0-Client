import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { HttpClientService } from "app/service/httpclient.service";
import { Http, Headers, RequestOptions } from '@angular/http';
import { StorageService } from '../service/storage.service';
import { Config } from '../config/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: string;
  list: Array<any> = [];

  constructor(public auth: AuthService, private httpClient: HttpClientService, private storage: StorageService, private http: Http) { }

  ngOnInit() {
    this.getToken();
  }

  getToken() {
    console.log("Inside getToken()", Config.tokenEndpoint);

    this.httpClient.post(Config.tokenEndpoint, Config.grant_token, false).subscribe(response =>
    {
      this.token = response.access_token;

      console.log(this.token);

      this.storage.put('token', response.access_token);
      this.getDocuments();
    });
  }

  getDocuments(): void {
    this.httpClient.get(Config.apiEndpoint, true).subscribe(response => {
      // Gets the document list
      debugger;
      console.log(response);
      this.list = response;
    });
  }
}
