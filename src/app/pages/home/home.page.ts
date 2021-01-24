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

  onDeleteCity(city: City) {
    // You could pass this directly as input to city card, but in case another party is interested in that event we will use event emitter.
    this.deleteCity(city);
  }

  deleteCity(cityToDelete: City) {
    const cityToDeleteIndex = this.cities.findIndex((city) => {
      return city.id === cityToDelete.id;
    });
    this.cities.splice(cityToDeleteIndex, 1);
  }
}
