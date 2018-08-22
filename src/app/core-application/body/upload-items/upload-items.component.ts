import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-upload-items',
  templateUrl: './upload-items.component.html',
  styleUrls: ['./upload-items.component.css']
})
export class UploadItemsComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
  private arrayBuffer: any;
  private file: File;
  private jsonTable = {};
  private showTable=false;
  private title = "Cargando..";
  private subtitle = "Espere mientras codificamos la información";
  private cargando = false;

  
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
    params.api.setRowData(this.jsonTable)
  }



  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.jsonTable = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.showTable = true;
      this.cargando = false;
    }
    fileReader.readAsArrayBuffer(this.file);
  }

}
