import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PublicPagesComponent } from './public-pages.component';


const routes: Routes = [
  {
    path: '',
    component: PublicPagesComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicPagesRoutingModule { }
