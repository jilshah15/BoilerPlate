import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the boilerplateExample state domain
 */

const selectBoilerplateExampleDomain = state =>
  state.boilerplateExample || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BoilerplateExample
 */

const makeSelectBoilerplateExample = () =>
  createSelector(
    selectBoilerplateExampleDomain,
    substate => substate,
  );

export default makeSelectBoilerplateExample;
export { selectBoilerplateExampleDomain };
