import { Component, OnInit } from '@angular/core';
import { ReadFactsService } from './read-facts.service';

@Component({
  selector: 'app-read-facts',
  templateUrl: './read-facts.component.html',
  styleUrls: ['./read-facts.component.css'],
  providers:[ReadFactsService]
})
export class ReadFactsComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private columnDefs:any=[];
  public jsonTableLeidos: any =[];
  public NIC:string="";
  public localeText;

  constructor(private readFactsService:ReadFactsService) { 
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
    this.readFactsService.getLeidas().subscribe(t=>{
      this.jsonTableLeidos = t.facturas;
      this.gridApi.setRowData(this.jsonTableLeidos);
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.jsonTableLeidos);
  }

  read(){
    this.readFactsService.setLeido(this.NIC).subscribe(t =>{
      this.jsonTableLeidos = t.facturas;
      this.NIC = "";
      this.gridApi.setRowData(this.jsonTableLeidos);
    })
  }

}
