import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    console.log(`${environment.url_api}/pokemon/`);
    // return this.http.get(`${environment.url_api}/pokemon/`);
  }

}
