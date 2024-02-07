import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

const modPrimeng: any = [
  CardModule,
  InputTextModule,
  ButtonModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeng,
    PasswordModule
  ],
  exports:[
    modPrimeng
  ]
})
export class PrimengModule { }
