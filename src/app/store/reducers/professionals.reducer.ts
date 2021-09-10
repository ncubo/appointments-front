import { createReducer, on } from '@ngrx/store';
import { loadProfessionals, loadProfessionalsSuccess, loadProfessionalsError } from '../actions';
import { IProfessional } from '../../models/professional.interfase';

export interface ProfessionalState {
    professionals: IProfessional[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const professionalsInitialState: ProfessionalState = {
    professionals: [],
    loaded: false,
    loading: false,
    error: null
}

const _professionalsReducer = createReducer(professionalsInitialState,

    on(loadProfessionals, state => ({ ...state, loading: true})),

    on(loadProfessionalsSuccess, (state,{ professionals } ) => ({ ...state, loading: false, loaded: true, professionals: [ ...professionals ]})),

    on(loadProfessionalsError, (state,{ payload } ) => ({ ...state, loading: false, loaded: false, error: payload })),

);

export function professionalsReducer(state: any, action: any) {
    return _professionalsReducer(state, action);
}