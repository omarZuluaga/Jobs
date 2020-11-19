import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreAuthenticate } from '@Utils/class/store-auth.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isCollapse = true;

  constructor(private router: Router, private storeAuthenticate: StoreAuthenticate) { }

  ngOnInit(): void {
  }

  toggleState() {
    const foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }

  logOut() {
    this.storeAuthenticate.logout();
    this.router.navigate(['/login']);
  }
}
