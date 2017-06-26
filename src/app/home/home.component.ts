import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { HttpClientService } from "app/service/httpclient.service";
import { Http, Headers, RequestOptions } from '@angular/http';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: string;
  endpoint: string = 'http://localhost:5000/api/test';
  constructor(public auth: AuthService, private httpClient: HttpClientService, private storage: StorageService, private http: Http) { }

  ngOnInit() {
    this.getToken();
  }


  getToken() {
    const tokenEndpoint = 'https://vmpena.auth0.com/oauth/token';
    const data = {
      "client_id": "b39yJfOa0Qt3HMTdNQN0xUil1cMoP8f1",
      "client_secret": "SA9hz6yAyCXo1UoQHAfuOQ7tM6gFdvnE4Bi-8pCxQf_pftpuG6ac2rsCGEB9q5Hg",
      "audience": "https://freeapi/",
      "grant_type": "client_credentials"
    };

    this.httpClient.post(tokenEndpoint, data).subscribe(response => {
      debugger;
      this.token = response.access_token;
      this.storage.put('token', response.access_token);
      this.getDocuments();
    });
  }

  getDocuments(): void {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    let token = this.token;
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({ headers: headers });

    this.http.get(this.endpoint, options).subscribe(response => {
      console.log(response);
    });
  }

}
