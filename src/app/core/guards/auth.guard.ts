import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreAuthenticate } from '@Utils/class/store-auth.class'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: StoreAuthenticate) { }

  canActivate(): boolean {
    const token = this.store.getStoredTokens();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}