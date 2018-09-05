import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user-management/models/user';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private user:User = new User;
  constructor(private router: Router) { 
    if(sessionStorage.getItem('usuario')){
      this.user = JSON.parse(sessionStorage.getItem('usuario'));
    }
    if(localStorage.getItem('usuario')){
      this.user = JSON.parse(localStorage.getItem('usuario'));
    }
  }

  ngOnInit() {
  }

  signIn(){
    this.router.navigate(['sign-in']);
  }
  closeSession() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['login']);
  }

  goTo(id) {
    switch (id) {
      case 1:
        this.router.navigate(['core/preview']);
        break;
      case 2:
        this.router.navigate(['core/map']);
        break;
      case 3:
        this.router.navigate(['core/upload']);
        break;
      case 4:
        this.router.navigate(['core/deliver']);
        break;
      case 5:
        this.router.navigate(['core/read']);
        break;
        case 6:
        this.router.navigate(['core/facts-by-user']);
        break;
      default:
        this.router.navigate(['core/preview']);
        break;
    }
  }
}
