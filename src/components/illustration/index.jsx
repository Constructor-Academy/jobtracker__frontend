import React from 'react'
import styled from 'styled-components/macro'

import desk from '../../assets/illustrations/desk.jpg'
import {device as devices} from '../../style/devices'


export const BaseIllustrationContainerStyled = styled.img`
    width: 50%;
    max-width: 520px;
    margin-left: 5vw;
    margin-right: 5vw;

    @media ${devices.mobileL} {
        display: none;
    }
`

const Illustration = () => {
    return <BaseIllustrationContainerStyled src={desk} />
}

export default Illustration
