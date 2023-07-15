import { Component } from '@angular/core';
import { WeatherForecastService } from '../api/services';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  message = null;

  constructor(
    private weatherForcast:WeatherForecastService
  ){
      this.weatherForcast.apiWeatherForecastGet$Plain().subscribe(res => {
        this.message = res;
      });
  }

  public incrementCounter() {
    this.currentCount++;
  }
}
