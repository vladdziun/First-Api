import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  persons = [];

  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    this.getPersonsFromService()
  }
  getPersonsFromService() {
    let observable = this._httpService.getPersons()
    observable.subscribe(data => {
      console.log("got our data", data);
      this.persons.push(data);
      console.log(this.persons);
    })
  }
}
