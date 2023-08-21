import Axios from '../../axios'
import {UPDATE_USER} from '../types'
import {catchError, login} from './auth/userLoginAction'

export const updateUser = (data) => {
    return {
        type: UPDATE_USER,
        payload: data,
    }
}

export const getUserProfile = (token) => async (dispatch, getState) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await Axios.get('users/me/', config)
    const user = {
        access: token,
        user: response.data,
    }

    dispatch(login(user))
    return response
}

export const deleteUserProfile = () => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            Authorization: `Bearer ${userLoginReducer.accessToken}`,
        },
    }
    return await Axios.delete('users/me/', config)
}

export const userUpdateAction = (body, directFeedback = false) => async (
    dispatch,
    getState
) => {
    let {userLoginReducer} = getState()
    let form_data = new FormData()
    for (let [key, value] of Object.entries(body)) {
        if (key === 'skills') {
            let newSkills = JSON.stringify(body.skills)
            form_data.append('skills', newSkills)
        } else if (key === 'languages') {
            let newLangs = JSON.stringify(body.languages)
            form_data.append('languages', newLangs)
        } else if (key === 'avatar') {
            if (body.avatar && body.avatar !== '') {
                form_data.append('avatar', body.avatar)
            }
        } else if (key === 'permit') {
            if (body['nationality'] === 'Switzerland') {
                form_data.append(key, '')
            } else {
                form_data.append(key, body[key])
            }
        } else {
            form_data.append(key, value)
        }
    }

    const config = {
        headers: {
            Authorization: `Bearer ${userLoginReducer.accessToken}`,
            'Content-Type': 'multipart/form-data',
        },
    }

    return Axios.patch(`users/me/`, form_data, config)
        .then((response) => {
            dispatch(updateUser(response.data))
            return true
        })
        .catch((error) => {
            if (directFeedback) return error.response.data
            else return catchError(error, dispatch)
        })
}
