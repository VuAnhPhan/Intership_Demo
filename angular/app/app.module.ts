import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HeroFormTemplateComponent  } from './app.component';
import {  DanhSachCongViec} from './tour.component';


import { ForbiddenValidatorDirective } from './cam';

@NgModule({
  declarations: [
  DanhSachCongViec,HeroFormTemplateComponent,
    
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [HeroFormTemplateComponent]
})
export class AppModule { }
