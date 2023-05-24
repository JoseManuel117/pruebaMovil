import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prueba2Page } from './prueba2.page';

const routes: Routes = [
  {
    path: '',
    component: Prueba2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prueba2PageRoutingModule {}
