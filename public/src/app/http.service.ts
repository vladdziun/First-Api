import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPersons();
  }

  getPersons() {
    let tempObservable = this._http.get('/api/persons');
    tempObservable.subscribe(data => console.log("Got our persons!", data));
  }
}