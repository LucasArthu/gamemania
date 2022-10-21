import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor(
    //injeção de dependencia do modulo https
    private httpClient: HttpClient
  ) { }

  urlLogin = "http://localhost:3000/signin";



  //post de login - insomnia
  LogarUsuario(usuario: User): Observable<any> {

    return this.httpClient.post(this.urlLogin, JSON.stringify(usuario) , {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
      observe: 'response'
     })

  }


}
