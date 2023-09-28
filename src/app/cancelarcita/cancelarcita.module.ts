import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelarcitaPageRoutingModule } from './cancelarcita-routing.module';

import { CancelarcitaPage } from './cancelarcita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelarcitaPageRoutingModule
  ],
  declarations: [CancelarcitaPage]
})
export class CancelarcitaPageModule {}
