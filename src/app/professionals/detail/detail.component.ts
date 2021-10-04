import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProfessional } from 'src/app/models/professional.interfase';
import { TStateAction } from 'src/app/models/stateAction.type';
import { detailProfessional } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { IError } from '../../models/error.interface';


@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  professional!: IProfessional;
  loading: boolean = false;
  loaded: boolean = false;
  status: TStateAction = 'waiting';
  error!: IError;
  id!: number;
  
  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.subscription = this.store.select('professional').subscribe( ({ professional, loading, loaded, error, state }) => {
      this.professional = professional;
      this.loading = loading;
      this.loaded = loaded;
      this.status = state;
      this.error = error;
    } );

    this.id = this.activatedRoute.snapshot.params.id;
    this.store.dispatch( detailProfessional({ id: this.id }) );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
