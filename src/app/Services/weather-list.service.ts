import { HttpClient } from '@angular/common/http';
import { Interpolation } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Weather} from "src/Models/weather.model"

@Injectable({
  providedIn: 'root'
})
export class WeatherListService {
  constructor(private http: HttpClient) { }

  GetWeatherList() : Observable<Weather[]>
  {
    return this.http.get<Weather[]>("https://localhost:44333/WeatherForecast");
  }
}
