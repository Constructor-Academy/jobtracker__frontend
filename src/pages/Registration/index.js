import React, {useRef, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import email_icon from '../../assets/icons/email_icon.svg'
import Illustration from '../../components/illustration'
import PopUpMessages from '../../components/PopUpMessages'
import SignUpButton from '../../components/SignUpButton'
import ConstructorLogoFooter from '../../components/SITLogoFooter'
import {userRegistrationAction} from '../../store/actions/auth/userRegistrationAction'
import {
    BaseButtonFlexEnd,
    RegistrationDisableButtonStyled,
} from '../../style/buttons'
import {
    AuthPageContainerStyled,
    AuthPageContents,
} from '../../style/containers'
import {BaseFormStyled} from '../../style/forms'
import {TransparentInput} from '../../style/inputs'
import {BaseTitleStyled} from '../../style/titles'
import {
    CheckboxLabelWrapperStyled,
    InputWrapperStyled,
} from '../../style/wrappers'


const Registration = () => {
    let email = useRef('')
    const [checkbox, setCheckbox] = useState(false)
    const messages = useSelector((state) => state.messageReducer)
    const history = useHistory()
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const registrationHandler = async (e) => {
        e.preventDefault()
        const data = await dispatch(userRegistrationAction(email.current.value))
        // if(data) setShowSuccess(!showSuccess)
        if (data){
            history.push(`success/${email.current.value}/login/email/registration`)
        }
    }

    return (
        <AuthPageContainerStyled>
            <AuthPageContents>
                <BaseFormStyled onSubmit={registrationHandler}>
                    <BaseTitleStyled>{t('auth:registration')}</BaseTitleStyled>
                    <InputWrapperStyled>
                        <img alt="email" src={email_icon} />
                        <TransparentInput
                            name="email"
                            placeholder={t('auth:enter_email')}
                            ref={email}
                            type="text"
                        />
                    </InputWrapperStyled>
                    <CheckboxLabelWrapperStyled>
                        <input
                            onChange={() => setCheckbox(!checkbox)}
                            type="checkbox"
                        />
                        <p>
                            {t('auth:terms_and_conds.part1')}&nbsp;
                            <a href="https://jobtracker.ai/terms" rel="noopener noreferrer" target="_blank">
                                {t('auth:terms_and_conds.part2')}
                            </a>
                            &nbsp;{t('auth:terms_and_conds.part3')}
                        </p>
                    </CheckboxLabelWrapperStyled>
                    {
                        checkbox ? (
                            <BaseButtonFlexEnd onClick={registrationHandler}>
                                {t('auth:sign_up_short')}
                            </BaseButtonFlexEnd>
                        ) : (
                            <RegistrationDisableButtonStyled
                                disabled
                                onClick={registrationHandler}
                            >
                                {t('auth:sign_up_short')}
                            </RegistrationDisableButtonStyled>
                        )
                    }
                </BaseFormStyled>
                <Illustration />
                <SignUpButton />
            </AuthPageContents>
            <ConstructorLogoFooter credentials />
            {messages && <PopUpMessages messages={messages} />}
        </AuthPageContainerStyled>
    )
}

export default Registration
