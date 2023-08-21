import Axios from '../../../axios'
import {handleNetworkError} from '../../../helpers'
import i18next from '../../../i18n'
import {catchError} from './userLoginAction'


export const userRegistrationAction = email => async (dispatch) => {
    const body = {email}
    try {
        const response = await Axios.post(`auth/registration/`, body)
        if(response.status === 200){
            return true
        }
    } catch(e) {
        const errorMessage = e.response.data.email[0]
        return catchError(errorMessage, dispatch)
    }
}


export const registrationValidationAction = body => async (dispatch) => {
    try {
        const response = await Axios.patch(`auth/registration/validation/`, body)
        if(response.status === 200){
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
