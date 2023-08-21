import Cookie from 'js-cookie'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'

import {userLogout} from '../store/actions/auth/userLoginAction'
import {getDisplayedUser, getJobsAction, setDisplayedUsers} from '../store/actions/jobAction'
import {getUserProfile} from '../store/actions/userAction'
import Axios from './../axios'


const useHandleHardReload = () => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        const logout = () => {
            dispatch(userLogout())
            history.push('/login')
        }
        const fn = async () => {
            let accessToken = Cookie.get('token')
            if(authenticated){
                // If token in redux assume it's valid and do nothing
                return
            } else if(accessToken){
                // If token not in redux check if token in Cookies is valid
                let body = {token: accessToken}
                try {
                    // Things to do on hard reload
                    await Axios.post('auth/token/verify/', body)//crashes if token not valid
                    let response = await dispatch(getUserProfile(accessToken))
                    // if(location.pathname === '/dashboard' || location.pathname === '/reports'){
                    if(response.data.is_admin){
                        let displayedUserId = Cookie.get('displayedUserId')
                        if(displayedUserId){
                            dispatch(getDisplayedUser(displayedUserId))
                            dispatch(getJobsAction(displayedUserId))
                        }
                    } else {
                        dispatch(setDisplayedUsers(response.data))
                        dispatch(getJobsAction())
                    }
                    // }
                } catch(e) {
                    // Throws error if request fails for any reason (server offline, 401 etc...)
                    logout()
                }
            } else {
                logout()
            }
        }
        fn()
    }, [authenticated, dispatch, history, location])
    return authenticated
}

export default WrappedComponent => {
    const AuthComponent = (props) => {
        const authenticated = useHandleHardReload()
        return authenticated ? <WrappedComponent {...props} /> : <></>
    }
    return AuthComponent
}
