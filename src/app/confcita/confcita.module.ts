import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfcitaPageRoutingModule } from './confcita-routing.module';

import { ConfcitaPage } from './confcita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfcitaPageRoutingModule
  ],
  declarations: [ConfcitaPage]
})
export class ConfcitaPageModule {}
