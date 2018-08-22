import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-core-application',
  templateUrl: './core-application.component.html',
  styleUrls: ['./core-application.component.css']
})
export class CoreApplicationComponent implements OnInit {

  constructor(private router:Router) {
   
   }

  ngOnInit() {
    
  }

}
