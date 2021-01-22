import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './components/header/header.component';
import { AppPages } from './pages/pages.component';

@NgModule({
  declarations: [AppComponent, AppHeader],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, AppPages],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
