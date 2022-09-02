import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  cityName:string="";
  constructor(private location: Location) { }
  
  ngOnInit(): void {
  }
  cancel(): void {
    this.location.back();
  }
}
