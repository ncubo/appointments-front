import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProfessional } from 'src/app/models/professional.interfase';
import { ProfessionalsService } from 'src/app/services/professionals.service';
import { AppState } from 'src/app/store/app.reducer';
import { isLoading, stopLoading } from '../../store/actions/ui.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  
  loading: Boolean = false;
  subscription: Subscription = new Subscription();
  professionalList: IProfessional[] = [];

  constructor(private store: Store<AppState>, private professionalService: ProfessionalsService) { }

  ngOnInit(): void {
    
    this.subscription = this.store.select('ui').subscribe( ui => {
      console.log('ui',ui.loading);
      this.loading = ui.loading;
      console.log('cargando loading public page list');
    });

    this.store.dispatch( isLoading() );
    this.getProfessionalsList();
  }

  ngOnDestroy(): void {
    this.store.dispatch( stopLoading() );
    this.subscription.unsubscribe();
  }

  getProfessionalsList(){
    this.professionalService.getProfessionals()
        .subscribe(resp => {
          if(!resp.error){
            this.professionalList = resp.data;
          }
          this.store.dispatch( stopLoading() );
          console.log('this.professionalList',this.professionalList);
        })
  }

}
