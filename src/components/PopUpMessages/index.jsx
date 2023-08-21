import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'

import {removeMessage} from '../../store/actions/messageAction'
import PopUpMessage from './PopUpMessage'


const PopUpMessagesContainerStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    top: 20px;
    background-color: white;
`


const PopUpMessages = ({messages}) => {
    const dispatch = useDispatch()
    if(messages.length > 5){
        setTimeout(async () => {
            await dispatch(removeMessage(messages[4].id))
        }, 0)
    }

    return (
        <PopUpMessagesContainerStyled>
            {
                messages.map(message => {
                    return <PopUpMessage key={message.id} message={message} />
                })
            }
        </PopUpMessagesContainerStyled>
    )
}


export default PopUpMessages
