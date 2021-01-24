import { isAlphaBetString } from '@/app/utils/validators.util';
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  styleUrls: ['./home.page.scss'],
  templateUrl: './home.page.html',
})
export class HomePage {
  public cityNames: string[] = [];
  public cityToAdd = '';

  addCity() {
    if (isAlphaBetString(this.cityToAdd)) {
      console.log(this.cityToAdd);
      this.cityNames.unshift(this.cityToAdd.toUpperCase());
      this.cityToAdd = '';
    } else {
      alert('Invalid input. Please use alphabets only!');
    }
  }

  deleteCity(cityName: string) {}
}
