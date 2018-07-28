import { createSelector } from 'reselect';
import { map, toString } from 'lodash';
import kindsSelector from 'Selectors/dictionary/kinds-selector';

const kindsForSelector = createSelector(
  kindsSelector,
  kinds => {
    return map(kinds, kind => ({
      value: toString(kind.id),
      icon: kind.icon,
      text: kind.description
    }))
  }
);

export default kindsForSelector;
