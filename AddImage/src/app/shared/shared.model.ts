import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrialModule } from './material/material.model';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
  ],
  imports: [
    MatrialModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserModule
  ],
  exports:[
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatrialModule,
    CommonModule,
  ]
})
export class SharedModule { }
