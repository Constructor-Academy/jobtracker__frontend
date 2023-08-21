import React from 'react'
import styled from 'styled-components/macro'


const ProgressBarContainer = styled.div`
    height: 20px;
    width: 100%;
    border-radius: 5px;
    box-shadow: ${props => props.theme.boxShadowLighter};
    background: rgb(255,255,255);
    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(242,243,245,1) 100%);
`

const Progress = styled.div`
    height: 100%;
    width: ${props => props.completed}%;
    border-radius: inherit;
    background: ${props => props.theme.primaryBlue};
    background: linear-gradient(126deg, rgba(5,74,145,1) 62%, rgba(98,173,249,1) 100%);
`

const ProgressBar = ({completed}) => {
    return (
        <ProgressBarContainer>
            <Progress completed={completed} />
        </ProgressBarContainer>
    )
}

export default ProgressBar
