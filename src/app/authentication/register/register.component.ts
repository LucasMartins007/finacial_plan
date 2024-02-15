import { Component } from '@angular/core';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    email: new UntypedFormControl('', { validators: Validators.required }),
    password: new UntypedFormControl('', { validators: Validators.required }),
  });

  get username(): AbstractControl | null {
    return this.registerFormGroup.get('username');
  }

  get email(): AbstractControl | null {
    return this.registerFormGroup.get('email');
  }

  get password(): AbstractControl | null {
    return this.registerFormGroup.get('password');
  }
}
