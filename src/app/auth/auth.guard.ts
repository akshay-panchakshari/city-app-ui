import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router,private authenticationService: AuthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Auth guard called!");
      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser) {
        const intersection = route.data['roles'] ? route.data['roles'].filter((element: string) => currentUser.role.includes(element)):[];
        if (intersection && intersection.length=== 0) {
          // role not authorised so redirect to forbidden page
          this.router.navigate(['../forbidden']);
          return false;
        }
      }
      return true;
  }
  
}
