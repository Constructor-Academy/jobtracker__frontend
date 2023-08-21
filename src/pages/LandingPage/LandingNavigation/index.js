import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useHistory} from 'react-router-dom'
import styled, {css} from 'styled-components/macro'

import menu_icon_blue from '../../../assets/burger_menu_icon_blue.png'
import menu_icon from '../../../assets/burger_menu_icon_white.png'
import jobTracker_logo from '../../../assets/jobTracker_logo.svg'
import LangSwitch from '../../../components/LangSwitch'
import {LOGIN, REGISTRATION} from '../../../routes/paths'
import {BaseButton, BaseButtonInvertedWhite} from '../../../style/buttons'
import {device} from '../../../style/devices'


const LandingNavigationContainer = styled.div`
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    position: fixed;
    top: 0;
    z-index: 1;

    div {
        display: flex;
        justify-content: space-between;
        //width: 166px;
        //min-width: 165px;
        align-items: center;
        cursor: pointer;

        img {
            height: 40px;
            width: 40px;
        }
        h1 {
            color: #f7f7f7;
            font-size: 30px;
            font-family: "Khand", sans-serif;
            font-weight: normal;
        }
    }
    section {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 55%;
        min-width: 633px;
        align-items: center;
        color: #f7f7f7;

        p {
            cursor: pointer;
            :hover {
                border-bottom: #eeeeee solid 1.5px;
            }
        }
        a {
            display: none;
            cursor: pointer;
            color: #f7f7f7;
            text-decoration: none;
            :hover {
                border-bottom: #eeeeee solid 1.5px;
            }
        }

        img {
            display: none;
        }
        article {
            background: ${(props) => props.theme.accentColor};
            height: 36px;
            width: 120px;
            border: none;
            margin: 0 0 0 10px;
            color: white;
            padding: 0;
            display: flex;
            font-size: 14px;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            cursor: pointer;
            :hover {
                font-size: 15px;
                background: red;
                border: none;
            }
        }
    }

    @media ${device.mobileL} {
        justify-content: space-between;
        padding: 15px;
        height: 70px;

        div {
            height: 50px;
            //min-width: 162px;
        }
        section {
            width: ${(props) => (props.isOpen ? '300px' : '100px')};
            height: ${(props) => (props.isOpen ? '40vh' : '')};
            border-radius: ${(props) => (props.isOpen ? '5px' : '')};
            position: ${(props) => (props.isOpen ? 'absolute' : '')};
            top: ${(props) => (props.isOpen ? '30px' : '')};
            right: ${(props) => (props.isOpen ? '0' : '')};
            background: ${(props) =>
        props.isOpen ? 'rgba(255,255,255,0.96)' : ''};
            display: ${(props) => (props.isOpen ? 'flex' : '')};
            flex-direction: ${(props) =>
        props.isOpen ? 'column-reverse' : ''};
            justify-content: ${(props) =>
        props.isOpen ? 'space-around' : 'flex-end'};
            align-items: ${(props) => (props.isOpen ? 'center' : '')};
            margin-right: ${(props) => (props.isOpen ? '10px' : '')};
            min-width: 150px;

            p {
                display: ${(props) => (props.isOpen ? 'static' : 'none')};
                color: ${(props) => (props.isOpen ? '#007fdf' : '')};
                font-size: ${(props) => (props.isOpen ? '14px' : '')};
                font-weight: ${(props) => (props.isOpen ? 'bold' : '')};
                cursor: ${(props) => (props.isOpen ? 'pointer' : '')};

                :hover {
                    border-bottom: none;
                }
            }
            a {
                display: ${(props) => (props.isOpen ? 'block' : 'none')};
                color: ${(props) => (props.isOpen ? '#007fdf' : '')};
                font-size: ${(props) => (props.isOpen ? '14px' : '')};
                font-weight: ${(props) => (props.isOpen ? 'bold' : '')};
                cursor: ${(props) => (props.isOpen ? 'pointer' : '')};
                :hover {
                    border-bottom: none;
                }
            }
            button {
                display: ${(props) => (props.isOpen ? 'none' : '')};
            }
            article {
                display: none;
            }
            img {
                display: inline;
                height: 20px;
                margin-left: 15px;
                margin-right: ${(props) => (props.isOpen ? '15px' : '')};
                cursor: pointer;
                align-self: ${(props) => (props.isOpen ? 'flex-end' : '')};
            }
        }
    }

    @media ${device.mobileLMax} {
        section {
            min-width: unset;
            width: auto;
            img {
              margin-left: 4px;
            }
        }
    }
`

const ButtonWrapper = styled.label`
    @media ${device.mobileL} {
        display: none;
        background: blue;
    }
`

const LogoContainer = styled.div`
    img {
        margin-right: 4px;
    }
    @media ${device.mobileLMax} {
        img {
            width: 32px !important;
            height: 32px !important;
        }
        h1 {
            font-size: 26px !important;
        }
    }
`

const langSwitchStyles = css`
    margin: 0 16px 0 0;
`

const LoginButton = styled(BaseButtonInvertedWhite)`
    @media ${device.mobileLMax} {
        width: 64px;
    }
`

const LandingNavigation = () => {
    const history = useHistory()
    const [openMenu, setOpenMenu] = useState(false)
    const {t} = useTranslation()

    return (
        <LandingNavigationContainer isOpen={openMenu}>
            <LogoContainer onClick={() => history.push('/')}>
                <img alt="sit-logo" src={jobTracker_logo} />
                <h1>JobTracker</h1>
            </LogoContainer>

            <section>
                <LangSwitch customStyles={langSwitchStyles} />
                <LoginButton
                    marginRight
                    onClick={() => history.push(LOGIN)}
                >
                    {t('auth:login')}
                </LoginButton>
                <a href="/contact">Contact</a>
                <a href="/legalnotice">Legal Notice</a>
                <a href="/terms">Terms and Conditions</a>
                <a href="/privacy">Privacy</a>
                <img
                    alt="menu"
                    onClick={() => setOpenMenu(!openMenu)}
                    src={openMenu ? menu_icon_blue : menu_icon}
                />
                <ButtonWrapper>
                    <BaseButton onClick={() => history.push(REGISTRATION)}>
                        {t('auth:sign_up')}
                    </BaseButton>
                </ButtonWrapper>
            </section>

        </LandingNavigationContainer>
    )
}

export default LandingNavigation
