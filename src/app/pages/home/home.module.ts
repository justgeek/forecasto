import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityeatherCardComponent } from './components/city-weather-card/city-weather-card.component';
import { EmptyHomeComponent } from './components/empty-home/empty-home.component';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HomePage, CityeatherCardComponent, EmptyHomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
