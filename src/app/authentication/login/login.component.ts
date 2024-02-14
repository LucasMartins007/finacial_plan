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
      username: new UntypedFormControl('', { validators: Validators.required }),
      password: new UntypedFormControl('', { validators: Validators.required }),
    },
    { validators: [] }
  );

  get username(): AbstractControl | null {
    return this.loginFormGroup.get('username');
  }

  get password(): AbstractControl | null {
    return this.loginFormGroup.get('password');
  }

  constructor() {}

  ngOnInit(): void {
    console.log('');
  }
}
