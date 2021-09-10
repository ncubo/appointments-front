import { createAction, props } from '@ngrx/store';
import { IProfessional } from 'src/app/models/professional.interfase';

export const loadProfessionals = createAction('[Professionals] Load Professionals');

export const loadProfessionalsSuccess = createAction(
    '[Professionals] Load Professionals Success',
    props<{ professionals: IProfessional[] }>()
);

export const loadProfessionalsError = createAction(
    '[Professionals] Load Professionals Error',
    props<{ payload: any }>()
);