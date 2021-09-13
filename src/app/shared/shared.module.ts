import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProfessionalCardComponent } from './professional-card/professional-card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ProfessionalCardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ProfessionalCardComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
