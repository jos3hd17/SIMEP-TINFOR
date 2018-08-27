import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../models/search-res.model';
import { DelivererService } from './deliverer.service';

@Component({
  selector: 'app-deliverer',
  templateUrl: './deliverer.component.html',
  styleUrls: ['./deliverer.component.css'],
  providers:[DelivererService]
})
export class DelivererComponent implements OnInit {
  private gridApiLeidos;
  private gridColumnApiLeidos;
  private gridApiAsignados;
  private gridColumnApiAsignados;
  private columnDefs;
  public idUser: string = "";
  private rowData: any[];
  private rowSelection;
  private showInformation:boolean =false;
  private responseSearch:SearchResponse = new SearchResponse();
  public jsonTableLeidos: any = [];
  public jsonTableAsignados: any = [];
  constructor(private delivererService:DelivererService) {
    this.jsonTableAsignados = [];
    //this.responseSearch.leidos = this.jsonTableLeidos;
    
    this.rowSelection = "multiple";
    this.columnDefs = [
      {
        headerName: "Fecha impresion",
        field: "FechaImpresion",
        width: 100,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "NIC",
        field: "NIC",
        width: 70,
        sortingOrder: ["asc", "desc"],
        autoHeight: true

      },
      {
        headerName: "Nombre del cliente",
        field: "NombreCliente",
        width: 150,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "Direccion",
        field: "Direccion",
        width: 100,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "Unic",
        field: "Unic",
        width: 70,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "Ruta",
        field: "Ruta",
        width: 100,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "Itin",
        field: "Itin",
        width: 100,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "FechaLectura",
        field: "FechaLectura",
        width: 80,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "Municipio",
        field: "Municipio",
        width: 70,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "Clasificacion",
        field: "Clasificacion",
        width: 60,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "Lector",
        field: "Lector",
        width: 100,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      }
    ]


  }

  ngOnInit() {
  }
  agregar() {

  }


  onGridReady(params) {
    this.gridApiLeidos = params.api;
    this.gridColumnApiLeidos = params.columnApi;
    params.api.setRowData(this.responseSearch.leidos);
  }
  onGridTwoReady(params) {
    this.gridApiAsignados = params.api;
    this.gridColumnApiAsignados = params.columnApi;
    params.api.setRowData(this.jsonTableAsignados);
  }

  onSelectionChanged() {
    var selectedRows = this.gridApiLeidos.getSelectedRows();
    console.log(selectedRows);
    this.jsonTableAsignados = [];
    let tempTableAsignados = this.jsonTableAsignados;
    tempTableAsignados.push(selectedRows);
    console.log(tempTableAsignados);
    this.jsonTableAsignados = tempTableAsignados;
    console.log(this.jsonTableAsignados);
    this.gridApiAsignados.setRowData(this.jsonTableAsignados[0]);
   }
  search() {
    this.delivererService.searchUserById(this.idUser).subscribe(t=>{
      console.log(t);
      if(t.usuario){
        this.showInformation =true;
        this.responseSearch.leidos = t.facturas;
       // this.gridApiLeidos.setRowData(this.responseSearch.leidos);
       
      } else {
        this.showInformation = false;
      }
    });
    
  }

  save(){
    console.log(this.jsonTableAsignados);
    localStorage.setItem("asignados", JSON.stringify(this.jsonTableAsignados));
    localStorage.setItem("leidos", JSON.stringify(this.responseSearch));
    
  }

}
