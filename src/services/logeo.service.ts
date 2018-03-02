
// Vendor
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

// Definitions

@Injectable()
export class LogeoService {

    constructor(
    private _http: HttpClient
  ) {}

correo(correo,codigo):Promise<any>{
  console.log("entro")
return this._http.post("https://us-central1-ionic1-42d1d.cloudfunctions.net/sendMail/",{
  "to":"rmartinez@conexia.com",
  	"subject":"Contraseña",
  	"message":"<head>Pets</head> <h1>Recuperar la contraseña </h1> <p>Su clave para recuperar la contraseña es "+codigo+"</p>"
}).toPromise()
  }
}
