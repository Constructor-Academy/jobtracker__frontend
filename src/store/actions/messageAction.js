import {ADD_MESSAGE, REMOVE_MESSAGE} from '../types'

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message,
})

export const removeMessage = (id) => ({
    type: REMOVE_MESSAGE,
    id,
})
