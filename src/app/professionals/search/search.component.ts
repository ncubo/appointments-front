import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProfessional } from 'src/app/models/professional.interfase';
import { AppState } from 'src/app/store/app.reducer';
import { loadSearchProfessionals } from '../../store/actions/searchProfessionals.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  professionalList: IProfessional[] = [];
  loading: boolean = false;
  loaded: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    console.log('SearchComponent');
    this.subscription = this.store.select('searchProfessionals').subscribe( ({ professionals, loaded, loading }) => {
      this.professionalList = professionals;
      this.loading = loading;
      this.loaded = loaded;
    } )
  }

  searchProfessional(textToSearch: string){

    if(textToSearch !== ''){
      this.store.dispatch( loadSearchProfessionals({ text: textToSearch }));
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
