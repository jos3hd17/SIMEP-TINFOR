import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturasModel } from '../models/factura.model';
import * as baseUrl from '../../../../assets/const/constants';


@Injectable({
  providedIn: 'root'
})
export class DelivererService {
  readFactsUrl =  baseUrl.baseUrl + 'factura/lectura/usuario'; //Para guardar todas las facturas
  saveFactsUrl =  baseUrl.baseUrl + 'factura/lector'; //Para guardar todas las facturas
  getUsersUrl = baseUrl.baseUrl + 'usuarios';

  constructor(private httpClient:HttpClient) { }

  searchUserById(numeroDocumento):Observable<any>{
    let json = {
      numeroDocumento:numeroDocumento
    }
    return this.httpClient.post(this.readFactsUrl,json);
  }
  setUserAndDocuments(numeroDocumento,facturas):Observable<any>{
    let json = {
      numeroDocumento:numeroDocumento,
      facturas:facturas
    }
    return this.httpClient.post(this.saveFactsUrl,json);
  }

  getUsers():Observable<any>{
    return this.httpClient.get(this.getUsersUrl);
  }


}
