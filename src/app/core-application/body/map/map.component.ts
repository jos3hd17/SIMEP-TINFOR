import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  showList: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  show() {
    if (this.showList == true) {
      this.showList = false
    } else {
      this.showList = true;
    }
  }

}
