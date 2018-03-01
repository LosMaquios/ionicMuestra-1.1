// Vendor
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';

//pagina
import {MenuPage} from '../menu/menu'

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  nombre;
  apellido;
  genero;
  correo;
  clave;
  claveS;

constructor(
    private _navCtrl: NavController,
    private _toastCtrl : ToastController,
    private _loadingCtrl: LoadingController,

  ) {}

  registro(){
    console.log(this.clave +" :: "+ this.claveS)
if(this.clave == this.claveS){
let registroUsuario:any = [this.nombre,this.apellido,this.genero,this.correo , this.clave];
localStorage.setItem(this.correo, registroUsuario);
 this._navCtrl.push(MenuPage,{nombre:this.nombre , apellido:this.apellido,correo:this.correo });
 let toast =  this._toastCtrl.create ({message:"Se ha registrado satisfactoriamente",
 position:"top",
 duration:3000});
toast.present();
}
else if(this.clave != this.claveS){
let toast =  this._toastCtrl.create ({message:"Su contraseña no coincide",
position:"top",
duration:3000});

toast.present();
}
}
  }
