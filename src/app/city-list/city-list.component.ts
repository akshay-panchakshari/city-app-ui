import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[] = [];
  ngOnInit(): void {
    this.getCities();
  }

  p:number  = 0;
  query:string ="";
  collection:string[] = [];
  constructor(private cityService: CityService) {


    /*
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`${i}`);
    }*/
  }

  getCities():void{
    this.cityService.getCities().subscribe(cities=>this.cities = cities);
  }

}
