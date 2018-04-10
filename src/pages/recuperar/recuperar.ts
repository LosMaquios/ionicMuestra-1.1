// Vendor
import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController} from 'ionic-angular';

//pagina
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html',
})
export class RecuperarPage {
codigo:any;
user:any;
cod:any;
clave:any;
constructor(
    private _navCtrl: NavController,
    private _toastCtrl : ToastController,
   private navParams: NavParams,
  ) {
 this.codigo = navParams.get('codigo');
 this.user = navParams.get('user');
  }

cambiarClave(){
  let datos = this.user.split(",")
  console.log(datos)
 if (this.cod == this.codigo ){
   datos[4] = this.clave;
   localStorage.setItem(datos[3], datos)
   this._navCtrl.push(LoginPage)
   let toast =  this._toastCtrl.create ({message:"Ingresa nuevamente con tu nuevo correo",
   position:"top",
   duration:3000});
   toast.present();
   }

 else{
   let toast =  this._toastCtrl.create ({message:"Su codigo no es compatible",
   position:"top",
   duration:3000});
  toast.present();
 }

}
  }
