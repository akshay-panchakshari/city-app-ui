import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityListComponent } from './city-list/city-list.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { Role } from './Role';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'citylist', component: CityListComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { 
    path: 'edit/:id', 
    component: CityEditComponent,
    canActivate:[AuthGuard] ,
    data:{roles: [Role.EDIT_ROLE]}
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
