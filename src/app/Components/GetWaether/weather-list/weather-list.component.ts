import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/Models/weather.model';
import {WeatherListService} from "src/app/Services/weather-list.service"

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})

export class WeatherListComponent implements OnInit {
  weatherlst: Weather[] = [];
  constructor(private wls : WeatherListService){
    this.weatherlst = [];
  }

  ngOnInit(): void {
    this.wls.GetWeatherList()
    .subscribe({
      next: (weatherlst) => this.weatherlst = weatherlst,
      //next: (weatherlst) => console.log(weatherlst),
      error: (responce) => {console.log(responce)}
    });
  };
}
//console.log(weatherlst)})
