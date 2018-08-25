import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-facts',
  templateUrl: './read-facts.component.html',
  styleUrls: ['./read-facts.component.css']
})
export class ReadFactsComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private columnDefs:any=[];
  public jsonTableLeidos: any = [{
    FechaImpresion: "21/29/0100",
    NIC: "2343"
  },
  {
    FechaImpresion: "21/29/0100",
    NIC: "2345"
  }
  ];

  constructor() { 
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

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.jsonTableLeidos);
  }

}
