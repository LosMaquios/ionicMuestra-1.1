// Vendor
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';

//pagina


@Component({
  selector: 'page-programar',
  templateUrl: 'programar.html',
})
export class ProgramarPage {
jornada;
horario;
constructor(
    private _navCtrl: NavController,
    private _toastCtrl : ToastController,
    private _loadingCtrl: LoadingController,
  )
  {
  }

agregar(){

}

  }
