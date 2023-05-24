import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Product1Page } from './product1.page';

const routes: Routes = [
  {
    path: 'product1',
    component: Product1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Product1PageRoutingModule {}
