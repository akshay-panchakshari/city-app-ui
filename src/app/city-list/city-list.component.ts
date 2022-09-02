import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  ngOnInit(): void {
  }

  p:number  = 0;
  query:string ="";
  collection:string[] = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`${i}`);
    }
  }

}
