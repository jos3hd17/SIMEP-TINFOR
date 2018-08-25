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

  private factura: FacturasModel = new FacturasModel;


  constructor(private uploadService: UploadItemsService) {

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
    if (this.file == undefined) {
      this.title = "Ingrese un dato";
      this.subtitle = "Debe ingresar un dato para continuar";
      this.cargando = true;
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
        this.jsonTable = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      } else {
        jsonTemp = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        this.jsonManuales.forEach(element => {
          jsonTemp.push(element);
        });
        this.jsonTable = jsonTemp;
      }
      this.showTable = true;
      if (this.gridApi !== undefined) {
        this.gridApi.setRowData(this.jsonTable);
      }
      this.title = "Cargando..";
      this.subtitle = "Espere mientras subimos la información";
      this.uploadService.setFacturas(this.jsonTable).subscribe(t => {
        console.log(t.message);
      });


      this.cargando = false;
      console.log(this.jsonTable);
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
    if (this.gridApi !== undefined) {
      this.gridApi.setRowData(this.jsonTable);
    }

  }






}
