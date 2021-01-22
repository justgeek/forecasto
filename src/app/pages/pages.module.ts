import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { AppPages } from './pages.component';

@NgModule({
  imports: [PagesRoutingModule],
  declarations: [AppPages],
})
export class PagesModule {}
