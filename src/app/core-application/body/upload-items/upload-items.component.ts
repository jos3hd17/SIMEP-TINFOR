import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { FacturasModel } from '../models/factura.model';
import { UploadItemsService } from './upload-items.service';

@Component({
  selector: 'app-upload-items',
  templateUrl: './upload-items.component.html',
  styleUrls: ['./upload-items.component.css'],
  providers: [UploadItemsService]
})
export class UploadItemsComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
  private arrayBuffer: any;
  private file: File;
  private jsonTable = [];
  private jsonManuales = [];
  private showTable = false;
  private showForm = false;
  private title = "Cargando..";
  private subtitle = "Espere mientras codificamos la información";
  private cargando = false;
  private error=false;
  private localeText:any;
  private option:boolean=false;

  private factura: FacturasModel = new FacturasModel;


  constructor(private uploadService: UploadItemsService) {
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
  options(){
    if(this.option == false){
      this.option=true;
    } else {
      this.option=false;
    }
  }

  ngOnInit() {
    this.cargando = true;
    this.uploadService.getFacturas().subscribe(t => {
      console.log(t);      
      if(t.message){
        console.log("Error");
        this.showTable = true;
        this.cargando = false;
      }
      if(t.facturas){
        this.jsonTable = t.facturas;
        this.showTable = true;
        this.cargando = false;
      }

     
    });
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
    if (this.file == undefined) {
      this.title = "Ingrese un dato";
      this.subtitle = "Debe ingresar un dato para continuar";
      this.error = true;
      return;
    }
    this.title = "Cargando..";
    this.subtitle = "Espere mientras codificamos la información";
    this.cargando = true;
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
      let jsonTemp = this.jsonTable;
      let jsonManualesTemp = this.jsonManuales;
      if (this.jsonManuales === []) {
        jsonTemp = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        console.log(jsonTemp)
        this.uploadService.deleteFacturas().subscribe(t => {
          console.log(t);
        });

        this.uploadService.setFacturas(jsonTemp).subscribe(t => {
          if (!t.message){
            this.title = "Error!";
            this.subtitle = "Verifique que la información ingresada sea valida y se encuentre dentro del rango maximo de datos permitido";
          }
        });

        this.jsonTable = jsonTemp;
      } else {
        jsonTemp = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        console.log(jsonTemp);
        this.jsonManuales.forEach(element => {
          jsonTemp.push(element);
        });
        this.uploadService.deleteFacturas().subscribe(t => {
          console.log(t);
        });

        this.uploadService.setFacturas(jsonTemp).subscribe(t => {
          if (!t.message){
            jsonTemp = [];
            this.title = "Error!";
            this.subtitle = "Verifique que la información ingresada sea valida y se encuentre dentro del rango maximo de datos permitido";
          }
        });
        
        this.jsonTable = jsonTemp;
      }
      this.title = "Cargando..";
      this.subtitle = "Espere mientras subimos la información";
      
      this.showTable = true;
      if (this.gridApi !== undefined) {
        this.gridApi.setRowData(this.jsonTable);
      }
      


      this.cargando = false;
    }
    fileReader.readAsArrayBuffer(this.file);
  }

  save() {

    let tempJson = this.jsonTable;
    let tempManuales = this.jsonManuales;
    let json = {
      Direccion: this.factura.Direccion,
      FechaImpresion: this.factura.FechaImpresion,
      FechaLectura: this.factura.FechaLectura,
      Itin: this.factura.Itin,
      NIC: this.factura.NIC,
      NombreCliente: this.factura.NombreCliente,
      Ruta: this.factura.Ruta,
      Unic: this.factura.Unic,
      Municipio: this.factura.Municipio,
      Clasificacion: this.factura.Clasificacion,
      Lector: this.factura.Lector
    }
   
    tempManuales.push(json);
    tempJson.push(json);
    this.jsonTable = tempJson;
 
    this.showTable = true;
    this.showForm = false;
    
    this.uploadService.setFactura(this.factura).subscribe(t => {
      this.jsonTable = t.facturas;
      console.log(this.jsonTable);
      if (this.gridApi !== undefined) {
    
        this.gridApi.setRowData(this.jsonTable);
      }
    });
    
    

  }






}
