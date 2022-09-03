import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { City } from '../city';
import { Page } from '../page';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  credentials = {username: 'user', password: 'password'};
  city : City = {
    id: -1,
    name: '',
    photo: ''
  };

  private city$ =new BehaviorSubject<City>(this.city);
  selectedCity$ = this.city$.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':this.createBasicAuthToken(this.credentials.username,this.credentials.password)}),
  };

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  private citiesUrl = 'http://localhost:8080/api/cities';  // URL to web api

  constructor(private http: HttpClient) { }

  getCities( searchQuery:string,page:number): Observable<Page> {
    page = page> 0 ? page-1:page; //page index starts with 0 at backend
    const options = { params: this.getHttpParams(searchQuery,page), headers: this.getHeaders() };

    return this.http.get<Page>(this.citiesUrl,options)
      .pipe(
        map((data:Page)=>{
          return data;
        }),
        catchError(
          error=>{       
            console.log(error.error);
            return of();
          }
        )
      );
  }

  getHeaders():HttpHeaders{
    return  new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':this.createBasicAuthToken(this.credentials.username,this.credentials.password)});
  }

  getHttpParams(searchQuery:string , page:number):HttpParams{
    let params = new HttpParams();
    params = params.append('name', searchQuery);
    params = params.append('page', page);
   // params = params.append('size', 10);
    return params;
  }

  updateCityToEdit(city:City){
    this.city$.next(city);
  }
}
