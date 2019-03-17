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
  newPerson: any;
  updatedPerson: any;

  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    this.newPerson = {name: ""}
    this.updatedPerson = {name: ""}
  }
  getPersonsFromService() {
    console.log("Here!")
    let observable = this._httpService.getPersons()
    observable.subscribe(data => {
      console.log("got our data", data);
      this.persons.push(data);
      this.persons = this.persons;
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
  onSubmit(){
    let observable = this._httpService.addPerson(this.newPerson);
    observable.subscribe(() => console.log("Adding person"));
    this.newPerson = {name: ""} 
  }
  onSubmitUpdate(): void{
    let observable = this._httpService.updatePerson(this.id,this.updatedPerson);
    observable.subscribe(() => console.log("Updating person"));
    this.updatedPerson = {name: ""} 
  }
  deletePerson(id: string): void {
    let observable = this._httpService.deletePerson(id);
    observable.subscribe(data => console.log(data));
    this.getPersonsFromService();
    this.id = id;
  }
  editPerson(id: string, name: string): void {
    this.id = id;
    this.updatedPerson = {name: name}
  }
  
}
