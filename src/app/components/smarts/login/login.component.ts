import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { AuthForm } from '@Utils/forms/login.forms';
import { StoreAuthenticate } from '@Utils/class/store-auth.class'
import { AuthResponse } from '@Utils/types/http.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authForm: FormGroup = new AuthForm().LoginForm();

  constructor(private service: AuthService, private store: StoreAuthenticate, 
    private router: Router) { }

  ngOnInit(): void {
    if(this.store.getStoredTokens()){
      this.router.navigate(['dashboard']);
    }
  }

  login(): void {
    if (this.authForm.valid) {
      this.service.login(this.authForm.value).subscribe(
        (res: AuthResponse) => {
          this.store.storeToken(res.access_token);
          this.router.navigate(['dashboard']);
        }
      )
    }
  }

}
