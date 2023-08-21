import Cookie from 'js-cookie'

import Axios from '../../axios'
import {SET_USER_ADMINS} from '../types'
import {setError} from './errorAction'
import {setUsers} from './jobAction'


export const inviteAdminAction = email => async (dispatch, getState) => {
    let token = Cookie.get('token')
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const body = {
        admin_email: email
    }
    try {
        const response = await Axios.post(`jobs/invite/`, body, config)
        if(response.status === 200){
            return true
        }
    } catch(e) {
        dispatch(setError(e.response.data))
    }
}


export const setAdmins = (admins) => {
    return {
        type: SET_USER_ADMINS,
        payload: admins
    }

}

export const getAdmins = () => async (dispatch, getState) => {
    const {accessToken} = getState().userLoginReducer
    const config = {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }

    try {
        const response = await Axios.get(`users/me/admins/`, config)
        if(response.status === 200){
            await dispatch(setAdmins(response.data))
            return true
        }
    } catch(e) {
        dispatch(setError(e.response.data))
    }
}


export const getAdministeredUsers = () => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }

    try {
        const response = await Axios.get(`users/`, config)
        if(response.status === 200){
            dispatch(setUsers(response.data))
            return response.data
        }
    } catch(e) {
        dispatch(setError(e.response.data))
    }
}


export const notifyAdminsFoundJob = () => async (dispatch, getState) => {
    let token = Cookie.get('token')
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const body = {}
    try {
        const response = await Axios.post(`jobs/notify-admins-accepted-job/`, body, config)
        if(response.status === 200){
            return true
        }
    } catch(e) {
        dispatch(setError(e.response.data))
    }
}

