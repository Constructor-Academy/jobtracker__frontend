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
import {registrationValidationAction} from '../../store/actions/auth/userRegistrationAction'
import {addMessage} from '../../store/actions/messageAction'
import {BaseButton} from '../../style/buttons'
import {AuthPageContainerStyled, AuthPageContents} from '../../style/containers'
import {RegistrationValidationFormStyled} from '../../style/forms'
import {TransparentInput} from '../../style/inputs'
import {ErrorMessage} from '../../style/messages'
import {BaseTitleStyled} from '../../style/titles'
import {InputWrapperStyled} from '../../style/wrappers'


const RegistrationValidation = () => {
    const {t} = useTranslation()
    const email = useUrlQueryParams('email')
    const code = useUrlQueryParams('code')
    let password = useRef('')
    let password_repeat = useRef('')
    let first_name = useRef('')
    let last_name = useRef('')
    const [showPassword, setShowPassword] = useState(false)
    const messages = useSelector((state) => state.messageReducer)
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
    useResetErrors()
    const history = useHistory()

    const ValidationHandler = async e => {
        e.preventDefault()
        const passwordValue = password.current.value.trim()
        const passwordRepeatValue = password_repeat.current.value.trim()
        const firstNameValue = first_name.current.value.trim()
        const lastNameValue = last_name.current.value.trim()
        if (!passwordValue || !passwordRepeatValue || !firstNameValue || !lastNameValue) {
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
            password: password.current.value,
            password_repeat: password_repeat.current.value,
            first_name: first_name.current.value,
            last_name: last_name.current.value,
        }
        const data = await dispatch(registrationValidationAction(credentials))
        if (data) {
            history.push(`success/${email}/login/check/registration-validation`)
        }
    }

    return (
        <AuthPageContainerStyled>
            <AuthPageContents>
                <SignUpButton />
                <RegistrationValidationFormStyled>
                    <BaseTitleStyled>{t('auth:reg_validation:title')}</BaseTitleStyled>
                    <InputWrapperStyled>
                        <TransparentInput
                            name='first_name'
                            placeholder={t('common:forms:first_name')}
                            ref={first_name}
                            type='text'
                        />
                        {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
                    </InputWrapperStyled>

                    <InputWrapperStyled>
                        <TransparentInput
                            name='last_name'
                            placeholder={t('common:forms:last_name')}
                            ref={last_name}
                            type='text'
                        />
                        {error && <ErrorMessage>{error.last_name}</ErrorMessage>}
                    </InputWrapperStyled>

                    <InputWrapperStyled>
                        <TransparentInput
                            name="password"
                            placeholder={t('auth:reg_validation:password')}
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
                            placeholder={t('auth:reg_validation:password_repeat')}
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

                    <BaseButton onClick={ValidationHandler}>{t('auth:reg_validation:register')}</BaseButton>
                </RegistrationValidationFormStyled>
                <Illustration />

            </AuthPageContents>
            {messages && <PopUpMessages messages={messages} />}
            <ConstructorLogoFooter credentials />
        </AuthPageContainerStyled>
    )
}


export default RegistrationValidation

