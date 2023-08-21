import {SET_PDF_URL} from '../types'


const initialState = {
    pdfSource: null
}

export const pdfGeneratorReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PDF_URL:{
            return {...state, pdfSource: action.payload}
        }
        default:
            return state
    }
}
