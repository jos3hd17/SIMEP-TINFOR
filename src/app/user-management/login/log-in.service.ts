import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as baseUrl from '../../../assets/const/constants';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import * as crypto from 'crypto-js'; 

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  const = baseUrl.baseUrl + 'usuario/logIn'; //Para guardar un usuario
  constructor(private http:HttpClient) { 

  }
  loginUser(data:User,password:string): Observable<any>{
    

    let json = {
        usuario: data.usuario,
        password:password
    }

    return this.http.post(this.const,json);
  }

}
