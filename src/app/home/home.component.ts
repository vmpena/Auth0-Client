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
    console.log("Inside getToken() - tokenEndpoint", Config.tokenEndpoint);
    console.log("config.grant_Token()", Config.grant_token);

    this.httpClient.post(Config.tokenEndpoint, Config.grant_token, false).subscribe(response =>
    {
      this.token = response.access_token;

      this.storage.put('token', response.access_token);
      this.getDocuments();
    });
  }

  getDocuments(): void {
    // console.log("------ Inside getDocuments(): ");

    // debugger;

    this.httpClient.get(Config.apiEndpoint, true).subscribe(response => {
      // Gets the document list
      // console.log(response);
      this.list = response;
    });
  }
}
