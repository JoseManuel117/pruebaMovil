import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {doc, Firestore} from "@angular/fire/firestore";
import {getDoc} from "firebase/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements OnInit {

  datos: any[] = [];
  nombres: any[] = [];
  enrutamiento: any[] = [];
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

    console.log("=============");
    console.log(this.nombres);
    console.log(this.datos);
    console.log(this.enrutamiento);

    this.generarSubpaginas();
  }

  ngOnInit() {
    this.getProductData()
  }

  contador: number = 0;
  generarSubpaginas() {
    console.log("pues sí");
    const container = document.getElementById('subpages-container');



    if (container) {
      this.nombres.forEach((dato) => {
        let auxiliar: string = this.enrutamiento[this.contador];
        console.log(dato);
        const page = document.createElement('ion-card');
        page.innerHTML = `
        <ion-card-header>
          ${dato}
        </ion-card-header>
        <ion-card-content>
          Contenido de la subpágina "${dato}"
        </ion-card-content>

      `;
        this.contador++;
        page.addEventListener('click', () => {
          // Navegar a la subpágina
          console.log(this.enrutamiento[this.contador]);
          this.navCtrl.navigateForward(`/${auxiliar}`);
          console.log("hola");
        });

        container.appendChild(page);

      });

    }
  }


}
