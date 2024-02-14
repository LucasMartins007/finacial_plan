import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MainHeaderComponent } from './main-header/main-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,

    BrowserAnimationsModule,
    CommonModule,
  ],
  exports: [MainHeaderComponent],
})
export class HeaderModule {}
