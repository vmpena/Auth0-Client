import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { AuthService } from './../auth/auth.service';
import 'rxjs/add/operator/map';
import { HttpClientService } from '../service/httpclient.service'
@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html'
})
export class PingComponent implements OnInit {

  API_URL = 'http://localhost:5000/api';
  message: string;


  list: Array<any> = [];

  constructor(public auth: AuthService, public http: Http, public authHttp: AuthHttp, private httpClient: HttpClientService) {

  }

  ngOnInit() {
  }

  public ping(): void {
    this.message = '';
    this.http.get(`${this.API_URL}/ping`)
      .map(res => res.json())
      .subscribe(data => {
        this.message = data.message;
      },
      error => {
        this.message = error;
      });
  }

  public getDocuments(): void {
    this.message = '';
    this.authHttp.get(`${this.API_URL}/test`)
      .map(res => res.json())
      .subscribe(data => {
        debugger;
        this.list = data;
      },
      error => {
        this.message = error;
      });
  }
}
