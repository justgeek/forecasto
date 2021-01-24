import { HomePage } from '../home.page';
import { testCity } from '../__mocks__/home.page.mock';

// This should go to a mock file in ideal world

jest.mock('src/app/utils/validators.util', () => ({
  isAlphaBetString: (str: string) => {
    if (str) {
      return true;
    } else {
      return false;
    }
  },
}));

describe('HomePage', () => {
  let homePage: HomePage;

  beforeEach(async () => {
    homePage = new HomePage();
  });

  it('should create the home page', () => {
    const homePage = new HomePage();
    expect(homePage).toBeTruthy();
  });

  describe('Home Page Methods', () => {
    it('should add city', () => {
      homePage.cities = [];
      homePage.cityNameToAdd = testCity.name;
      homePage.addCity();
      expect(homePage.cities.length).toEqual(1);
      expect(homePage.cities[0].name).toEqual(testCity.name.toUpperCase());
    });

    it('should alert error if city name is not alphabet', () => {
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      homePage.cities = [];
      homePage.cityNameToAdd = '';
      homePage.addCity();
      //   expect(homePage.cities.length).toEqual(0);
      expect(window.alert).toHaveBeenCalled();
    });

    it('should delete city on deleteCity', () => {
      const deleteSpy = jest.spyOn(homePage, 'deleteCity');
      homePage.onDeleteCity(testCity);
      expect(deleteSpy).toHaveBeenCalledWith(testCity);
    });

    it('should delete city', () => {
      homePage.cities = [testCity];
      homePage.deleteCity(testCity);
      expect(homePage.cities.length).toEqual(0);
    });
  });
});
