import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // really wish you could do outlet: ['primary','left','right']
  {
    outlet: 'primary',
    path: 'murray',
    loadChildren: () => import('./murray/murray.module').then(m => m.MurrayModule)
  },
  {
    outlet: 'left',
    path: 'murray',
    loadChildren: () => import('./murray/murray.module').then(m => m.MurrayModule)
  },
  {
    outlet: 'right',
    path: 'murray',
    loadChildren: () => import('./murray/murray.module').then(m => m.MurrayModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
