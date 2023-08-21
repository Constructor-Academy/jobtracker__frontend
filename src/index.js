import * as Sentry from '@sentry/browser'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'

import App from './App'
import * as serviceWorker from './serviceWorker'
import {store} from './store'
import {GlobalStyle, defaultTheme} from './style'
import './i18n'

if(process.env.NODE_ENV !== 'development'){
    Sentry.init({
        dsn: 'https://acd21a074f514aba86ad18d1661b7af9@sentry.io/1895438',
        tracesSampleRate: 0.2,
    })
}


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
