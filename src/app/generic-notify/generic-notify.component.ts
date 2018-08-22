import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-notify',
  templateUrl: './generic-notify.component.html',
  styleUrls: ['./generic-notify.component.css']
})
export class GenericNotifyComponent implements OnInit {
  @Input() title:string;
  @Input() subtitle:string;
  constructor() { }

  ngOnInit() {
  }

}
