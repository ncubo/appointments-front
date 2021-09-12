import { createReducer, on } from '@ngrx/store';
import { newProfessional, newProfessionalSuccess, newProfessionalError } from '../actions';
import { IProfessional } from '../../models/professional.interfase';

type stateNewProfessional = 'ok' | 'error' | 'waiting';

export interface ProfessionalState {
    professional: IProfessional,
    loaded: boolean,
    loading: boolean,
    state: stateNewProfessional,
    error: any
}

export const professionalInitialState: ProfessionalState = {
    professional: {avatar:'',first_name:'',city:'', last_name:''},
    loaded: false,
    loading: false,
    state: 'waiting',
    error: null
}

const _professionalReducer = createReducer(professionalInitialState,

    on(newProfessional, (state, { professional }) => ({ ...state, loading: true, professional: { ...professional }})),

    on(newProfessionalSuccess, state => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        state: 'ok'
    })),

    on( newProfessionalError, (state,{ payload } ) => ({ 
        ...state, 
        loading: false, 
        loaded: false, 
        state: 'error',
        professional: {avatar:'',first_name:'',city:'', last_name:''},
        error: { 
            url : payload.url, 
            name: payload.name, 
            message: payload.message 
        } 
    })),

);

export function professionalReducer(state: any, action: any) {
    return _professionalReducer(state, action);
}