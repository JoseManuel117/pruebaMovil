import { Component, OnInit } from '@angular/core';
import {JsService} from "../../assets/service/js.service";
import {doc, Firestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {getDoc} from "firebase/firestore";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {

  nombreUser = new BehaviorSubject<string>('');
  nombreUser$ = this.nombreUser.asObservable();
  signedOut!:boolean;
  user: any;
  actualuser$: Observable<any[]> | null = null; // inicializando con null
  constructor(private js: JsService,private firestore: Firestore, public auth: AngularFireAuth) {
    this.js.loadScript('','test.js');
    this.auth.authState.subscribe(user => {
      console.log(this.actualuser$);
      this.user = user;
      if (this.user) {
        this.getUserData(this.user);
      }
    });
  }


  async getUserData(user: any) {
    const userDocRef = doc(this.firestore, `Usuarios/${user?.uid}`);
    const userDocCardsRef = doc(this.firestore, `Usuarios/${user?.uid}/cards/cardsList`);

    const userDocSnapshot = await getDoc(userDocRef);
    const userDocCardShot = await getDoc(userDocCardsRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();

      this.nombreUser.next(userData["usuario"]);
      console.log(this.nombreUser.value);

    } else {
      console.log('El usuario no existe.');
    }
  }

  async signOut() {
    await this.auth['signOut']();
    this.signedOut = true;
    location.reload();
  }

  ngAfterViewInit() {
    const cerrarSesionBtn = document.getElementById('cerrar-sesion-btn');
    if (cerrarSesionBtn) {
      cerrarSesionBtn.addEventListener('click', () => {
        this.signOut();
      });
    } else {
      console.warn('Elemento no encontrado: cerrar-sesion-btn');
    }
  }
  ngOnInit() {
    this.signedOut = false;
  }

}
