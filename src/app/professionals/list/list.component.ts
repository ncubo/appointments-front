import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProfessional } from 'src/app/models/professional.interfase';
import { loadProfessionals } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { IError } from '../../models/error.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  professionalList: IProfessional[] = [];
  loaded: boolean = false;
  error!: IError;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.subscription = this.store.select('professionals').subscribe( ({ professionals, loaded, error }) => {
      this.professionalList = professionals;
      this.loaded = loaded;
      this.error = error;
    } );

    this.dispatchLoadProfessionals();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  dispatchLoadProfessionals(){
    this.store.dispatch( loadProfessionals() );
  }

}
