import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  @Input() title:string;
  @Input() subtitle:string;
  @Input() color:string;

  constructor() { 
   
  }

  ngOnInit() {
  }
 

}
