import {RESET_ERRORS, SET_ERROR} from '../types'


export const resetErrors = () => ({
    type: RESET_ERRORS
})


export const setError = data => ({
    type: SET_ERROR,
    payload: data
})
