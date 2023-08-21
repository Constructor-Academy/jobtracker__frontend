import React from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components/macro'

import booklet from '../../../assets/icons/navigation/book-open.svg'
import statistics from '../../../assets/icons/navigation/chart.svg'
import dashboard from '../../../assets/icons/navigation/dashboard.svg'
import home from '../../../assets/icons/navigation/home.svg'
import jobs from '../../../assets/icons/navigation/jobs.svg'
import lock from '../../../assets/icons/navigation/logout.svg'
import settings from '../../../assets/icons/navigation/settings.svg'
import profile from '../../../assets/icons/navigation/user.svg'
import {userLogout} from '../../../store/actions/auth/userLoginAction'
import {NavigationContainer} from '../../../style/containers'
import {device as devices} from '../../../style/devices'
import Feedback from '../../Feedback'


export const MenuItem = styled(NavLink)`
    text-decoration: none;
    color: ${(props) => props.theme.whiteDark};
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 ${(props) => props.theme.spaceL};
    cursor: pointer;
    transition: ${(props) => props.theme.transitionDefault};

    &.active {
        font-weight: 500;
        color: white;
        background: rgba(0, 0, 0, 0.22);

        img {
            opacity: 0.9;
        }
    }

    :hover {
        background: rgba(0, 0, 0, 0.22);
    }
    :focus {
        background: rgba(0, 0, 0, 0.22);
    }
    img {
        margin-right: ${(props) => props.theme.spaceS};
        width: 22px;
        height: 22px;
        opacity: 0.7;
        margin-top: -1px;
    }

    @media ${devices.mobileL} {
        font-size: ${(props) => props.theme.textSizeS};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 8px 0;
        cursor: pointer;

        img {
            margin: 0;
            margin-bottom: ${(props) => props.theme.spaceXXS};
        }
    }
`


const NavigationMenu = () => {
    const {t} = useTranslation()
    const {isAdmin, user} = useSelector(state => state.userLoginReducer)
    const {displayedUser} = useSelector(state => state.jobsReducer)
    const dispatch = useDispatch()

    return (
        <NavigationContainer>
            {
                isAdmin && (
                    <MenuItem to="/adminboard">
                        <img alt="home" src={home} />
                        {t('components/sidebar:users')}
                    </MenuItem>
                )
            }
            {
                displayedUser.email && (
                    <MenuItem to="/dashboard">
                        <img alt="dashboard" src={dashboard} />
                        {t('components/sidebar:dashboard')}
                    </MenuItem>
                )
            }
            <MenuItem to="/userprofile">
                <img alt="user profile" src={profile} />
                {t('components/sidebar:profile')}
            </MenuItem>
            {
                !isAdmin && (
                    <MenuItem to="/jobs">
                        <img alt="jobs" src={jobs} />
                        Jobs
                    </MenuItem>
                )
            }
            {
                displayedUser.email && (
                    <MenuItem to="/reports">
                        <img alt="statistics" src={statistics} />
                        {t('components/sidebar:reports')}
                    </MenuItem>
                )
            }
            <MenuItem to="/settings">
                <img alt="settings" src={settings} />
                {t('components/sidebar:settings')}
            </MenuItem>
            {
                user.is_booklet_author && (
                    <MenuItem to="/booklet">
                        <img alt="booklet" src={booklet} />
                        {t('components/sidebar:booklet')}
                    </MenuItem>
                )
            }
            <MenuItem onClick={() => dispatch(userLogout())} to="/login">
                <img alt="logout" src={lock} />
                Logout
            </MenuItem>
            <Feedback />
        </NavigationContainer>
    )
}

export default NavigationMenu
