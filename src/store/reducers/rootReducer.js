import { combineReducers } from 'redux'

import rootCP from '../ducks/cpLoad'
import rootUser from '../ducks/userLoad'
import authLogin from './isAuth'

export default combineReducers({
    authLogin,
    cp: rootCP,
    users: rootUser,
    auth: authLogin
});