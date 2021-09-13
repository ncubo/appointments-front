import { createAction, props } from '@ngrx/store';
import { IProfessional } from '../../models/professional.interfase';

export const newProfessional = createAction(
    '[Professional] Load New Professional',
    props<{ professional: IProfessional }>()
);

export const newProfessionalSuccess = createAction(
    '[Professional] New Professional Success'
)

export const newProfessionalError = createAction(
    '[Professional] New Professional Error',
    props<{ payload: any }>()
)

export const detailProfessional = createAction(
    '[Professional] Detail Professional',
    props<{ id: number }>()
);

export const detailProfessionalSuccess = createAction(
    '[Professional] Detail Professional Success',
    props<{ professional: IProfessional }>()
);

export const detailProfessionalError = createAction(
    '[Professional] Detail Professional Error',
    props<{ payload: any }>()
);