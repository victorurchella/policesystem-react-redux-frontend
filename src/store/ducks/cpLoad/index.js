import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const addCP = createAction('ADD_CODIGOPENAL')
export const loadCP = createAction('LOAD_CODIGOPENAL')
export const cpWithoutId = createAction('LOAD_CODIGOPENALSEMID')

export default createReducer(INITIAL_STATE, {
    [addCP.type]: (state, action) => [ ...state, action.payload ],
    [loadCP.type]: (state, action) => action.payload ,
    [cpWithoutId.type]: (state, action) => action.payload
})