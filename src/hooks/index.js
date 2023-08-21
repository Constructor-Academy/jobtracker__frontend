import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

import i18next from '../i18n'
import {setBrowser} from '../store/actions/browserActions'
import {resetErrors} from '../store/actions/errorAction'
import {getAdministeredUsers, getAdmins} from '../store/actions/socialAction'



export const useAdministeredUsers = (forceFetch = false) => {
    const dispatch = useDispatch()
    const reduxAdministeredUsers = useSelector(state => state.jobsReducer.administeredUsers)

    useEffect(() => {
        const administeredUsers = async () => {
            await dispatch(getAdministeredUsers())
        }
        administeredUsers()
    }, [dispatch, forceFetch])
    return reduxAdministeredUsers
}


export const useAdmins = (forceFetch = false) => {
    const dispatch = useDispatch()
    let reduxAdmins = useSelector(state => state.userLoginReducer.userAdmins)

    useEffect(() => {
        if(reduxAdmins.length > 0 && forceFetch === false){
            return
        }
        const admins = async () => {
            await dispatch(getAdmins())// this action needs to dispatch data to the redux store so that useSelector triggers a re render.
        }
        admins()
    }, [dispatch, forceFetch, reduxAdmins])
    return reduxAdmins
}


export const useResetErrors = () => {
    // Removes errors when component unmounts
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
            dispatch(resetErrors())
        }
    }, [dispatch])
}

export const useSetBrowser = () => {
    // set the user browser once the app loads
    const dispatch = useDispatch()
    useEffect(() => {
        if(navigator.userAgent.indexOf('Chrome') !== -1){
            dispatch(setBrowser('Google Chrome'))
        } else if(navigator.userAgent.indexOf('Firefox') !== -1){
            dispatch(setBrowser('Mozilla Firefox'))
        } else if(navigator.userAgent.indexOf('MSIE') !== -1){
            dispatch(setBrowser('Internet Explorer'))
        } else if(navigator.userAgent.indexOf('Edge') !== -1){
            dispatch(setBrowser('Internet Explorer Edge'))
        } else if(navigator.userAgent.indexOf('Safari') !== -1){
            dispatch(setBrowser('Safari'))
        } else if(navigator.userAgent.indexOf('Opera') !== -1){
            dispatch(setBrowser('Opera'))
        } else {
            dispatch(setBrowser('Unknown Browser'))
        }
    }, [dispatch])
}

export const useDetectDeviceType = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const useRandomNumber = () => {
    return
}


export const useUrlQueryParams = (param) => {
    /*
    Extracts code/email from query string for Registration Validation and Password Reset emails.
    Can be used for other parameters in query string.
    */
    const parsedSearchUrl = new URLSearchParams(useLocation().search)
    return parsedSearchUrl.get(param)
}


export const useI18nNativeInputErrorTooltips = () => {
    const i18n = i18next

    useEffect(() => {
        const inputs = document.querySelectorAll('input, textarea')

        inputs.forEach(input => {
            if (input.required) {
                input.addEventListener('input', () => {
                    if (input.value.trim() === '') {
                        input.setCustomValidity(i18n.t('errors:general.required'))
                    } else {
                        input.setCustomValidity('')
                        input.checkValidity()
                    }
                })

                input.addEventListener('invalid', () => {
                    if (input.value.trim() === '') input.setCustomValidity(i18n.t('errors:general.required'))
                })
            }

            if (input.type === 'url') {
                input.addEventListener('input', () => {
                    if (input.validity.typeMismatch) {
                        input.setCustomValidity(i18n.t('errors:url.invalid'))
                    } else {
                        input.setCustomValidity('')
                        input.checkValidity()
                    }
                })
                input.addEventListener('invalid', () => {
                    if (input.validity.typeMismatch) input.setCustomValidity(i18n.t('errors:url.invalid'))
                })
            }

            if (input.type === 'email') {
                input.addEventListener('input', () => {
                    if (input.validity.typeMismatch) {
                        input.setCustomValidity(i18n.t('errors:email.invalid'))
                    } else {
                        input.setCustomValidity('')
                        input.checkValidity()
                    }
                })
                input.addEventListener('invalid', () => {
                    if (input.validity.typeMismatch) input.setCustomValidity(i18n.t('errors:email.invalid'))
                })
            }
        })
    }, [i18n])
}
