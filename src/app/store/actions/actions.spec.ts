import * as fromReducer from '../reducers';
import * as actions from '../actions';
// import { ProfessionalState } from '../reducers';
// import { ProfessionalState } from './professional.reducer';


describe('newProfessional action', () => {
    it('should update the state in an immutable way', () => {
      const { professionalInitialState } = fromReducer;
      const newState: fromReducer.ProfessionalState = {
          professional: { id: 1, avatar:'', first_name:'Test', city:'Test', last_name:'Test', services: [] },
          loaded: false,
          loading: true,
          state: 'waiting',
          error: { url: '', name: '', message: '' }
        };

      const action = actions.newProfessional( { professional: newState.professional });
      const state = fromReducer.professionalReducer(professionalInitialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });