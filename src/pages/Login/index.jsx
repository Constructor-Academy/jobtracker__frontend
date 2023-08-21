import React, {useRef, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import hide_password from '../../assets/hide_password.svg'
import email_icon from '../../assets/icons/email_icon.svg'
import lock_icon from '../../assets/icons/lock_icon.svg'
import show_password from '../../assets/view_password.svg'
import Illustration from '../../components/illustration'
import PopUpMessages from '../../components/PopUpMessages'
import SignUpButton from '../../components/SignUpButton'
import ConstructorLogoFooter from '../../components/SITLogoFooter'
import {PASSWORD_RESET} from '../../routes/paths'
import {userLoginAction} from '../../store/actions/auth/userLoginAction'
import {addMessage} from '../../store/actions/messageAction'
import {BaseButton} from '../../style/buttons'
import {AuthPageContainerStyled, AuthPageContents} from '../../style/containers'
import {BaseFormStyled} from '../../style/forms'
import {TransparentInput} from '../../style/inputs'
import {BasePageLinkStyled} from '../../style/links'
import {BaseTitleStyled} from '../../style/titles'
import {InputWrapperStyled} from '../../style/wrappers'


const Login = () => {
    let email = useRef('')
    let password = useRef('')
    const [showPassword, setShowPassword] = useState(false)
    const messages = useSelector((state) => state.messageReducer)
    const history = useHistory()
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const loginHandler = async (e) => {
        e.preventDefault()
        const credentials = {
            email: email.current.value,
            password: password.current.value,
        }
        if (!credentials.email) {
            return await dispatch(
                addMessage({
                    detail: t('auth:errors.email_required'),
                    type: 'warning',
                })
            )
        }
        if (!credentials.password) {
            return await dispatch(
                addMessage({
                    detail: t('auth:errors.password_required'),
                    type: 'warning',
                })
            )
        }
        const data = await dispatch(userLoginAction(credentials))
        if(data){
            data.user.is_admin
                ? history.push('/adminboard')
                : history.push('/dashboard')
        }
    }

    return (
        <AuthPageContainerStyled>
            <AuthPageContents>
                <BaseFormStyled onSubmit={loginHandler}>
                    <BaseTitleStyled>Log On</BaseTitleStyled>
                    <main>
                        <InputWrapperStyled>
                            <img alt="email" src={email_icon} />
                            <TransparentInput
                                name="email"
                                placeholder={t('auth:enter_email')}
                                ref={email}
                                type="text"
                            />
                        </InputWrapperStyled>
                        <InputWrapperStyled>
                            <img alt="lock" src={lock_icon} />
                            <TransparentInput
                                name="password"
                                placeholder={t('auth:enter_pwd')}
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
                        </InputWrapperStyled>
                    </main>
                    <footer>
                        <BasePageLinkStyled to={PASSWORD_RESET}>
                            {t('landing_page:login.forgot_pwd')}
                        </BasePageLinkStyled>
                        <BaseButton onClick={loginHandler}>Login</BaseButton>
                    </footer>
                </BaseFormStyled>
                <Illustration />
                <SignUpButton />
            </AuthPageContents>
            {messages && <PopUpMessages messages={messages} />}
            <ConstructorLogoFooter credentials />
        </AuthPageContainerStyled>
    )
}

export default Login
