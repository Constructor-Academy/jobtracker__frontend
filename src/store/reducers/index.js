import {combineReducers} from 'redux'

import {browserReducer} from './browserReducer'
import {errorReducer} from './errorReducer'
import {feedbackReducer} from './feedbackReducer'
import {jobsReducer} from './jobsReducer'
import {messageReducer} from './messageReducer'
import {pdfGeneratorReducer} from './pdfGeneratorReducer'
import {userLoginReducer} from './userLoginReducer'


export const reducers = combineReducers({
    userLoginReducer,
    errorReducer,
    jobsReducer,
    browserReducer,
    feedbackReducer,
    messageReducer,
    pdfGeneratorReducer,
})
