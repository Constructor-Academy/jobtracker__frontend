import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import AppLoading from './components/AppLoading'
import ProfileCompletePopUp from './components/ProfileCompletePopUp'
import Routes from './routes'
import {AppContainer} from './style/containers'

const App = () => {
    const {ready} = useTranslation()
    const {authenticated, user, showProfileCompletenessPopUp} = useSelector(state => state.userLoginReducer)

    if (!ready) return <AppLoading>loading</AppLoading>

    return (
        <AppContainer>
            <Routes />
            {authenticated && user.profile_completeness.total !== 100 && showProfileCompletenessPopUp && <ProfileCompletePopUp />}
        </AppContainer>
    )
}

export default App
