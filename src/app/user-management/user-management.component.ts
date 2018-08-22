import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-management',
  template:'<router-outlet></router-outlet>'
})
export class UserManagementComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
    if(sessionStorage.getItem('usuario') || localStorage.getItem('usuario')){
      this.router.navigate(['core/preview']);
    } else {
     this.router.navigate(['index']);
    }
  }

}
