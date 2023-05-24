import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NavbarPage} from "./componentes/navbar/navbar.page";
import {MasterPage} from "./componentes/master/master.page";
import {Product1Page} from "./product1/product1.page";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'pagina-principal',
    loadChildren: () => import('./pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
  }

  {
    path: 'master',
    component:MasterPage,
    loadChildren: () => import('./componentes/master/master.module').then( m => m.MasterPageModule)
  },
  {
    path: 'product1',
    component:Product1Page,
    loadChildren: () => import('./product1/product1.module').then( m => m.Product1PageModule)
  },
  {
    path: 'humpty',
    loadChildren: () => import('./humpty/humpty.module').then( m => m.HumptyPageModule)
  },
  {
    path: 'dumpty',
    loadChildren: () => import('./dumpty/dumpty.module').then( m => m.DumptyPageModule)
  },
  {
    path: 'prueba2',
    loadChildren: () => import('./prueba2/prueba2.module').then( m => m.Prueba2PageModule)
  },
  {
    path: 'rtx4090ti',
    loadChildren: () => import('./rtx4090ti/rtx4090ti.module').then( m => m.Rtx4090tiPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
