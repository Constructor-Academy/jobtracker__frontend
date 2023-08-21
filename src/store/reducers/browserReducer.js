import {SET_BROWSER} from '../types'


const initialState = {
    browser: ''
}

export const browserReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_BROWSER:{
            return {...state, browser: action.payload}
        }
        default:
            return state
    }
}
