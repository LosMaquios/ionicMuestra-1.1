// Vendor
import { Component } from '@angular/core';
import { IonicPage, NavController,  ToastController,LoadingController,AlertController, NavParams, } from 'ionic-angular';

//Paginas
import {RegistroPage} from '../registro/registro'
import {MenuPage} from '../menu/menu'
import {LogeoService} from '../../services/logeo.service'
import {RecuperarPage} from '../recuperar/recuperar'


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
    public logeoService :LogeoService,
    public alertCtrl:AlertController,
    public _navParams:NavParams,
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

recuperar(){
  let alertaRecuperarClave = this.alertCtrl.create({
  title: 'Recuperar contraseña',
  message: "Agrega correo donde se enviara el código",
  inputs: [
    {
      name: 'parametro',
      placeholder: 'Agrega correo'
    }

  ],
  buttons: [
    {
      text: 'Cancelar',
      handler: data => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Enviar',
      handler: data => {
        console.log(data.parametro);

        let recuperarClave = localStorage.getItem(data.parametro);
        if(recuperarClave != null){
          let codigo = Math.floor((Math.random() * 10000) + 1);
        this.logeoService.correo(data.parametro,codigo).then(responds => {
          console.log(responds)
          this._navCtrl.push(RecuperarPage ,{codigo})
          }).catch( error => {
          console.log(error)
          this._navCtrl.push(RecuperarPage ,{codigo:codigo, user:recuperarClave })
        })
      }
      else{
        let toast = this._toastCtrl.create({
          message: 'Ese correo no se encuentra registrado verifique su correo',
          position: 'top',
          showCloseButton: true,
          closeButtonText: "continuar"

        });
        toast.present();
      }
    }
      }
    ]
  });
  alertaRecuperarClave.present()
}

}
