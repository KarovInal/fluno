import { get } from 'lodash';

const kindsSelector = state => get(state, 'dictionary.kinds');

export default kindsSelector;
