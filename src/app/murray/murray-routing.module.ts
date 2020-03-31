import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MurrayComponent } from './murray.component';


const routes: Routes = [
  {
    path: '',
    component: MurrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MurrayRoutingModule { }
