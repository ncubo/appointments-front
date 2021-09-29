import { createReducer, on } from '@ngrx/store';
import { loadProfessionals, loadProfessionalsSuccess, loadProfessionalsError } from '../actions';
import { IProfessional } from '../../models/professional.interfase';

export interface ProfessionalsState {
    professionals: IProfessional[],
    loaded: boolean,
    loading: boolean,
    error: any
}
// { avatar:'', first_name:'', city:'', last_name:'', services: [] }
export const professionalsInitialState: ProfessionalsState = {
    professionals: [],
    loaded: false,
    loading: false,
    error: null
}

const _professionalsReducer = createReducer(professionalsInitialState,

    on(loadProfessionals, state => ({ ...state, loading: true })),

    on(loadProfessionalsSuccess, (state, { professionals } ) => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        professionals: [ ...professionals ]
    })),

    on(loadProfessionalsError, (state, { payload } ) => ({ 
        ...state, 
        loading: false, 
        loaded: false, 
        error: { 
            url : payload.url, 
            name: payload.name, 
            message: payload.message 
        } 
    })),

);

export function professionalsReducer(state: any, action: any) {
    return _professionalsReducer(state, action);
}