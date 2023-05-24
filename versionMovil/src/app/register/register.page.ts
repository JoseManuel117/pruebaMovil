import { Component, OnInit } from '@angular/core';
import {JsService} from "../../assets/service/js.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private js: JsService) {
    this.js.loadModuleScript('/nestor','FormValidation.js');
  }

  ngOnInit() {
  }

}
