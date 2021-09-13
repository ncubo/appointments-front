import { createReducer, on } from '@ngrx/store';
import { newProfessional, newProfessionalSuccess, newProfessionalError, 
        detailProfessional, detailProfessionalSuccess, detailProfessionalError } from '../actions';
import { IProfessional } from '../../models/professional.interfase';
import { searchProfessionalsReducer } from './searchProfessionals.reducer';

type stateNewProfessional = 'ok' | 'error' | 'waiting';

export interface ProfessionalState {
    idProf?: number,
    professional: IProfessional,
    loaded: boolean,
    loading: boolean,
    state: stateNewProfessional,
    error: any
}

export const professionalInitialState: ProfessionalState = {
    professional: {avatar:'',first_name:'',city:'', last_name:'', services: []},
    loaded: false,
    loading: false,
    state: 'waiting',
    error: null
}

const _professionalReducer = createReducer(professionalInitialState,

    on(newProfessional, (state, { professional }) => (
        { ...state, 
            loading: true, 
            professional: { ...professional }
        })),

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
        professional: {avatar:'',first_name:'',city:'', last_name:'', services:[]},
        error: { 
            url : payload.url, 
            name: payload.name, 
            message: payload.message 
        } 
    })),

    on(detailProfessional, (state, { id }) => ({ 
        ...state, 
        loading: true, 
        loaded: false, 
        idProf: id,
        state: 'waiting'
    })),

    on(detailProfessionalSuccess, (state, { professional }) => ({ 
        ...state, 
        loading: false, 
        loaded: true,
        professional: { ...professional }, 
        state: 'ok'
    })),

    on(detailProfessionalError, (state) => ({ 
        ...state, 
        loading: false, 
        loaded: false, 
        state: 'error'
    })),

);

export function professionalReducer(state: any, action: any) {
    return _professionalReducer(state, action);
}