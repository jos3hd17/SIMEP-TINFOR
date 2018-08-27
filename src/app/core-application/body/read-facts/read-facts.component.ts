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

  constructor(private readFactsService:ReadFactsService) { 
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
      this.gridApi.setRowData(this.jsonTableLeidos);
    })
  }

}
