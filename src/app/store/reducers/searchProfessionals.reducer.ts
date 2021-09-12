import { createReducer, on } from '@ngrx/store';
import { loadSearchProfessionals, loadSearchProfessionalsSuccess, loadSearchProfessionalsError } from '../actions';
import { IProfessional } from '../../models/professional.interfase';

export interface SearchProfessionalsState {
    professionals: IProfessional[],
    text: string,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const searchProfessionalsInitialState: SearchProfessionalsState = {
    professionals: [],
    text: '',
    loaded: false,
    loading: false,
    error: null
}

const _searchProfessionalsReducer = createReducer(searchProfessionalsInitialState,

    on(loadSearchProfessionals, (state, { text }) => ({ ...state, loading: true, text:text})),

    on(loadSearchProfessionalsSuccess, (state,{ professionals } ) => ({ 
        ...state, 
        loading: false, 
        loaded: true, 
        professionals: [ ...professionals ]
    })),

    on(loadSearchProfessionalsError, (state,{ payload } ) => ({ 
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

export function searchProfessionalsReducer(state: any, action: any) {
    return _searchProfessionalsReducer(state, action);
}