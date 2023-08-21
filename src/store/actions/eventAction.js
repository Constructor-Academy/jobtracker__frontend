import Axios from '../../axios'
import {decodeMessage} from '../../helpers'
import {SET_EVENTS, SET_UPDATED_EVENT, DELETE_EVENT} from '../types'
import {setError} from './errorAction'


export const setEvents = (event) => {
    return {
        type: SET_EVENTS,
        payload: event,
    }
}

export const setUpdatedEvent = (event) => {
    return {
        type: SET_UPDATED_EVENT,
        payload: event,
    }
}

export const deleteEvent = (categoryId, eventId) => {
    return {
        type: DELETE_EVENT,
        payload: {
            categoryId,
            eventId
        }
    }
}

export const createEventAction = (data) => async (dispatch, getState) => {
    const {accessToken} = getState().userLoginReducer

    const config = {
        headers: {Authorization: `Bearer ${accessToken}`},
    }

    try {
        const response = await Axios.post('/cv/event/', data, config)
        if (response.status >= 200 && response.status <= 299) {
            dispatch(setEvents(response.data))
            return true
        }
    } catch (e) {
        dispatch(setError(decodeMessage(e.response.data)))
        return false
    }
}


export const updateEventAction = (eventId, data) => async (dispatch, getState) => {
    const {accessToken} = getState().userLoginReducer

    const config = {
        headers: {Authorization: `Bearer ${accessToken}`},
    }

    try {
        const response = await Axios.patch(`/cv/event/${eventId}/`, data, config)
        if (response.status >= 200 && response.status <= 299) {
            dispatch(setUpdatedEvent(response.data))
            return true
        }
    } catch (e) {
        dispatch(setError(decodeMessage(e.response.data)))
        return false
    }
}

export const deleteEventAction = (categoryId, eventId) => async (dispatch, getState) => {
    const {accessToken} = getState().userLoginReducer

    const config = {
        headers: {Authorization: `Bearer ${accessToken}`},
    }

    try {
        const response = await Axios.delete(`/cv/event/${eventId}/`, config)
        if (response.status >= 200 && response.status <= 299) {
            dispatch(deleteEvent(categoryId, eventId))
            return true
        }
    } catch (e) {
        console.error('ERROR', e)
        dispatch(setError(decodeMessage(e.response.data)))
        return false
    }
}
