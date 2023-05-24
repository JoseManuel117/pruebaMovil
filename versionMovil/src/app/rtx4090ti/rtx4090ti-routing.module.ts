import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rtx4090tiPage } from './rtx4090ti.page';

const routes: Routes = [
  {
    path: '',
    component: Rtx4090tiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rtx4090tiPageRoutingModule {}
