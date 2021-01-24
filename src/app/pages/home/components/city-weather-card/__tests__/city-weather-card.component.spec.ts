import { TestBed } from '@angular/core/testing';
import { HomeService } from '../../../home.service';
import { testCity, testCityWeather } from '../../../__mocks__/home.page.mock';
import { CityWeatherCardComponent } from '../city-weather-card.component';

class HomeServiceMock {
  constructor() {}
  getCityWeatherByName = jest.fn((cityName) => {
    if (!cityName) {
      return;
    }
    return new Promise((resolve) => {
      resolve(testCityWeather);
    });
  });
  httpProvider = {
    createHttpRequest: jest.fn(),
  };
}

describe('CityWeatherCardComponent', () => {
  let cityWeatherCardComponent: CityWeatherCardComponent;
  let homeService: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        CityWeatherCardComponent,
        { provide: HomeService, useClass: HomeServiceMock },
      ],
    });
    // inject both the component and the dependent service.
    cityWeatherCardComponent = TestBed.inject(CityWeatherCardComponent);
    homeService = TestBed.inject(HomeService);
  });

  it('should create the home page', () => {
    expect(cityWeatherCardComponent).toBeTruthy();
  });

  describe('CityWeatherCard Component Methods', () => {
    it('should call getCityWeather onInit', () => {
      cityWeatherCardComponent.city = { name: testCityWeather.name, id: 1 };
      const getCityWeatherSpy = jest.spyOn(
        cityWeatherCardComponent,
        'getCityWeather'
      );
      cityWeatherCardComponent.ngOnInit();
      expect(getCityWeatherSpy).toHaveBeenCalled();
    });

    it('should get city weather', async () => {
      cityWeatherCardComponent.city = { name: testCityWeather.name, id: 1 };
      const cityWeather = await homeService.getCityWeatherByName(
        testCityWeather.name
      );
      expect(cityWeather).toBe(testCityWeather);
    });

    it('should delete city on confirmCityDeletion', () => {
      jest.spyOn(window, 'confirm').mockReturnValueOnce(true);
      cityWeatherCardComponent.confirmCityDeletion(testCity);
      expect(window.confirm).toHaveBeenCalled();
    });

    it('should delete city if error happens', () => {
      cityWeatherCardComponent.city = null as any;
      const deleteCitySpy = jest.spyOn(cityWeatherCardComponent, 'deleteCity');
      cityWeatherCardComponent.ngOnInit();
      expect(deleteCitySpy).toHaveBeenCalled();
    });
  });
});
