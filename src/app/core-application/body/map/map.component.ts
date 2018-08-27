import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers:[MapService]
})
export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  array = [];
    arraybase=[];
    searchbar ="";
    messager = "../../../../assets/images/delivery-cart.png";
    locate = "../../../../assets/images/placeholder.png";
  showList: boolean = false;
  constructor(private service: MapService) { }

  ngOnInit() {
    this.service.getCollection().subscribe(res => {
      this.array = res;
      this.arraybase=res;
  });
  }

  show() {
    if (this.showList == true) {
      this.showList = false
    } else {
      this.showList = true;
    }
  }

  center(lat,long){
    this.lat = lat;
    this.lng = long;
}
search(){

  let jsonArray =this.arraybase.filter(t => t.mensajero.nombre.toLowerCase().search(this.searchbar)==0 || t.mensajero.apellidos.toLowerCase().search(this.searchbar)==0);
  this.array = jsonArray;
} 

}
