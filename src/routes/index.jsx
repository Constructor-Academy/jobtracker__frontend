import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import SideBar from '../components/SideBar'
import WithAdmin from '../HOC/withAdmin'
import WithAuth from '../HOC/withAuth'
import {useSetBrowser} from '../hooks'
import AdminBoard from '../pages/AdminBoard'
import Booklet from '../pages/Booklet'
import Dashboard from '../pages/Dashboard'
import JobSuggestions from '../pages/JobSuggestions'
import LandingPage from '../pages/LandingPage'
import Contact from '../pages/LandingPage/Contact'
import LegalNotice from '../pages/LandingPage/LegalNotice'
import Privacy from '../pages/LandingPage/Privacy'
import TermsAndConditions from '../pages/LandingPage/TermsAndConditions'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'
import PasswordReset from '../pages/PasswordReset'
import PasswordResetValidation from '../pages/PasswordResetValidation'
import ProfilePage from '../pages/Profile'
import Registration from '../pages/Registration'
import RegistrationValidation from '../pages/RegistrationValidation'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'
import SuccessPage from '../pages/SuccessPage'
import {
    ADMINBOARD,
    DASHBOARD,
    LANDING_PAGE,
    REPORTS,
    SETTINGS,
    BOOKLET,
    LOGIN,
    USER_PROFILE,
    LEGAL_NOTICE,
    PRIVACY,
    TERMS,
    CONTACT,
    REGISTRATION,
    REGISTRATION_VALIDATION,
    PASSWORD_RESET,
    PASSWORD_RESET_VALIDATION,
    SUCCESS_PAGE,
    JOBS,
} from './paths'


const Routes = () => {
    useSetBrowser()
    return (
        <Router>
            <SideBar>
                <Switch>
                    <Route component={LandingPage} exact path={LANDING_PAGE} />
                    <Route component={Login} exact path={LOGIN} />
                    <Route component={Registration} exact path={REGISTRATION} />
                    <Route component={RegistrationValidation} exact path={REGISTRATION_VALIDATION} />
                    <Route component={PasswordReset} exact path={PASSWORD_RESET} />
                    <Route component={PasswordResetValidation} exact path={PASSWORD_RESET_VALIDATION} />
                    <Route component={SuccessPage} exact path={SUCCESS_PAGE} />
                    <Route component={WithAuth(ProfilePage)} exact path={USER_PROFILE} />
                    <Route component={WithAuth(ProfilePage)} exact path="/userprofile/:id" />
                    <Route component={WithAuth(Dashboard)} exact path={DASHBOARD} />
                    <Route component={WithAuth(WithAdmin(AdminBoard))} exact path={ADMINBOARD} />
                    <Route component={WithAuth(Reports)} exact path={REPORTS} />
                    <Route component={WithAuth(Settings)} exact path={SETTINGS} />
                    <Route component={WithAuth(Booklet)} exact path={BOOKLET} />
                    <Route component={WithAuth(JobSuggestions)} exact path={JOBS} />
                    <Route component={LegalNotice} exact path={LEGAL_NOTICE} />
                    <Route component={Privacy} exact path={PRIVACY} />
                    <Route component={TermsAndConditions} exact path={TERMS} />
                    <Route component={Contact} exact path={CONTACT} />
                    <Route component={Page404} />
                </Switch>
            </SideBar>
        </Router>
    )
}

export default Routes
