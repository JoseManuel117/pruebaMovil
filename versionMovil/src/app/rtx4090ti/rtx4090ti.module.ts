import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rtx4090tiPageRoutingModule } from './rtx4090ti-routing.module';

import { Rtx4090tiPage } from './rtx4090ti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rtx4090tiPageRoutingModule
  ],
  declarations: [Rtx4090tiPage]
})
export class Rtx4090tiPageModule {}
