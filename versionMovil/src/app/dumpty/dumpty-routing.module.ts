import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DumptyPage } from './dumpty.page';

const routes: Routes = [
  {
    path: '',
    component: DumptyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DumptyPageRoutingModule {}
