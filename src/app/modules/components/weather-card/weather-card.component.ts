import { faDroplet, faIcons, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from './../../../models/interfaces/weather.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  //Dados da previsão do tempo recebidos pelo component pai
  @Input() weatherDataInput!: WeatherData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
