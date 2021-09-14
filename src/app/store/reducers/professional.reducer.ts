import { createReducer, on, Action } from '@ngrx/store';
import { newProfessional, newProfessionalSuccess, newProfessionalError, 
        detailProfessional, detailProfessionalSuccess, detailProfessionalError } from '../actions';
import { IProfessional } from '../../models/professional.interfase';
import { IError } from 'src/app/models/error.interface';
import { TStateAction } from '../../models/stateAction.type';

export interface ProfessionalState {
    idProf?: number,
    professional: IProfessional,
    loaded: boolean,
    loading: boolean,
    state: TStateAction,
    error: IError
}

export const professionalInitialState: ProfessionalState = {
    professional: { avatar:'', first_name:'', city:'', last_name:'', services: [] },
    loaded: false,
    loading: false,
    state: 'waiting',
    error: { url: '', name: '', message: '' }
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

    on( newProfessionalError, (state, { payload } ) => ({ 
        ...state, 
        loading: false, 
        loaded: false, 
        state: 'error',
        professional: { avatar:'', first_name:'', city:'', last_name:'', services:[] },
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

    on(detailProfessionalError, (state, { payload }) => ({ 
        ...state, 
        loading: false, 
        loaded: false, 
        state: 'error',
        error: { 
            url : payload.url, 
            name: payload.name, 
            message: payload.message 
        } 
    })),

);

export function professionalReducer(state: any, action: Action) {
    return _professionalReducer(state, action);
}