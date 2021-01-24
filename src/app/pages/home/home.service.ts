import { endpoints } from '../../../config/endpoints.config';
import { OPEN_WEATHER_API_KEY } from '../../../config/variables.config';
import { HttpProviderService } from '../../providers/http-provider/http-provider.service';
import { Injectable } from '@angular/core';

export interface CityWeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}

@Injectable({
  providedIn: 'root',
})

export class HomeService {
  constructor(private httpProvider: HttpProviderService) {}
  public async getCityWeatherByName(
    cityName: string
  ): Promise<CityWeatherResponse> {
    return this.httpProvider.createHttpRequest<CityWeatherResponse>({
      method: 'GET',
      url: `${endpoints.openWeather.weatherBaseUrl}?APPID=${OPEN_WEATHER_API_KEY}&q=${cityName}&units=metric`,
    });
  }
}
