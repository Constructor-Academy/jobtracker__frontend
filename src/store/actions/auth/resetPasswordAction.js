import Axios from '../../../axios'
import {handleNetworkError} from '../../../helpers'
import i18next from '../../../i18n'
import {catchError} from './userLoginAction'


export const resetPassword = email => async (dispatch) => {
    const data = {
        email
    }
    const headers = new Headers({
        'Content-type': 'application/json'
    })
    const config = {
        headers
    }
    try {
        const result = await Axios.post(`auth/password-reset/`, data, config)
        if(result.status === 200){
            return true
        }
    } catch(e) {
        const i18n = i18next
        if (await handleNetworkError(e, dispatch)) return
        const errorMessage = e.response.data.email[0]
        return catchError(i18n.t(`api_errors:${errorMessage}`), dispatch)
    }
}


export const restPasswordValidate = ({email, code, password, password_repeat}) => async (dispatch, getState) => {
    const data = {
        email,
        code,
        password,
        password_repeat
    }
    const headers = new Headers({
        'Content-type': 'application/json'
    })
    const config = {
        headers
    }
    try {
        const result = await Axios.patch(`auth/password-reset/validation/`, data, config)

        if (result.status === 200) {
            return true
        }

    } catch(e) {
        const i18n = i18next
        if (await handleNetworkError(e, dispatch)) return
        Object.keys(e.response.data).forEach(key => {
            catchError(i18n.t(`api_errors:${e.response.data[key][0]}`), dispatch)
        })
    }
}
