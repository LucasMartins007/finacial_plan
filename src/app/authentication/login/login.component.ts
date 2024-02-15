import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup = new UntypedFormGroup(
    {
      email: new UntypedFormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new UntypedFormControl('', { validators: Validators.required }),
    },
    { validators: [] }
  );

  get email(): AbstractControl | null {
    return this.loginFormGroup.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginFormGroup.get('password');
  }

  constructor() {}

  ngOnInit(): void {
    console.log('');
  }
}
