import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  getWeatherData(cityName: string): void{
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
      this.getWeatherData('São Paulo');
  }
}
