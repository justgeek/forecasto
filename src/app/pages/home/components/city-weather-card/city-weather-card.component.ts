import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../../home.page';
import { CityWeatherResponse, HomeService } from '../../home.service';
@Component({
  selector: 'city-weather-card',
  styleUrls: ['./city-weather-card.component.scss'],
  templateUrl: './city-weather-card.component.html',
})
export class CityeatherCardComponent implements OnInit {
  @Input() city!: City;
  @Output() deleteCityEvent = new EventEmitter<City>();

  public cityWeather!: CityWeatherResponse;
  public isLoadingCity = true;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getCityWeather();
  }

  async getCityWeather() {
    try {
      const { name } = this.city;
      this.cityWeather = await this.homeService.getCityWeatherByName(name);
    } catch (e) {
      console.error(e);
      // in case of error delete card (roll back action)
      this.deleteCity(this.city);
    }
    this.isLoadingCity = false;
  }

  confirmCityDeletion(city: City) {
    const { name } = city;
    if (confirm(`Sure to remove ${name}?`)) {
      this.deleteCity(city);
    }
  }

  deleteCity(city: City) {
    this.deleteCityEvent.emit(city);
  }
}
