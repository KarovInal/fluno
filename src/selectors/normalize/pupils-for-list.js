import { createSelector } from 'reselect';
import { map, get, toString } from 'lodash';
import pupilsSelector from 'Selectors/pupils/pupils-selector';

const pupilsForList = createSelector(
  pupilsSelector,
  pupils => map(pupils, pupil => ({
    id: get(pupil, 'id', null),
    avatar: get(pupil, 'avatar', ''),
    firstName: get(pupil, 'firstName', ''),
    lastName: get(pupil, 'lastName', ''),
    middleName: get(pupil, 'middleName', ''),
    rank: get(pupil, 'rank.shortDescription', ''),
    yearOfBirth: toString(get(pupil, 'yearOfBirth', '')),
  }))
);

export default pupilsForList;
