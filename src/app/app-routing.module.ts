import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityListComponent } from './city-list/city-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/citylist', pathMatch: 'full' },
  { path: 'citylist', component: CityListComponent },
  { path: 'edit/:id', component: CityEditComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
