// Vendor
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';

//pagina


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

constructor(
    private _navCtrl: NavController,
    private _toastCtrl : ToastController,
    private _loadingCtrl: LoadingController,

  ) {}


  }
