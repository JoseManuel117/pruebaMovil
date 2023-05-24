import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {IonicModule, NavController} from '@ionic/angular';

import { HumptyPageRoutingModule } from './humpty-routing.module';

import { HumptyPage } from './humpty.page';
import {doc, Firestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {getDoc} from "firebase/firestore";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumptyPageRoutingModule
  ],
  declarations: [HumptyPage]
})
export class HumptyPageModule implements OnInit{

  datos: any[] = [];
  nombres: any[] = [];
  enrutamiento: any[] = [];

  imagen: string = "";
  descripcion: string= "";

  constructor(private firestore: Firestore, public auth: AngularFireAuth, private navCtrl: NavController) {

  }

  async getProductData() {
    const productDocRef = doc(this.firestore, `productos/xG0I9M7lRvJm3ASRbYlQ`);
    const productDocSnapshot = await getDoc(productDocRef);
    const userSA:Record<string, string | string[]> = productDocSnapshot.data() ?? {};
    console.log(productDocSnapshot.data());
    console.log(this.datos);

    for (const campo of Object.entries(userSA)) {
      //console.log(`${campo}: ${valor}`);
      const cosa: string[] = campo[1] as string[];
      console.log(campo[1][0]);
      this.datos.push(cosa);
      console.log(cosa);
      this.nombres.push(campo[1][0]);
    }
    this.enrutamiento = Object.keys(userSA);
    this.imagen = this.datos[0][2];
    console.log(this.datos[0][2]);
    console.log("=============");
    console.log(this.nombres);
    console.log(this.datos);
    console.log(this.enrutamiento);

  }

  ngOnInit(){
    this.getProductData();
    console.log("ESPAÑAAA");
  }

}
