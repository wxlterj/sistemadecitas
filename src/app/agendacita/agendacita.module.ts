import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendacitaPageRoutingModule } from './agendacita-routing.module';

import { AgendacitaPage } from './agendacita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendacitaPageRoutingModule
  ],
  declarations: [AgendacitaPage]
})
export class AgendacitaPageModule {}
