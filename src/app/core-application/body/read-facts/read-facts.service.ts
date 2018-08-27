import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturasModel } from '../models/factura.model';
import * as baseUrl from '../../../../assets/const/constants';

@Injectable({
  providedIn: 'root'
})
export class ReadFactsService {
  readFactsUrl =  baseUrl.baseUrl + 'factura/lectura'; //Para guardar todas las facturas
  readAllFactsUrl =  baseUrl.baseUrl + 'factura/lectura'; //Para guardar todas las facturas
  
  constructor(private http:HttpClient) { }

  setLeido(factura):Observable<any>{

    let json ={
        NIC:factura
    } 
   
    return this.http.post(this.readFactsUrl,json);
  }

  getLeidas():Observable<any>{
    return this.http.get(this.readAllFactsUrl)
  }
}
