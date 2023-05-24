import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prueba2PageRoutingModule } from './prueba2-routing.module';

import { Prueba2Page } from './prueba2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prueba2PageRoutingModule
  ],
  declarations: [Prueba2Page]
})
export class Prueba2PageModule {}
