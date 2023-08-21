import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {reducers} from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'


const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export const store = createStore(reducers, enhancer)
