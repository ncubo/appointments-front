import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProfessional } from 'src/app/models/professional.interfase';
import { detailProfessional } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { isLoading } from '../../store/actions/ui.actions';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  subscription: Subscription = new Subscription();
  professional!: IProfessional;
  loading: boolean = false;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.subscription = this.store.select('professional').subscribe( ({professional, loading}) => {
      this.professional = professional;
      this.loading = loading;
      console.log('detaillll',this.professional);
    } );

    const id = this.activatedRoute.snapshot.params.id;
    this.store.dispatch( detailProfessional({id}) );

  }

}
