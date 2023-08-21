import React, {useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import email_icon from '../../assets/icons/email_icon.svg'
import Illustration from '../../components/illustration'
import PopUpMessages from '../../components/PopUpMessages'
import SignUpButton from '../../components/SignUpButton'
import ConstructorLogoFooter from '../../components/SITLogoFooter'
import {validateEmail} from '../../helpers/validators'
import {resetPassword} from '../../store/actions/auth/resetPasswordAction'
import {addMessage} from '../../store/actions/messageAction'
import {BaseButtonFlexEnd} from '../../style/buttons'
import {
    AuthPageContainerStyled,
    AuthPageContents,
} from '../../style/containers'
import {BaseFormStyled} from '../../style/forms'
import {TransparentInput} from '../../style/inputs'
import {BaseTitleStyled} from '../../style/titles'
import {InputWrapperStyled} from '../../style/wrappers'


const PasswordReset = () => {
    let email = useRef('')
    const messages = useSelector((state) => state.messageReducer)
    const history = useHistory()
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const resetPasswordHandler = async (e) => {
        e.preventDefault()
        const emailValue = email.current.value.trim()
        if (!emailValue) {
            return await dispatch(
                addMessage({
                    detail: t('auth:errors.email_required'),
                    type: 'warning',
                })
            )
        }
        const validEmail = validateEmail(emailValue)
        if (!validEmail) {
            return await dispatch(
                addMessage({
                    detail: t('errors:email.invalid'),
                    type: 'warning',
                })
            )
        }
        const data = await dispatch(resetPassword(emailValue))
        if (data){
            history.push(`success/${emailValue}/login/email/password-reset`)
        }
    }

    return (
        <AuthPageContainerStyled>
            <AuthPageContents>
                <BaseFormStyled onSubmit={resetPasswordHandler}>
                    <BaseTitleStyled>{t('auth:pwd_reset')}</BaseTitleStyled>
                    <InputWrapperStyled>
                        <img alt="email" src={email_icon} />
                        <TransparentInput
                            name="email"
                            placeholder={t('auth:enter_email')}
                            ref={email}
                            type="text"
                        />
                    </InputWrapperStyled>
                    <BaseButtonFlexEnd>{t('auth:pwd_reset_link')}</BaseButtonFlexEnd>
                </BaseFormStyled>
                <Illustration />
                <SignUpButton />
            </AuthPageContents>
            <ConstructorLogoFooter credentials />
            {messages && <PopUpMessages messages={messages} />}
        </AuthPageContainerStyled>
    )
}

export default PasswordReset
