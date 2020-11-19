import { FormGroup, FormControl, Validators } from '@angular/forms';

export class AuthForm {

  LoginForm() {
    return new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.nullValidator, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.nullValidator]
      })
    });
  }
}