// Vendor
import { Component } from '@angular/core';
import {ToastController } from 'ionic-angular';

//pagina


@Component({
  selector: 'page-programar',
  templateUrl: 'programar.html',
})
export class ProgramarPage {
jornada;
horario;
constructor(
    private _toastCtrl : ToastController,
    )
  {
  }

agregar(){
  let toast =  this._toastCtrl.create ({message:"Se agrego un nuevo horario para alimentar tu mascota",
  position:"top",
  duration:3000});
 toast.present();
}

  }
