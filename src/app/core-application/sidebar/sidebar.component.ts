import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
