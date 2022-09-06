import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    const options = { headers: this.getHeaders(username, password) };
    return this.http
      .post<any>(
        `http://localhost:8080/api/login`,
        { username, password },
        options
      )
      .pipe(
        map((validUser) => {
          if (validUser) {
            let user = new User();
            user.username = validUser.username;
            user.password = validUser.password;
            user.role = validUser.role;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          } else {
            alert('Authentication failed.');
          }
          return validUser;
        })
      );
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  getHeaders(username: String, password: String): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }
  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }
}
