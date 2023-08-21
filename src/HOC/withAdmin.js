import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'


export default WrappedComponent => {
    /* This component will be a child of withAuth. As such its useEffect will be called after the one of withAuth has executed.
       Therefore there will be 4 calls to useEffect. Nr 1-2 for when withAdmin & withAuth initialise but redux is empty and nr 3-4 for when they
       get called when the userLoginReducer is now populated, because in the firs useEffect call of withAuth we fetch user data. */
    let AdminComponent = (props) => {
        const [isAdmin, setIsAdmin] = useState(false)

        useEffect(() => {
            // console.log('useEffect AdminComponent', props)
            if(props.userReducer.isAdmin !== null && props.userReducer.isAdmin){
                /*isAdmin !== null because otherwise it means this is the first time
                useEffect was called and withAuth hasn't yet updated the redux state with the logged in user */
                setIsAdmin(true)
            } else if(props.userReducer.isAdmin !== null && props.userReducer.isAdmin === false){
                props.history.push('/dashboard')
            }
        }, [props.userReducer, props.history])

        return isAdmin ? <WrappedComponent {...props} /> : <></>
    }

    const mapStateToProps = (state) => ({userReducer: state.userLoginReducer})
    return connect(mapStateToProps)(AdminComponent)
}
