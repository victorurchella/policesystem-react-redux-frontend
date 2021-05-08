import api from '../../services/api.service'

import { loadCP, cpWithoutId } from '../ducks/cpLoad'
import { loadUser } from '../ducks/userLoad'

export const allCP = () => {
    return dispatch => {
        api.get('/codigopenal')
        .then( res => dispatch( loadCP(res.data) ) )
        .catch( console.log )
    }
}

export const allCpWithoutId = () => {
    return dispatch => {
        api.get('/codigopenal?_embed=id')
        .then( res => dispatch( cpWithoutId(res.data) ) )
        .catch( console.log )
    }
}

export const allUsers = () => {
    return dispatch => {
        api.get('/usuarios')
        .then( res => dispatch( loadUser(res.data) ) )
        .catch( console.log )
    }
}