import { createAction, props } from '@ngrx/store';
import { IProfessional } from 'src/app/models/professional.interfase';

export const loadSearchProfessionals = createAction(
    '[Search Professionals] Load Search Professionals',
    props<{ text: string }>()
    );

export const loadSearchProfessionalsSuccess = createAction(
    '[Search Professionals] Load Search Professionals Success',
    props<{ professionals: IProfessional[] }>()
);

export const loadSearchProfessionalsError = createAction(
    '[Search Professionals] Load Search Professionals Error',
    props<{ payload: any }>()
);