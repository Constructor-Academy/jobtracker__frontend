import React from 'react'
import styled from 'styled-components/macro'

import CookieBanner from '../../components/CookieBanner'
import {CircleBackground1, CircleBackground2, CircleBackground3} from '../../style/background'
import {device} from '../../style/devices'
import LandingBody from './LandingBody'
import LandingFooter from './LandingFooter'
import LandingNavigation from './LandingNavigation'



const LandingPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: none;

    @media ${device.mobileL} {
      overflow-x: scroll;
    }
`

const LandingPage = () => {
    return (
        <LandingPageContainer>
            <LandingNavigation />
            <CircleBackground1 />
            <CircleBackground2 />
            <CircleBackground3 />
            <LandingBody />
            <LandingFooter />
            <CookieBanner />
        </LandingPageContainer>
    )
}

export default LandingPage
