import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  url: string = 'http://localhost:8080/trailers';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  get() {
    return this.http.get(this.url);
  }

}
