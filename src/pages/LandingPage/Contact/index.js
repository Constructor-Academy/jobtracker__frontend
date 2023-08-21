import React, {useRef, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'

import {newContactForm} from '../../../store/actions/contactActions'
import {CircleBackground4} from '../../../style/background'
import {BaseButton} from '../../../style/buttons'
import {device} from '../../../style/devices'
import LandingFooter from '../LandingFooter'
import LandingNavigation from '../LandingNavigation'


const ContactContainer = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h6 {
        margin-bottom: 20px;
        font-size: 35px;
        color: white;
        font-weight: lighter;
    }

    form {
        width: 40%;
        height: 60%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;

        label {
            font-size: 15px;
            color: white;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            margin-top: 10px;

            input {
                border: solid lightgray 1px;
                border-radius: 4px;
                padding: 2px 6px;
                background: none;
                font-size: 15px;
                margin-top: 4px;
                color: #e1e1e1;
                height: 30px;

                :hover,
                :active {
                    border: solid ${(props) => props.theme.accentColor} 1.5px;
                }

                ::placeholder {
                    color: rgba(255, 255, 255, 0.53);
                }
            }
            textarea {
                border: solid lightgray 1px;
                border-radius: 4px;
                padding: 2px 6px;
                background: none;
                font-size: 15px;
                transition: 0.3s;
                height: 100px;
                margin-top: 4px;
                color: #e1e1e1;

                :hover,
                :focus {
                    transition: 0.3s;
                    border: solid ${(props) => props.accentColor} 1.5px;
                }
                ::placeholder {
                    color: rgba(255, 255, 255, 0.65);
                }
            }
        }

        span {
            color: #8fe58f;
            margin-top: 8px;
            font-size: 14px;
            align-self: center;
        }
    }

    @media ${device.mobileL} {
        form {
            width: 70%;
        }
    }
`

const SubmitContactFormButton = styled(BaseButton)`
    width: 80px;
    height: 20px;
    margin-top: 20px;
`

const Contact = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const name = useRef('')
    const email = useRef('')
    const comments = useRef('')
    const [successMessage, setSuccessMessage] = useState(false)

    const contactFormHandler = async (e) => {
        e.preventDefault()
        const formInfo = {
            name: name.current.value,
            email: email.current.value,
            comment: comments.current.value,
        }
        dispatch(newContactForm(formInfo))
        setSuccessMessage(true)
    }

    return (
        <ContactContainer>
            <LandingNavigation />
            <CircleBackground4 />
            <h6>{t('contact:title')}</h6>
            <form onSubmit={contactFormHandler}>
                <label>
                    {t('contact:name.label')}
                    <input placeholder={t('contact:name.placeholder')} ref={name} required />
                </label>
                <label>
                    {t('contact:email.label')}
                    <input placeholder={t('contact:email.placeholder')} ref={email} required />
                </label>
                <label>
                    {t('contact:comments.label')}
                    <textarea
                        placeholder={t('contact:comments.placeholder')}
                        ref={comments}
                        required
                    />
                </label>
                {
                    successMessage && (
                        <span>{t('contact:success')}</span>
                    )
                }
                <SubmitContactFormButton
                    onSubmit={contactFormHandler}
                    type="submit"
                >
                    {t('common:submit')}
                </SubmitContactFormButton>
            </form>
            <LandingFooter />
        </ContactContainer>
    )
}

export default Contact
