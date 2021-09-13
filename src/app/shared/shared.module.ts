import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProfessionalCardComponent } from './professional-card/professional-card.component';
import { LoaderComponent } from './loader/loader.component';
import { ProfessionalCardDetailComponent } from './professional-card-detail/professional-card-detail.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ProfessionalCardComponent,
    LoaderComponent,
    ProfessionalCardDetailComponent
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
    ProfessionalCardDetailComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
