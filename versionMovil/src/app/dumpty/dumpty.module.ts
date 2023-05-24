import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DumptyPageRoutingModule } from './dumpty-routing.module';

import { DumptyPage } from './dumpty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DumptyPageRoutingModule
  ],
  declarations: [DumptyPage]
})
export class DumptyPageModule {}
