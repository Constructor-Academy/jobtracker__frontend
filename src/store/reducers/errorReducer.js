import {RESET_ERRORS, SET_ERROR} from '../types'


const initialState = {
    error: null
}

export const errorReducer = (state = initialState, action) => {
    switch(action.type){
    case SET_ERROR:{
        return {...state, error: action.payload}
    }
    case RESET_ERRORS:{
        return initialState
    }
    default:
        return state
    }
}
