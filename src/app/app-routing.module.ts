import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/wheather/page/weather-home/weather-home.component';
import { WeatherCardComponent } from './modules/components/weather-card/weather-card.component';
const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full'},
  { path: 'weather', component: WeatherHomeComponent},
  { path: 'weather-card', component: WeatherCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
