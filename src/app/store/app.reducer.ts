import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
//    ui: reducers.UiState,
   professionals: reducers.ProfessionalState
}

export const appReducers: ActionReducerMap<AppState> = {
    // ui: reducers.uiReducer,
    professionals: reducers.professionalsReducer
}