import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { City } from '../city';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  
  constructor(private location: Location,private cityService: CityService) { }
  cityToEdit! : City;

  ngOnInit(): void {
    this.cityService.selectedCity$.subscribe(city => {
      this.cityToEdit= city
    });
    
  }

  goBack(): void {
    this.location.back();
  }

  save(){
    this.cityService.updateCity(this.cityToEdit.id,this.cityToEdit).subscribe(city=>{
      this.goBack();
    });
  }
}
