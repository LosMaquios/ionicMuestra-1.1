
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
  "to":correo,
  	"subject":"Recuperar contraseña",
  	"message":"<table><tr><td><h1>Recuperar tu contraseña</h1></td></tr><tr><td><p>Para poder recupear su contraseña ingrese el siguiente codigo "+codigo+"</p></td></tr><tr><td><strong>Pets app in socity C&A LTDA </strong></td></tr></table>",
}).toPromise()
  }

  ip(ip):Promise<any>{
  
    return this._http.get("http://"+ip+"/?sr1=180",{

    }).toPromise();
  }
}
