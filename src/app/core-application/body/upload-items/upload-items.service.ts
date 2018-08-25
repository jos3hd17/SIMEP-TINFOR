import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturasModel } from '../models/factura.model';
import * as baseUrl from '../../../../assets/const/constants';


@Injectable({
  providedIn: 'root'
})
export class UploadItemsService {
  saveFacturasUrl = baseUrl.baseUrl + 'facturas'; //Para guardar todas las facturas
  constructor(private http:HttpClient) { }

  setFacturas(facturasList):Observable<any>{

    let json ={
        facturas:facturasList
    } 
    console.log(json);
    return this.http.post(this.saveFacturasUrl,json);
  }
}
