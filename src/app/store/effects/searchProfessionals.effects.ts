import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { ProfessionalsService } from "src/app/services/professionals.service";
import * as searchProfessionalsActions from '../actions/searchProfessionals.actions';


@Injectable()
export class SearchProfessionalsEffects {

    constructor( private actions$: Actions, private professionalService: ProfessionalsService){

    }

    loadProfessionals$ = createEffect( (): any => 
             this.actions$.pipe(
                    ofType( searchProfessionalsActions.loadSearchProfessionals ),
                    // tap(data => console.log('effect tapp',data)),
                    mergeMap(
                        (action) => this.professionalService.searchProfessional(action.text)
                                    .pipe(
                                        tap( professionals => console.log('data effect', professionals)),
                                        map( professionals => searchProfessionalsActions.loadSearchProfessionalsSuccess({ professionals }) ),
                                        // catchError don't return an observable, because of that we use 'of'
                                        catchError( err => of(searchProfessionalsActions.loadSearchProfessionalsError({ payload: err })))
                                    )
                    )
            ) 
    );

}