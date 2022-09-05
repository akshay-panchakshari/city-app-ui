import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  user:User ={
    username: '',
    password: '',
    role: ''
  };
  constructor( private authenticationService: AuthService, private router: Router,) { }
  
  
  ngOnInit(): void {
  }

  login(){
    this.authenticationService.login(this.user.username,this.user.password)
      .subscribe(user => {
        console.log(user);
        this.router.navigate(['../citylist']);
      } );
  }
  ngOnDestroy(): void {
    
  }
}
