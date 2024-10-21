import { WeatherData } from './../../../../models/interfaces/weather.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  weatherData!: WeatherData;
  initialCityName = 'São Paulo';
  serachIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void{
    this.weatherService.getWeatherData(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(this.weatherData);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  onSubmit(): void {
    this.getWeatherData(this.initialCityName);
    this.initialCityName = '';
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
