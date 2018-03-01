import { Component } from '@angular/core';
import { NavController, NavParams,MenuController,Events,LoadingController} from 'ionic-angular';

//pages

import {listaMain} from './listaMain';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'

})
export class MenuPage {
   username;
   correo;
   rootPage;
  lista = new listaMain();
nombreUsuario : any
    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,public events: Events,public loadingCtrl : LoadingController ) {
      this.rootPage = HomePage;

this.username = navParams.get('nombre') + navParams.get('apellido')
this.correo = navParams.get('correo')
       }

//metodo el cual redireccionara la lista del menu
  abrirPagina(pagina){
  console.log(pagina)
    if(pagina == "LoginPage"){
        this.loadingCtrl.create({
        content: 'Cargando',
        dismissOnPageChange: true
        }).present();
      this.navCtrl.setRoot(LoginPage)
      }     else{
          this.rootPage = pagina
  }
}
    }
