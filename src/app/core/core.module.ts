import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    FlexLayoutModule,
    RouterModule,
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class CoreModule { }
