import { get } from 'lodash';

const trainerData = state => get(state, 'trainer', null);

export default trainerData;
