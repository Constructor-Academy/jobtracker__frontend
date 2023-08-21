import Cookie from 'js-cookie'

import Axios from '../../../axios'
import {handleNetworkError} from '../../../helpers'
import i18next from '../../../i18n'
import {LOGIN, LOGOUT, SET_SHOW_PROFILE_COMPLETENESS_POPUP} from '../../types'
import {getJobsAction, setDisplayedUsers} from '../jobAction'
import {addMessage} from '../messageAction'


export const catchError = async (message, dispatch) => {
    try {
        await dispatch(addMessage({detail: message, type: 'error'}))
    } catch(e) {
        await dispatch(addMessage({detail: 'The monkeys powering our servers have escaped. Try again.', Type: 'error'}))
    }
    return false
}

export const login = data => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const setShowProfileCompletenessPopUp = (bool) => {
    return {
        type: SET_SHOW_PROFILE_COMPLETENESS_POPUP,
        payload: bool
    }
}

export const userLoginAction = ({email, password}) => async (dispatch) => {
    try {
        const {data} = await Axios.post(`auth/token/`, {email, password})
        if(data){
            dispatch(login(data))
            if(!data.user.is_admin){
                dispatch(setDisplayedUsers(data.user))
                dispatch(getJobsAction())
            }
            Cookie.set('token', data.access, {secure: true})
            Cookie.set('refresh', data.refresh, {secure: true})

            // show profile complete popup on every 5th login
            const loginCounter = Number(Cookie.get('loginCounter', 0))
            if (loginCounter === undefined) {
                Cookie.set('loginCounter', 1, {secure: true})
            } else if (loginCounter <= 3) {
                Cookie.set('loginCounter', loginCounter + 1, {secure: true})
            } else if (loginCounter === 4) {
                Cookie.set('loginCounter', 0, {secure: true})
                dispatch(setShowProfileCompletenessPopUp(true))
            }  else if (!loginCounter >= 0 && !loginCounter <= 4) {
                Cookie.set('loginCounter', 0, {secure: true})
            }
            return data
        }
    } catch(e) {
        const i18n = i18next
        if (await handleNetworkError(e, dispatch)) return
        if (e.response) {
            const errorMessage = e.response.data.detail
            return catchError(i18n.t(`api_errors:${errorMessage}`), dispatch)
        }
    }
}


const logOut = () => ({
    type: LOGOUT
})

export const userLogout = () => dispatch => {
    Cookie.remove('token')
    Cookie.remove('refresh')
    Cookie.remove('displayedUserId')
    dispatch(logOut())
}

