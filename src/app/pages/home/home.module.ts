import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HomePage],
})
export class HomePageModule {}
