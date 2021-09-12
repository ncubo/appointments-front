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
  loaded: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    console.log('SearchComponent');
    this.subscription = this.store.select('searchProfessionals').subscribe( ({professionals, loaded}) => {
      this.professionalList = professionals;
      console.log('this.professionalList',this.professionalList);
      this.loaded = loaded;
    } )
  }

  searchProfessional(textToSearch: string){

    console.log('textToSearch: ',textToSearch);
    if(textToSearch !== ''){
      this.store.dispatch( loadSearchProfessionals({text: textToSearch}));
    }

  }

  ngOnDestroy(): void {
    console.log('ondestroy');
    this.subscription.unsubscribe();
  }
  
}
