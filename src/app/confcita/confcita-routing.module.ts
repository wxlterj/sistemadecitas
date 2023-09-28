import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfcitaPage } from './confcita.page';

const routes: Routes = [
  {
    path: '',
    component: ConfcitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfcitaPageRoutingModule {}
