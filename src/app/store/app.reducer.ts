import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
//    ui: reducers.UiState,
   professional: reducers.ProfessionalState,
   professionals: reducers.ProfessionalsState
   searchProfessionals: reducers.SearchProfessionalsState
}

export const appReducers: ActionReducerMap<AppState> = {
    // ui: reducers.uiReducer,
    professional: reducers.professionalReducer,
    professionals: reducers.professionalsReducer,
    searchProfessionals: reducers.searchProfessionalsReducer
}