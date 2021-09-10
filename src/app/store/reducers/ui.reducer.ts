import { createReducer, on } from '@ngrx/store';
import { isLoading, stopLoading } from '../actions';

export interface UiState {
    loading: boolean; 
}

export const initialState: UiState = {
    loading: false,
}

const _uiReducer = createReducer(initialState,

    on(isLoading, state => ({ ...state, loading: true})),
    on(stopLoading, state => ({ ...state, loading: false})),

);

export function uiReducer(state:any, action:any) {
    return _uiReducer(state, action);
}