import {ADD_FEEDBACK, ADDED_SUCCESS, RESET_FEEDBACK_SUCCESS} from '../types'


const initialState = {
    feedback: [],
    success: null
}

export const feedbackReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FEEDBACK:{
            return {...state, feedback: action.payload}
        }
        case ADDED_SUCCESS:{
            return {...state, success: action.payload}
        }
        case RESET_FEEDBACK_SUCCESS:{
            return {...state, success: null}
        }
        default:
            return state
    }
}
