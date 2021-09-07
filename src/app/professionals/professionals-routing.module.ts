import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ProfessionalsComponent } from './professionals.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalsComponent,
    children: [
      { path: 'edit', component: EditComponent },
      { path: 'list', component: ListComponent },
      { path: 'new', component: NewComponent },
      { path: 'search', component: SearchComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsRoutingModule { }
