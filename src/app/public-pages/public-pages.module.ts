import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPagesComponent } from './public-pages.component';
import { ListComponent } from './list/list.component';
import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PublicPagesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PublicPagesRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PublicPagesModule { }
