import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { City } from '../city';
import { Page } from '../page';

import { CityService } from '../service/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  pageIndex:number  = 0;
  query:string ="";
  
  cities: City[] = [];
  page:Page | undefined  ;
  totalItems:number | undefined;
  
  constructor(private cityService: CityService) {
  }

  ngOnInit(): void {
    this.getCities(this.pageIndex);
  }

  getCities(pageIndex:number):void{
    console.log("Fetching records for page "+pageIndex);
    this.pageIndex = pageIndex;
    this.cityService.getCities(this.query,this.pageIndex).subscribe(page=>{
      this.page = page;
      this.cities = this.page?.content;
      this.totalItems = this.page?.totalElements;
    });
  }
  onEnter(value: string) { 
    console.log("searching for "+ value) 
    this.getCities(this.pageIndex);
  }
  editCity(id:number){
    let cityToEdit = this.cities.find(city => city.id === id);
    this.cityService.updateCityToEdit(cityToEdit as City);
  }
}
