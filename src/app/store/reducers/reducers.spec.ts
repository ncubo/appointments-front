import * as fromReducer from './index';

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

});