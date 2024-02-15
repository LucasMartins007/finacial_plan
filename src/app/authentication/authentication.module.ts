import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';
import { LoginComponent } from './login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, AuthenticationComponent, RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,

    MatCardModule,
    MatListModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule,
  ],
  providers: [LoginService],
  exports: [LoginComponent, AuthenticationComponent, RegisterComponent],
})
export class AuthenticationModule {}
