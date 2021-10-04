import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { ProfessionalsService } from "src/app/services/professionals.service";
import * as professionalsAction from '../actions/professional.actions';


@Injectable()
export class ProfessionalEffects {

    constructor( private actions$: Actions, private professionalService: ProfessionalsService){

    }

    newProfessionals$ = createEffect( (): any => 
             this.actions$.pipe(
                    ofType( professionalsAction.newProfessional ),
                    // tap(data => console.log('effect tapp',data)),
                    mergeMap(
                        ( action ) => this.professionalService.insertNewProfessional(action.professional)
                                    .pipe(
                                        tap( professional => console.log('data effect newProfessionals$', professional)),
                                        map( () => professionalsAction.newProfessionalSuccess() ),
                                        // catchError don't return an observable, because of that we use 'of'
                                        catchError( err => of(professionalsAction.newProfessionalError({ payload: err })))
                                    )
                    )
            ) 
    );

    loadProfessionalDetail$ = createEffect( (): any => 
             this.actions$.pipe(
                    ofType( professionalsAction.detailProfessional ),
                    // tap(data => console.log('effect tapp',data)),
                    mergeMap(
                        ( action ) => this.professionalService.getProfessionalsById(action.id)
                                    .pipe(
                                        tap( professional => console.log('data effect loadProfessionalDetail$', professional)),
                                        map( (professional) => professionalsAction.detailProfessionalSuccess({ professional }) ),
                                        // catchError don't return an observable, because of that we use 'of'
                                        catchError( err => of(professionalsAction.detailProfessionalError({ payload: err })))
                                    )
                    )
            ) 
    );

}