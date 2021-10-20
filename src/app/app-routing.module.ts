import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    redirectTo: 'professionals'
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
