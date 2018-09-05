import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturasModel } from '../models/factura.model';
import * as baseUrl from '../../../../assets/const/constants';

@Injectable({
  providedIn: 'root'
})
export class FactsByUserService {

  getFactsUrl =  baseUrl.baseUrl + 'facturas/lector'; //Para guardar todas las facturas
  deleteFactsUrl = baseUrl.baseUrl + '/factura/lector/eliminar'; //Para eliminar todas las facturas
  
  
  constructor(private http:HttpClient) { }
  getUserAndDocuments(numeroDocumento):Observable<any>{
    let json = {
      numeroDocumento:numeroDocumento
    }
    return this.http.post(this.getFactsUrl,json);
  }
  

  deleteFactsByUser(numeroDocumento):Observable<any>{
    let json = {
      numeroDocumento:numeroDocumento
    }
    return this.http.post(this.deleteFactsUrl,json);
  }
}
