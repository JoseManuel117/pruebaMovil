import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPrincipalPage } from './pagina-principal.page';

const routes: Routes = [
  {
    path: 'pagina-principal',
    component: PaginaPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPrincipalPageRoutingModule {}
