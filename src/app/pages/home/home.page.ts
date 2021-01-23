import { isAlphaBetString } from '@/app/utils/validators.util';
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  styleUrls: ['./home.page.scss'],
  templateUrl: './home.page.html',
})
export class HomePage {
  public cities: string[] = [];
  public cityToAdd = '';

  addCity() {
    if (isAlphaBetString(this.cityToAdd)) {
      console.log(this.cityToAdd);
      this.cities.unshift(this.cityToAdd.toUpperCase());
    }
    else{
      alert("INvalid input. Please use Alphabets only!")
    }
  }

  deleteCity(cityName: string) {}
}
