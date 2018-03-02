import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'
//pages

import { LoginPage} from '../pages/login/login';
import { RegistroPage} from '../pages/registro/registro';
import { MenuPage} from '../pages/menu/menu';
import { ProgramarPage} from '../pages/programar/programar';
import { PerfilPage} from '../pages/perfil/perfil';
import { ActualPage } from '../pages/actual/actual';
import { HomePage} from '../pages/home/home';
import {RegistrarPage} from '../pages/registrar/registrar';
import {RecuperarPage} from '../pages/recuperar/recuperar'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//providers
import {LogeoService} from '../services/logeo.service'
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistroPage,
    MenuPage,
    ProgramarPage,
    PerfilPage,
    ActualPage ,
    HomePage,
    RegistrarPage,
    RecuperarPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistroPage,
    MenuPage,
    ProgramarPage,
    PerfilPage,
    ActualPage ,
    HomePage,
    RegistrarPage,
    RecuperarPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
        LogeoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
