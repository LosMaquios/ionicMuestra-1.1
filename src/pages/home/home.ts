// Vendor
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';

//pagina


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

constructor(
    private _navCtrl: NavController,
    private _toastCtrl : ToastController,
    private _loadingCtrl: LoadingController,

  ) {}


  }
