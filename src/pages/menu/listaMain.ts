//pages
import { ProgramarPage} from '../programar/programar';
import { ActualPage } from '../actual/actual';
import {RegistrarPage} from '../registrar/registrar';
//Se maneja la lista del main, su contenido son los siguientes arrays
export class listaMain{
  manejoMain: Array<any> = [
    {
      id:1,
      icono:"ios-browsers",
      titulo:"Programar alimentación",
      navegacion:ProgramarPage,
      permisos:false
    },
    {
      id:2,
      icono:"ios-card",
      titulo:"Registrar masota",
      navegacion:RegistrarPage,
      permisos:false
    },
    {
      id:3,
      icono:"md-contacts",
      titulo:"Actual programa alimentacion",
      navegacion:ActualPage,
      permisos:false
    }
  ]


//perfil por defec

  perfil : Array<any> = [
    {
      icono:"md-settings",
      titulo:"Configuraciones",
    },  {
      icono:"md-log-out",
      titulo:"  Cerrar sesión",
      navegacion:"LoginPage"

    },
  ]



}
