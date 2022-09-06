import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = req;
    let  user = JSON.parse(localStorage.getItem("currentUser")!);
    authReq = req.clone({ 
        headers: this.getHeaders(user.username,user.password)
      });
    return next.handle(authReq);
  }

  getHeaders(username: String, password: String):HttpHeaders{
    return  new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':this.createBasicAuthToken(username,password)});
  }
  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }
  
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
