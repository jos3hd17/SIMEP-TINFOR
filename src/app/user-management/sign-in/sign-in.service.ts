import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as baseUrl from '../../../assets/const/constants';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import * as crypto from 'crypto-js'; 


@Injectable({
  providedIn: 'root'
})
export class SignInService {
  const = baseUrl.baseUrl + 'usuario'; //Para guardar un usuario
  constructor(private http: HttpClient) {

  }
  
  saveUser(data: User): Observable<any> {
    
    let json = {
      numeroDocumento: data.numeroDocumento,
      lugarExpedicion: data.lugarExpedicion,
      fechaExpedicion: data.fechaExpedicion,
      fechaNacimiento: data.fechaNacimiento,
      genero: data.genero,
      nombreEmpresa: data.nombreEmpresa,
      nombre: data.nombre,
      usuario: data.usuario,
      apellidos: data.apellidos,
      email: data.email,
      numeroTelefono: data.numeroTelefono,
      ocupacion: data.ocupacion,
      cargo: data.cargo,
      centroTrabajo: data.centroTrabajo,
      password: data.password,
      direccion: data.direccion
    }
    return this.http.post(this.const, json);
  }
}
