import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { City } from '../city';
import { Page } from '../page';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  
  public static CITIES: string = "/cities";
 
  credentials = {username: 'user', password: 'user'};
  city : City = {
    id: -1,
    name: '',
    photo: ''
  };

  private city$ =new BehaviorSubject<City>(this.city);
  selectedCity$ = this.city$.asObservable();
  private citiesUrl = environment.apiURL; // URL to web api

  constructor(private http: HttpClient) { }

  getCities( searchQuery:string,page:number): Observable<Page> {
    page = page> 0 ? page-1:page; //page index starts with 0 at backend
    const options = { params: this.getHttpParams(searchQuery,page)};

    return this.http.get<Page>(this.citiesUrl+CityService.CITIES,options)
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

  
  updateCity(id:number,city:City){
    return this.http.put<City>(`${this.citiesUrl+CityService.CITIES}/${id}` , city).pipe(
      map((data:City)=>{
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
