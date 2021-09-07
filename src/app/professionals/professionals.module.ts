import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { ListComponent } from './list/list.component';
import { ProfessionalsComponent } from './professionals.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NewComponent,
    EditComponent,
    SearchComponent,
    ListComponent,
    ProfessionalsComponent
  ],
  imports: [
    CommonModule,
    ProfessionalsRoutingModule,
    SharedModule
  ],
  exports: [
    //ProfessionalsComponent
  ]
})
export class ProfessionalsModule { }
