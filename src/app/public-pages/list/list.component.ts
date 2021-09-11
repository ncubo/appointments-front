import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProfessional } from 'src/app/models/professional.interfase';
import { loadProfessionals } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  
  loading: boolean = false;
  subscription: Subscription = new Subscription();
  professionalList: IProfessional[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.subscription = this.store.select('professionals').subscribe( ({professionals}) => {
      this.professionalList = professionals;
    } )

    this.store.dispatch( loadProfessionals() )
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
    this.subscription.unsubscribe();
  }

}
