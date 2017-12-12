import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CardInfoService {
  headers: Headers;
  url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: Http) { 
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getInfo(criteria: string): Observable<any> {
    return this.http
      .get(this.url + criteria)
      .map(data => data.json());
  }
}
