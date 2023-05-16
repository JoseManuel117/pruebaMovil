import { Component } from '@angular/core';
import {JsService} from "../../assets/service/js.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private js: JsService) {
    this.js.loadModuleScript('/nestor','LoginValidation.js');
  }
}
