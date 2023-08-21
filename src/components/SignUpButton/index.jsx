import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useLocation, useHistory} from 'react-router-dom'
import styled from 'styled-components/'

import {
    PASSWORD_RESET,
    PASSWORD_RESET_VALIDATION,
    REGISTRATION,
    LOGIN,
    REGISTRATION_VALIDATION,
} from '../../routes/paths'
import {BaseButtonInverted} from '../../style/buttons'
import {device as devices} from '../../style/devices'

const SignUpButtonWrapperStyled = styled.div`
    color: ${(props) => props.theme.greyLighter};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 40px;
    top: 20px;
    label {
        margin-right: ${(props) => props.theme.spaceS};
    }

    @media ${devices.mobileL} {
        flex-direction: column;
        position: relative;
        right: 0;
        top: 0;
        margin-top: ${(props) => props.theme.spaceM};
        margin-bottom: ${(props) => props.theme.spaceL};

        label {
            margin-right: 0;
            margin-bottom: ${(props) => props.theme.spaceXS};
        }
    }
`


const SignUpButton = () => {
    const location = useLocation()
    const history = useHistory()
    const [currentPath, setCurrentPath] = useState('')
    const {t} = useTranslation()

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <SignUpButtonWrapperStyled>
            {
                [REGISTRATION, REGISTRATION_VALIDATION, PASSWORD_RESET, PASSWORD_RESET_VALIDATION].includes(currentPath) ? (
                    <>
                        <label>{t('auth:have_account')}</label>
                        <BaseButtonInverted onClick={() => history.push(LOGIN)}>
                            {t('auth:login')}
                        </BaseButtonInverted>
                    </>
                ) : (
                    <>
                        <label>{t('auth:no_account')}</label>
                        <BaseButtonInverted
                            onClick={() => history.push(REGISTRATION)}
                        >
                            {t('auth:sign_up_short')}
                        </BaseButtonInverted>
                    </>
                )
            }
        </SignUpButtonWrapperStyled>
    )
}

export default SignUpButton
