import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfessionalsComponent } from './professionals/professionals.component';


const routes: Routes = [
  { 
    path: 'professionals', 
    loadChildren: () => import('./professionals/professionals.module').then(m => m.ProfessionalsModule)
  },
  { 
    path: 'public-pages', 
    loadChildren: () => import('./public-pages/public-pages.module').then(m => m.PublicPagesModule)
  },
  {
    path: '**',
    redirectTo: 'public-pages'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
