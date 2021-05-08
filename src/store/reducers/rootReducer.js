import { combineReducers } from 'redux'

import rootCP from '../ducks/cpLoad'
import rootUser from '../ducks/userLoad'

export default combineReducers({
    cp: rootCP,
    users: rootUser,
});