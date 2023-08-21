import React, {useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'
import styled from 'styled-components/macro'

import check_icon from '../../../assets/icons/check_icon.svg'
import close_icon from '../../../assets/icons/close_icon.svg'
import error_icon from '../../../assets/icons/error_icon.svg'
import {removeMessage} from '../../../store/actions/messageAction'

const MessagePopUpContainer = styled.div`
    background: ${(props) => props.theme.transparency};
    height: 60px;
    padding: 8px 14px;
    display: flex;
    margin: 4px;
    width: 350px;
    position: relative;
    border: solid
        ${(props) =>
        props.type === 'success'
            ? props.theme.colorSuccess
            : props.theme.colorFail}
        1.5px;
    color: ${(props) =>
        props.type === 'success'
            ? props.theme.colorSuccess
            : props.theme.colorFail};
    border-radius: ${(props) => props.theme.borderRadius};
    justify-content: flex-start;
    align-items: center;
    animation: transition 5s ease-in-out;
    opacity: 0;
    @keyframes transition {
        0% {
            height: 0;
        }
        4% {
            height: 60px;
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    div {
        h1 {
            color: ${(props) =>
        props.type === 'success'
            ? props.theme.colorSuccess
            : props.theme.colorFail};
            font-size: 14px;
        }
        p {
            font-size: 11px;
            color: ${(props) =>
        props.type === 'success'
            ? props.theme.colorSuccess
            : props.theme.colorFail};
        }
    }
`

const TypeIcon = styled.img`
    height: 25px;
    width: 25px;
    margin-right: 10px;
`

const CloseIcon = styled.img`
    height: 15px;
    width: 15px;
    position: absolute;
    top: 8px;
    right: 14px;
    cursor: pointer;
`

const PopUpMessage = ({message}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        const cleanUpMessage = () => {
            setTimeout(async () => {
                await dispatch(removeMessage(message.id))
            }, 5000)
        }
        cleanUpMessage()
    })

    return (
        <MessagePopUpContainer type={message.type}>
            <TypeIcon
                src={message.type === 'success' ? check_icon : error_icon}
            />
            <div>
                <h1>{message.type === 'success' ? t('common:success') : t('common:error')}</h1>
                <p>{message.detail}</p>
            </div>
            <CloseIcon
                onClick={() => dispatch(removeMessage(message.id))}
                src={close_icon}
            />
        </MessagePopUpContainer>
    )
}

export default PopUpMessage
