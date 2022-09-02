import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { City } from '../city';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  credentials = {username: 'user', password: 'password'};
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':this.createBasicAuthToken(this.credentials.username,this.credentials.password)}),
  };

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  
  private citiesUrl = 'http://localhost:8080/api/cities';  // URL to web api

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl,this.httpOptions)
      .pipe(
        tap(data => console.log('fetched cities'+ JSON.stringify(data))),
        catchError(
          error=>{       
            console.log(error.error);
            return of([]);
          }
        )
      );
  }
}
