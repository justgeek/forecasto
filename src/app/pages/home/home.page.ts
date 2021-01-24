import { isAlphaBetString } from '@/app/utils/validators.util';
import { Component } from '@angular/core';

export interface City {
  name: string;
  id: number;
}

@Component({
  selector: 'home-page',
  styleUrls: ['./home.page.scss'],
  templateUrl: './home.page.html',
})
export class HomePage {
  public cities: City[] = [];
  public cityNameToAdd = '';

  addCity() {
    if (isAlphaBetString(this.cityNameToAdd)) {
      const cityToAdd = {
        name: this.cityNameToAdd.toUpperCase(),
        id: Date.now(),
      };
      this.cities.unshift(cityToAdd);
      this.cityNameToAdd = '';
    } else {
      alert('Invalid input. Please use alphabets only!');
    }
  }

  deleteCity(cityName: string) {}
}
