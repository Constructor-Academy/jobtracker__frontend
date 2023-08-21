import React from 'react'

import jobTracker_logo from '../../../assets/jobTracker_logo.svg'
import {LogoContainer} from '../../../style/containers'
import {LogoTitle} from '../../../style/titles'

const Logo = () => {
    return (
        <LogoContainer to="/dashboard">
            <img alt="jobtracker-logo" src={jobTracker_logo} />
            <LogoTitle>JobTracker</LogoTitle>
            <br />
            <span>Alpha</span>
        </LogoContainer>
    )
}

export default Logo
