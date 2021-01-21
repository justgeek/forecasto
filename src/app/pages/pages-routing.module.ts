import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundPage } from './miscellaneous/not-found/not-found.page';
import { ForecasterPage } from './forecaster/forecaster.page';
import { HelpPage } from './help/help.page';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'forecaster',
        component: ForecasterPage,
      },
      {
        path: 'help',
        component: HelpPage,
      },
      {
        path: '',
        redirectTo: 'forecaster',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
