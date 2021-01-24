import { Component, Input, OnInit, Output } from '@angular/core';
import { CityWeatherResponse, HomeService } from '../../home.service';
@Component({
  selector: 'city-weather-card',
  styleUrls: ['./city-weather-card.component.scss'],
  templateUrl: './city-weather-card.component.html',
})
export class CityeatherCardComponent implements OnInit {
  @Input() cityName!: string;
  public city!: CityWeatherResponse;
  public isLoadingCity = true;
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getCityWeather();
  }

  async getCityWeather() {
    try {
      this.city = await this.homeService.getCityWeatherByName(this.cityName);
    } catch (e) {
      console.error(e);
    }
    this.isLoadingCity = false;
  }
}
