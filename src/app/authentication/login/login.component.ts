import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormStyle: string = 'login-form';
  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      username: [''],
      senha: [''],
    });
  }

  ngOnInit(): void {}
}
