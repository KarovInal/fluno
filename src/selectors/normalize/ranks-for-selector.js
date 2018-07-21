import { createSelector } from 'reselect';
import { map, toString } from 'lodash';
import ranksSelector from 'Selectors/dictionary/ranks-selector';

const ranksForSelector = createSelector(
  ranksSelector,
  ranks => {
    return map(ranks, rank => ({
      value: toString(rank.id),
      text: rank.shortDescription
    }))
  }
);

export default ranksForSelector;
