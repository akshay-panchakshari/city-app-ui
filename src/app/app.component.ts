import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { User } from './User';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User | undefined;
  constructor(
    private router: Router,
    private authenticationService: AuthService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

}
