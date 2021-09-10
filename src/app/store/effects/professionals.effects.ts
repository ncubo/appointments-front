import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap } from "rxjs/operators";
import { ProfessionalsService } from "src/app/services/professionals.service";
import * as professionalsActions from '../actions/professionals.actions';


@Injectable()
export class ProfessionalsEffects {

    constructor( private actions$: Actions, private professionalService: ProfessionalsService){

    }

    loadProfessionals$ = createEffect( (): any => 
             this.actions$.pipe(
                    ofType( professionalsActions.loadProfessionals ),
                    tap(data => console.log('effect tapp',data)),
                    mergeMap(
                        () => this.professionalService.getProfessionals()
                                    .pipe(
                                        tap( data => console.log('data effect',data))
                                    )
                    )
            ) 
    );

    // someEffect$ = createEffect(() => {
    //     return this.actions$.pipe(
    //       ...
    //     )
    //   })


}