import Axios from '../../axios'
import {ADDED_SUCCESS, RESET_FEEDBACK_SUCCESS} from '../types'


const addFeedbackSuccess = data => {
    return {
        type: ADDED_SUCCESS,
        payload: data
    }
}

export const resetFeedbackSuccess = () => ({
    type: RESET_FEEDBACK_SUCCESS
})


export const addFeedbackAction = feedback => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    const response = await Axios.post('feedback/new/', feedback, config)
    if(response.status === 201){
        dispatch(addFeedbackSuccess(true))
    }
}

