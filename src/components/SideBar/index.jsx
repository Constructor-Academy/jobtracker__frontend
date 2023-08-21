import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {withRouter, useLocation} from 'react-router-dom'

import jobTracker_logo from '../../assets/jobTracker_logo.svg'
import {
    SideBarContainer,
    SideBarNoAuthContainer,
} from '../../style/containers'
import {LogoTitle} from '../../style/titles'
import LangSwitch from '../LangSwitch'
import ConstructorLogoFooter from '../SITLogoFooter'
import Logo from './Logo'
import NavigationMenu from './NavigationMenu'


const SideBar = ({children, authenticated, history}) => {
    let location = useLocation()
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <>
            {
                authenticated ? (
                    <SideBarContainer
                        islanding={
                            currentPath === '/' ||
                            currentPath === '/legalnotice' ||
                            currentPath === '/terms' ||
                            currentPath === '/privacy' ||
                            currentPath === '/contact'
                        }
                    >
                        <Logo />
                        <LangSwitch />
                        <NavigationMenu />
                        <ConstructorLogoFooter />
                    </SideBarContainer>
                ) : (
                    <SideBarNoAuthContainer
                        isLanding={
                            currentPath === '/' ||
                            currentPath === '/legalnotice' ||
                            currentPath === '/terms' ||
                            currentPath === '/privacy' ||
                            currentPath === '/contact'
                        }
                    >
                        <img
                            alt="job-tracker-logo"
                            onClick={() => history.push('/')}
                            src={jobTracker_logo}
                        />
                        <LogoTitle noAuth onClick={() => history.push('/')}>JobTracker</LogoTitle>
                        <LangSwitch />
                    </SideBarNoAuthContainer>
                )
            }
            {children}
        </>
    )
}

const mapStateToProps = ({userLoginReducer: {authenticated}}) => ({
    authenticated,
})

export default withRouter(connect(mapStateToProps)(SideBar))
