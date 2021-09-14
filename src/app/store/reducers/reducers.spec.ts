import * as fromReducer from './index';
import * as actions from '../actions';
import { ProfessionalState } from './professional.reducer';

describe('Professional Reducer', () => {

  describe('unknown action', () => {
    it('should return the default state for professional reducer', () => {
      const { professionalInitialState } = fromReducer;
      const action = {
        type: 'Unknown'
      };
      const state = fromReducer.professionalReducer(professionalInitialState, action);

      expect(state).toBe(professionalInitialState);
    });
  });

  describe('newProfessional action', () => {
    it('should update the state in an immutable way', () => {
      const { professionalInitialState } = fromReducer;
      const newState: ProfessionalState = {
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

});