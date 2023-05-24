import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPrincipalPageRoutingModule } from './pagina-principal-routing.module';

import { PaginaPrincipalPage } from './pagina-principal.page';
import {RouterModule} from "@angular/router";
import {JsService} from "../../assets/service/js.service";
import {getDoc} from "firebase/firestore";
import {doc, Firestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPrincipalPageRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: PaginaPrincipalPageModule}
    ])
  ],
  declarations: [PaginaPrincipalPage]
})
export class PaginaPrincipalPageModule implements OnInit{


  constructor(private js: JsService,private firestore: Firestore, public auth: AngularFireAuth) {
    this.js.loadScript('','test.js');
    this.getProductData();
  }




  async getProductData() {
    const productDocRef = doc(this.firestore, `productos/xG0I9M7lRvJm3ASRbYlQ`);
    const productDocSnapshot = await getDoc(productDocRef);
    console.log(productDocSnapshot.data());
  }

  ngOnInit() {
  }

}
