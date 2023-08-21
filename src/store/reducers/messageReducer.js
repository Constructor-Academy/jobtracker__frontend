import {ADD_MESSAGE, REMOVE_MESSAGE} from '../types'


const initialState = []

export const messageReducer = (state = initialState, action) => {
    switch(action.type){
    case ADD_MESSAGE:{
        let newState = [...state]
        newState.push({detail: action.payload.detail, type: action.payload.type, id: Math.floor(Math.random() * 100000)})
        return newState
    }
    case REMOVE_MESSAGE:{
        let newState = [...state]
        let messageToDelete = newState.filter(message => message.id === action.id)
        let indexOfMessage = newState.indexOf(...messageToDelete)
        newState.splice(indexOfMessage, 1)
        return newState
    }
    default:
        return state
    }
}
