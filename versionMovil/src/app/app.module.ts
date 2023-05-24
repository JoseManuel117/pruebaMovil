import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import {JsService} from "../assets/service/js.service";
import {HomePage} from "./home/home.page";
import {HomePageModule} from "./home/home.module";
import {PaginaPrincipalPage} from "./pagina-principal/pagina-principal.page";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    RouterModule.forRoot([
      {path: '', redirectTo: 'Home', pathMatch: 'full'},
      {path: 'login', component: HomePage},
      {path: 'Home', component: PaginaPrincipalPage}
    ]), HomePageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {


}
