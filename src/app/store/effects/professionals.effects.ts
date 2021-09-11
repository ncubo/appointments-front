import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { ProfessionalsService } from "src/app/services/professionals.service";
import * as professionalsActions from '../actions/professionals.actions';



@Injectable()
export class ProfessionalsEffects {

    constructor( private actions$: Actions, private professionalService: ProfessionalsService){

    }

    loadProfessionals$ = createEffect( (): any => 
             this.actions$.pipe(
                    ofType( professionalsActions.loadProfessionals ),
                    // tap(data => console.log('effect tapp',data)),
                    mergeMap(
                        () => this.professionalService.getProfessionals()
                                    .pipe(
                                        tap( professionals => console.log('data effect',professionals)),
                                        map( professionals => professionalsActions.loadProfessionalsSuccess({ professionals }) ),
                                        // catchError don't return an observable, because of that we use 'of'
                                        catchError( err => of(professionalsActions.loadProfessionalsError({ payload: err })))
                                    )
                    )
            ) 
    );

}