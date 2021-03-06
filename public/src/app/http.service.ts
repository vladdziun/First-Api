import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getPersons();
    // this.getPokemon();
  }

  getPersons() {
    // let tempObservable = this._http.get('/api/persons');
    // tempObservable.subscribe(data => console.log("Got our persons!", data));
    return this._http.get('/api/persons');
  }
  getOnePerson(id){
    return this._http.get(`/api/persons/${id}`);
  }
  getPokemon()
  {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon');
    bulbasaur.subscribe(data => console.log("Got our pokemon!", data));
  }
  postToServer(name)
  {
    return this._http.post('/api/persons', name);
  }
  addPerson(newPerson){
    return this._http.post(`/api/persons`, newPerson);
  }
  deletePerson(id)
  {
    return this._http.delete(`/api/persons/${id}`);

  }
  updatePerson(id, updatedPerson)
  {
    return this._http.put(`/api/persons/${id}`, updatedPerson);
  }
}