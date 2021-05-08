import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const addUser = createAction('ADD_USUARIOS')
export const loadUser = createAction('LOAD_USUARIOS')

export default createReducer(INITIAL_STATE, {
    [addUser.type]: (state, action) => [ ...state, action.payload ],
    [loadUser.type]: (state, action) => action.payload ,
})