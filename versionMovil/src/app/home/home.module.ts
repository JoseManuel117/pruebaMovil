import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDoc } from "firebase/firestore";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forRoot([
      { path: 'login', component: HomePageModule}
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {
  constructor(private firestore: Firestore, public auth: AngularFireAuth) {
    this.getProductData();

  }

  async getProductData() {
    const productDocRef = doc(this.firestore, `productos/xG0I9M7lRvJm3ASRbYlQ`);
    const productDocSnapshot = await getDoc(productDocRef);
    console.log(productDocSnapshot.data());
  }

}
