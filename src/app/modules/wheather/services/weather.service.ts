import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'fc1a103791c7f12f9c7a3b40a7ae464f';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&APPID=${this.apiKey}`, {})
  }
}
