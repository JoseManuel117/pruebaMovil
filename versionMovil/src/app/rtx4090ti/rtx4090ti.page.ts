import { Component, OnInit } from '@angular/core';
import {doc, Firestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {NavController} from "@ionic/angular";
import {getDoc} from "firebase/firestore";

@Component({
  selector: 'app-rtx4090ti',
  templateUrl: './rtx4090ti.page.html',
  styleUrls: ['./rtx4090ti.page.scss'],
})
export class Rtx4090tiPage implements OnInit {

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
    this.descripcion = this.datos[1][1];
    this.enrutamiento = Object.keys(userSA);

    console.log(this.datos[0][2]);
    console.log("=============");
    console.log(this.nombres);
    console.log(this.datos);
    console.log(this.enrutamiento);
    this.imagen = this.datos[0][2]; //no puedo usarlo porque tarda en cargar demasiado y da errores
  }

  ngOnInit(){
    this.getProductData();

  }

}
