// Vendor
import { Component } from '@angular/core';
import {  NavController} from 'ionic-angular';

//pagina
import {MenuPage} from '../menu/menu'
//service 
import {LogeoService} from '../../services/logeo.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  ip:any;
constructor(
    private _navCtrl: NavController,
    private logeoService:LogeoService,

  ) {}

  peticion(){
    console.log(this.ip)
 this.logeoService.ip(this.ip).then(response =>{
console.log(response)
this._navCtrl.push(MenuPage);
 }).catch(error => {
console.log(error)
 })
  }

  }
