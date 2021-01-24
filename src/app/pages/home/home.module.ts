import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityeatherCardComponent } from './components/city-weather-card/city-weather-card.component';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HomePage,CityeatherCardComponent],
  providers:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
