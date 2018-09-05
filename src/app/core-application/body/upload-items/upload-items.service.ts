import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { FacturasModel } from '../models/factura.model';
import * as baseUrl from '../../../../assets/const/constants';



@Injectable({
  providedIn: 'root'
})
export class UploadItemsService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  saveFacturasUrl = baseUrl.baseUrl + 'facturas'; //Para guardar todas las facturas
  getFacturaUrl = baseUrl.baseUrl + 'factura'; //Para guardar todas las facturas
  deleteFacturaUrl = baseUrl.baseUrl + 'facturas/eliminar'; //Para guardar todas las facturas

  constructor(private http:HttpClient) { }
  display(value: boolean){
    this.status.next(value);
  }

  setFacturas(facturasList):Observable<any>{

    let json ={
        facturas:facturasList
    } 
    console.log(json);
    return this.http.post(this.saveFacturasUrl,json);
  }
  setFactura(factura):Observable<any>{
    let json ={
      facturas:[factura]
  } 
    return this.http.post(this.saveFacturasUrl,json);
  }
  getFacturas():Observable<any>{
    return this.http.get(this.getFacturaUrl);
  }
  deleteFacturas(){
    return this.http.get(this.deleteFacturaUrl);
  }
}
