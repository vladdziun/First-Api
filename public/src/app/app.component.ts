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
  id = "";

  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    // this.getPersonsFromService()
  }
  getPersonsFromService() {
    console.log("Here!")
    let observable = this._httpService.getPersons()
    observable.subscribe(data => {
      console.log("got our data", data);
      this.persons.push(data);
      console.log(this.persons);
    })
  }
  onButtonClick(name: String): void{
    console.log(`Click working with param ${name}`);

    let observable = this._httpService.postToServer({name});
    observable.subscribe(data => console.log("Got data", data));
  }
  showInfo(id: string): void{
    console.log(`showing info ${id}`);
    let observable = this._httpService.getOnePerson(id);
    observable.subscribe(data => console.log(data));
    this.id = id;
  }
}
