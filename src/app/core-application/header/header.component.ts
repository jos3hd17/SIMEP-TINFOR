import { Component, OnInit } from '@angular/core';
import { User } from '../../user-management/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public nombre:string="";
  public user:User=new User();
  constructor() {
    if(sessionStorage.getItem("usuario")){
      this.user = JSON.parse(sessionStorage.getItem("usuario"));
    } else {
      this.user = JSON.parse(localStorage.getItem("usuario"));
    }
   
    console.log(this.user);
    this.nombre = this.user.nombre;
   }

  ngOnInit() {
  }

}
