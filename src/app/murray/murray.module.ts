import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MurrayRoutingModule } from './murray-routing.module';
import { MurrayComponent } from './murray.component';


@NgModule({
  declarations: [MurrayComponent],
  imports: [
    CommonModule,
    MurrayRoutingModule
  ]
})
export class MurrayModule { }
