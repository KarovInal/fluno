import { isEmpty } from 'lodash';

const isAuth = state => !isEmpty(state.trainer);

export default isAuth;
