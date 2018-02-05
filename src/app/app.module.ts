import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

//pages

import { LoginPage} from '../pages/login/login';
import { RegistroPage} from '../pages/registro/registro';
import { MenuPage} from '../pages/menu/menu';
import { ProgramarPage} from '../pages/programar/programar';
import { PerfilPage} from '../pages/perfil/perfil';
import { ActualPage } from '../pages/actual/actual';
import { HomePage} from '../pages/home/home';
import {RegistrarPage} from '../pages/registrar/registrar';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    RegistrarPage

  ],
  imports: [
    BrowserModule,
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
    RegistrarPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
