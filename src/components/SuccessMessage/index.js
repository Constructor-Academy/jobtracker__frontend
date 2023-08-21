import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components/macro'

import check from '../../assets/icons/check.svg'



const SuccessContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background: rgba(0,0,0,0.69);
    color: ${props => props.theme.colorSuccess};
    font-size: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 60px 40px;
    text-align: center;
    z-index: 1;
`

const SuccessMessage = ({message, redirect}) => {
    const history = useHistory()

    setTimeout(() => {
        history.push(`${redirect}`)
    }, 2000)

    return (
        <SuccessContainer>
            {message}
            <img
                alt="check icon"
                src={check}
            />
        </SuccessContainer>
    )

}

export default SuccessMessage
