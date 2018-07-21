import { get } from 'lodash';

const ranksSelector = state => get(state, 'dictionary.ranks');

export default ranksSelector;
