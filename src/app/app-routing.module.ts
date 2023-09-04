import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherListComponent } from './Components/GetWaether/weather-list/weather-list.component';

const routes: Routes = [
  {
    path : '',
    component : WeatherListComponent
  },
  {
    path : 'Home',
    component : WeatherListComponent
  },
  {
    path : 'Login',
    component : WeatherListComponent
  },
  {
    path : 'GetWeather',
    component : WeatherListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
