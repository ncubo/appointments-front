import { createAction, props } from '@ngrx/store';
import { IProfessional } from '../../models/professional.interfase';

export const newProfessional = createAction(
    '[Professional] Load New Professional',
    props<{ professional: IProfessional}>()
    );

export const newProfessionalSuccess = createAction(
    '[Professional] New Professional Success'
)

export const newProfessionalError = createAction(
    '[Professional] New Professional Error',
    props<{ payload: any }>()
)