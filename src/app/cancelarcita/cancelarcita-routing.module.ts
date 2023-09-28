import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelarcitaPage } from './cancelarcita.page';

const routes: Routes = [
  {
    path: '',
    component: CancelarcitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelarcitaPageRoutingModule {}
