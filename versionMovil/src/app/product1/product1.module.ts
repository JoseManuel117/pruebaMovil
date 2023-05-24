import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Product1PageRoutingModule } from './product1-routing.module';

import { Product1Page } from './product1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Product1PageRoutingModule
  ],
  declarations: [Product1Page]
})
export class Product1PageModule {}
