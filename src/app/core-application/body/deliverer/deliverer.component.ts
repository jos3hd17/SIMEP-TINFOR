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
  private gridApiUsuarios;
  private gridColumnApiUsuarios;
  private columnDefs;
  private columnUsers;
  public idUser: string = "";
  private rowData: any[];
  private rowSelection;
  private showInformation:boolean =false;
  private responseSearch:SearchResponse = new SearchResponse();
  public jsonTableLeidos: any = [];
  public jsonTableAsignados: any = [];
  public jsonTableUsuarios:any = [];
  public localeText;
  constructor(private delivererService:DelivererService) {
    this.jsonTableAsignados = [];

    this.localeText = {
      page: "Pagina",
      more: "Más",
      to: "A",
      of: "De",
      next: "Siguiente",
      last: "Último",
      first: "Primero",
      previous: "Anterior",
      loadingOoo: "Cargando...",
      selectAll: "Seleccionar todo",
      searchOoo: "Buscar...",
      blanks: "En blanco",
      filterOoo: "Filtrar...",
      applyFilter: "Aplicar filtro...",
      equals: "Igual",
      notEqual: "No es igual",
      lessThanOrEqual: "Menor o igual",
      greaterThanOrEqual: "Mayor o igual",
      inRange: "Rango",
      lessThan: "Menor que",
      greaterThan: "Mayor que",
      contains: "Contiene",
      startsWith: "Comienza por",
      endsWith: "Finaliza por",
      group: "Grupo",
      columns: "Columnas",
      groupBy: "Agrupar por",
      ungroupBy: "Desagrupar",
      resetColumns: "Reestablecer columnas",
      notContains:"No contiene",
      and:"Y",
      or:"O"
    };
  
    
    this.rowSelection = "multiple";
    //this.rowSelection = "single";
    this.columnUsers = [
      {
        headerName: "Nombre",
        field: "nombre",
        width: 250,
        sortingOrder: ["asc", "desc"],
        autoHeight: true
      },
      {
        headerName: "Documento",
        field: "numeroDocumento",
        width: 230,
        sortingOrder: ["asc", "desc"],
        autoHeight: true

      }
    ]
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
    this.delivererService.getUsers().subscribe(t=>{
      if (!t.message){
        this.jsonTableUsuarios = t;
        console.log(t)
        this.gridApiUsuarios.setRowData(this.jsonTableUsuarios);
      }
    });
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
  onGridThreeReady(params) {
    this.gridApiUsuarios = params.api;
    this.gridColumnApiUsuarios = params.columnApi;
    params.api.setRowData(this.jsonTableUsuarios);
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
   onSelectChanged(){
     this.showInformation = true;
     var selectedRows = this.gridApiUsuarios.getSelectedRows();
     console.log(selectedRows[0].numeroDocumento)
     this.search(selectedRows[0].numeroDocumento);
   }
  search(param) {
    console.log(param)
    this.delivererService.searchUserById(param).subscribe(t=>{
      sessionStorage.setItem("usr-temp",param);
      if(t.usuario){
       // this.showInformation =true;
        this.responseSearch.leidos = t.facturas;
        this.gridApiLeidos.setRowData(this.responseSearch.leidos);
      } else {
        this.showInformation = false;
      }
    });
    
  }

  save(){
    
    this.delivererService.setUserAndDocuments(sessionStorage.getItem('usr-temp'),this.jsonTableAsignados).subscribe(t=>{

      console.log(t);
      this.showInformation = false;
      this.idUser ="";

    });
    
  }

}
