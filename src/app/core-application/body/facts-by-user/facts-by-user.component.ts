import { Component, OnInit } from '@angular/core';
import { FactsByUserService } from './facts-by-user.service';

@Component({
  selector: 'app-facts-by-user',
  templateUrl: './facts-by-user.component.html',
  styleUrls: ['./facts-by-user.component.css'],
  providers:[FactsByUserService]
})
export class FactsByUserComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs:any=[];
  private idUser:string="";
  private jsonTable:any=[];
  private localeText;

  constructor(private factsByUser:FactsByUserService) {
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
  
    this.columnDefs = [
      {
        headerName: "Fecha impresion",
        field: "FechaImpresion",

        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "NIC",
        field: "NIC",

        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "Nombre del cliente",
        field: "NombreCliente",

        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "Direccion",
        field: "Direccion",

        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "Unic",
        field: "Unic",

        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "Ruta",
        field: "Ruta",
        
        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "Itin",
        field: "Itin",
        
        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "FechaLectura",
        field: "FechaLectura",
        
        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "Municipio",
        field: "Municipio",
        
        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "Clasificacion",
        field: "Clasificacion",
        
        sortingOrder: ["asc", "desc"]
      },
      {
        headerName: "Lector",
        field: "Lector",
        
        sortingOrder: ["asc", "desc"]
      }
    ]
   }

  ngOnInit() {
    

  }
  deleteFacts(){
    this.factsByUser.deleteFactsByUser(this.idUser).subscribe(t=>{
      console.log(t);
    });
    this.jsonTable = [];
    this.gridApi.setRowData(this.jsonTable);
  }
  getData(){
    this.factsByUser.getUserAndDocuments(this.idUser).subscribe(t=>{
      console.log(t);
      if(t.facturas[0]){
        console.log(t.facturas[0].facturas[0]);
        this.jsonTable = t.facturas[0].facturas[0];
        this.gridApi.setRowData(this.jsonTable);
      } else {
        this.jsonTable = [];
      }
      
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.jsonTable);
  }

}
