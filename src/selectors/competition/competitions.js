import { createSelector } from 'reselect';
import { get } from 'lodash';

export const competitionsSelector = state => state.competitions;

export const competitionsCountSelector = createSelector(
  competitionsSelector,
  competitions => get(competitions, 'length', '')
);
