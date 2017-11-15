import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
  url: string = 'http://10.1.0.189:8080/trailers';

  constructor(public http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

}
