import React, {useEffect} from 'react'
import {Trans, useTranslation} from 'react-i18next'
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components'

import check_icon from '../../assets/icons/check_icon.svg'
import email_icon from '../../assets/icons/email_sending_icon.svg'
import Illustration from '../../components/illustration'
import ConstructorLogoFooter from '../../components/SITLogoFooter'
import {BasePageContainerStyled} from '../../style/containers'

const SuccessMessageWrapperStyled = styled.div`
    height: 250px;
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-size: 20px;
        color: ${(p) => p.theme.accentColor};
    }
    h2 {
        font-size: 14px;
        font-weight: normal;
        text-align: center;
        color: ${(p) => p.theme.greyLighter};

        span {
            color: ${(p) => p.theme.accentColor};
        }
    }
    img {
        height: 50px;
        width: 50px;
        opacity: 1;
        animation: show 3s ease-out;
        @keyframes show {
            from {
                opacity: 0;
                transform: translate(-20px);
            }
            to {
                opacity: 1;
            }
        }
    }
`

const BasePageContainerSuccessStyled = styled(BasePageContainerStyled)`
  padding-left: 100px;
`


const SuccessPage = () => {
    const {t} = useTranslation()
    const history = useHistory()
    const {email, redirect, icon, type} = useParams()

    useEffect(() => {
        setTimeout(() => {
            history.push(`/${redirect}`)
        }, 7000)
    })

    return (
        <BasePageContainerSuccessStyled>
            {
                type === 'registration'
                &&
                <SuccessMessageWrapperStyled>
                    <h1>{t('success:registration.title')}</h1>
                    <h2>
                        <Trans
                            components={{span: <span />}}
                            i18nKey='success:registration.message'
                            values={{email}}
                        />
                    </h2>
                    <img
                        alt="check"
                        src={icon === 'email' ? email_icon : check_icon}
                    />
                </SuccessMessageWrapperStyled>

            }
            {
                type === 'registration-validation'
                &&
                <SuccessMessageWrapperStyled>
                    <h1>{t('success:registration_validation.title')}</h1>
                    <img
                        alt="check"
                        src={check_icon}
                    />
                </SuccessMessageWrapperStyled>

            }
            {
                type === 'password-reset'
                &&
                <SuccessMessageWrapperStyled>
                    <h1>{t('success:password_reset.title')}</h1>
                    <h2>
                        <Trans
                            components={{span: <span />}}
                            i18nKey='success:password_reset.message'
                            values={{email}}
                        />
                    </h2>
                    <img
                        alt="check"
                        src={icon === 'email' ? email_icon : check_icon}
                    />
                </SuccessMessageWrapperStyled>

            }
            {
                type === 'password-reset-validation'
                &&
                <SuccessMessageWrapperStyled>
                    <h1>{t('success:password_reset_validation.title')}</h1>
                    <img
                        alt="check"
                        src={check_icon}
                    />
                </SuccessMessageWrapperStyled>
            }

            <Illustration />
            <ConstructorLogoFooter credentials />
        </BasePageContainerSuccessStyled>
    )
}

export default SuccessPage
