import React, {useRef, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import hide_password from '../../assets/hide_password.svg'
import show_password from '../../assets/view_password.svg'
import Illustration from '../../components/illustration'
import PopUpMessages from '../../components/PopUpMessages'
import SignUpButton from '../../components/SignUpButton'
import ConstructorLogoFooter from '../../components/SITLogoFooter'
import {useUrlQueryParams, useResetErrors} from '../../hooks'
import {LOGIN} from '../../routes/paths'
import {restPasswordValidate} from '../../store/actions/auth/resetPasswordAction'
import {addMessage} from '../../store/actions/messageAction'
import {BaseButton} from '../../style/buttons'
import {AuthPageContainerStyled, AuthPageContents} from '../../style/containers'
import {PasswordResetValidationFormStyled} from '../../style/forms'
import {TransparentInput} from '../../style/inputs'
import {BasePageLinkStyled} from '../../style/links'
import {ErrorMessage} from '../../style/messages'
import {BaseTitleStyled} from '../../style/titles'
import {InputWrapperStyled} from '../../style/wrappers'


const PasswordResetValidation = () => {
    const email = useUrlQueryParams('email')
    const code = useUrlQueryParams('code')
    let password = useRef('')
    let password_repeat = useRef('')
    const messages = useSelector((state) => state.messageReducer)
    const [showPassword, setShowPassword] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
    useResetErrors()
    const history = useHistory()
    const {t} = useTranslation()

    const register = async e => {
        e.preventDefault()
        const passwordValue = password.current.value.trim()
        const passwordRepeatValue = password_repeat.current.value.trim()
        if (!passwordValue || !passwordRepeatValue) {
            return await dispatch(
                addMessage({
                    detail: t('errors:general.all_required'),
                    type: 'warning',
                })
            )
        }
        if (passwordValue !== passwordRepeatValue) {
            return await dispatch(
                addMessage({
                    detail: t('errors:password.dont_match'),
                    type: 'warning',
                })
            )
        }
        const credentials = {
            email: email,
            code: code,
            password: passwordValue,
            password_repeat: passwordRepeatValue,
        }
        const data = await dispatch(restPasswordValidate(credentials))
        if(data){
            history.push(`success/${email}/login/email/password-reset-validation`)
        }
    }

    return (
        <AuthPageContainerStyled>
            <AuthPageContents>

                <SignUpButton />
                <PasswordResetValidationFormStyled>
                    <BaseTitleStyled>{t('auth:new_pwd')}</BaseTitleStyled>

                    <InputWrapperStyled>
                        <TransparentInput
                            name="password"
                            placeholder={t('auth:pwd')}
                            ref={password}
                            type={showPassword ? 'text' : 'password'}
                        />
                        <img
                            alt="show-hide"
                            onClick={() => setShowPassword(!showPassword)}
                            src={
                                showPassword ? hide_password : show_password
                            }
                        />
                        {error && <ErrorMessage>{error.password}</ErrorMessage>}
                    </InputWrapperStyled>

                    <InputWrapperStyled>
                        <TransparentInput
                            name="password_repeat"
                            placeholder={t('auth:pwd_repeat')}
                            ref={password_repeat}
                            type={showPassword ? 'text' : 'password'}
                        />
                        <img
                            alt="show-hide"
                            onClick={() => setShowPassword(!showPassword)}
                            src={
                                showPassword ? hide_password : show_password
                            }
                        />
                        {error && <ErrorMessage>{error.password_repeat}</ErrorMessage>}
                    </InputWrapperStyled>

                    {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                    {error && <ErrorMessage>{error.detail}</ErrorMessage>}

                    <BaseButton onClick={register}>{t('auth:reset_pwd')}</BaseButton>
                    <BasePageLinkStyled to={LOGIN}>{t('auth:know_pwd')}</BasePageLinkStyled>
                </PasswordResetValidationFormStyled>
                <Illustration />
            </AuthPageContents>
            {messages && <PopUpMessages messages={messages} />}
            <ConstructorLogoFooter credentials />
        </AuthPageContainerStyled>
    )
}

export default PasswordResetValidation
