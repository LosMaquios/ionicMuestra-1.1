// Vendor
import { Component } from '@angular/core';
import { IonicPage, NavController,  ToastController,LoadingController } from 'ionic-angular';

//Paginas
import {RegistroPage} from '../registro/registro'
import {MenuPage} from '../menu/menu'



@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  correo;
  clave;

constructor(
    private _navCtrl: NavController,
    private _toastCtrl : ToastController,
    private _loadingCtrl: LoadingController,

  ) {

  }

  login() {
    this._loadingCtrl.create({
    content: 'Cargando',
    dismissOnPageChange: true,
    duration:1000
  }).present();
let autenticacion =  localStorage.getItem(this.correo);
if(autenticacion != null){
  let nombr = autenticacion.split(",")[0]
  let  apellid = autenticacion.split(",")[1]

  this._navCtrl.push(MenuPage,{nombre:nombr , apellido:apellid,correo:this.correo });


}
console.log(autenticacion)
if(autenticacion == null){
  let toast =  this._toastCtrl.create ({message:"Este usuario no se encuentra registrado",
  position:"top",
  duration:3000});
 toast.present();
}
    }


registro(){
  console.log("ingreso")
  this._navCtrl.push(RegistroPage);
}

}
