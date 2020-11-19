import { Injectable } from '@angular/core';
import { Http } from '@Utils/class/http.class'
import { Login, Profile } from '@Utils/types/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  login(login: Login) { 
    return this.http.post('auth/login', login);
  }

  getProfile(): Observable<Profile> {
    return this.http.get('auth/me');
  }
}
