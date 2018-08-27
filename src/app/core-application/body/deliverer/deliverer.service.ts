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

  constructor(private httpClient:HttpClient) { }

  searchUserById(numeroDocumento):Observable<any>{
    let json = {
      numeroDocumento:numeroDocumento
    }
    return this.httpClient.post(this.readFactsUrl,json);
  }

}
