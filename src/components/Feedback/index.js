import React, {useState, useRef, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'

import feedback from '../../assets/feedback_icon.png'
import {
    addFeedbackAction,
    resetFeedbackSuccess,
} from '../../store/actions/feedbackActions'
import {BaseButton, BaseButtonInverted} from '../../style/buttons'
import {device} from '../../style/devices'
import {FormFieldWrapperDefault} from '../../style/forms'
import {BaseInputStyled, InputTextArea} from '../../style/inputs'
import {OverlayFooter, OverlayTitle} from '../../style/overlay'
import {InputTitle} from '../../style/titles'

const FeedbackContainer = styled.div`
    background: ${(props) =>
        props.showForm ? 'rgba(255,255,255,0.97)' : 'none'};
    height: ${(props) => (props.showForm ? 'auto' : props.theme.controlHeight)};
    width: ${(props) => (props.showForm ? '600px' : props.theme.controlHeight)};
    border-radius: ${(props) => (props.showForm ? '4px' : '100%')};
    position: fixed;
    padding: 20px;
    display: flex;
    flex-direction: ${(props) => (props.showForm ? 'column' : 'row')};
    justify-content: ${(props) =>
        props.showForm ? 'space-between' : 'center'};
    align-items: center;
    bottom: ${(props) => props.theme.spaceS};
    left: ${(props) => props.theme.spaceXXL};
    box-shadow: -9px 9px 20px 1px rgba(0, 0, 0, 0.14);
    transform: scale(1);
    transition: 0.2s ease-in-out;
    animation: ${(props) => (props.showForm ? 'none' : 'pulse 3s infinite')};
    @keyframes pulse {
        0% {
            transform: scale(0.98);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
        }
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
        100% {
            transform: scale(0.98);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
    img {
        height: ${(props) => props.theme.controlHeight};
        width: ${(props) => props.theme.controlHeight};
        opacity: 0.8;
        cursor: pointer;
    }
    aside {
        font-size: 18px;
        color: rgba(128, 128, 128, 0.88);
        cursor: pointer;
    }

    form {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    :hover {
        animation: none;
        img {
            opacity: 1;
        }
        span {
            opacity: 1;
        }
    }

    @media ${device.mobileL} {
        display: none;
        bottom: 80px;
        width: ${(props) =>
        props.showForm ? '90%' : props.theme.controlHeight};
        height: ${(props) =>
        props.showForm ? '80%' : props.theme.controlHeight};
        img {
            height: ${(props) => props.theme.controlHeight};
            width: ${(props) => props.theme.controlHeight};
        }
    }
`


const Feedback = () => {
    const {t} = useTranslation()
    const [showForm, setShowForm] = useState(false)
    let title = useRef('')
    let content = useRef('')
    const dispatch = useDispatch()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const feedbackSuccess = useSelector(state => state.feedbackReducer.success)
    const [showError, setShowError] = useState(false)

    const submitFeedback = async (e) => {
        e.preventDefault()
        const feedback = {
            title: title.current.value,
            content: content.current.value,
        }
        if (!feedback.content) {
            setShowError(!showError)
        } else {
            setShowError(false)
            await dispatch(addFeedbackAction(feedback))
        }
    }

    useEffect(() => {
        if (feedbackSuccess) {
            setShowSuccessMessage(true)
            setTimeout(() => {
                setShowForm(false)
                dispatch(resetFeedbackSuccess())
                setShowSuccessMessage(false)
            }, 2000)
        }
    }, [feedbackSuccess, dispatch])

    return (
        <FeedbackContainer showForm={showForm}>
            {
                showForm ? (
                    <>
                        <OverlayTitle>{t('components/feedback:title')}</OverlayTitle>
                        <form>
                            <FormFieldWrapperDefault>
                                <InputTitle>{t('components/feedback:subject.title')}</InputTitle>
                                <BaseInputStyled
                                    name="title"
                                    placeholder={t('components/feedback:subject.placeholder')}
                                    ref={title}
                                    type="text"
                                />
                            </FormFieldWrapperDefault>
                            <FormFieldWrapperDefault noMargin>
                                <InputTitle marginBottom>{t('components/feedback:comments.title')}</InputTitle>
                                <InputTextArea
                                    name="comment"
                                    placeholder={t('components/feedback:comments.placeholder')}
                                    ref={content}
                                    type="text"
                                />
                            </FormFieldWrapperDefault>
                            <OverlayFooter>
                                <BaseButtonInverted
                                    onClick={() => setShowForm(!showForm)}
                                >
                                    {t('common:cancel')}
                                </BaseButtonInverted>
                                <BaseButton onClick={submitFeedback}>
                                    {t('common:submit')}
                                </BaseButton>
                            </OverlayFooter>
                            {
                                showSuccessMessage && (
                                    <p>{t('components/feedback:success')}</p>
                                )
                            }
                            {showError && <p>{t('components/feedback:comments.required')}</p>}
                        </form>
                    </>
                ) : (
                    <img
                        alt="feedback"
                        onClick={() => setShowForm(!showForm)}
                        src={feedback}
                        title="Give feedback"
                    />
                )
            }
        </FeedbackContainer>
    )
}

export default Feedback
