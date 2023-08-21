import React from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components/macro'

import constructorLogo from '../../assets/constructor_learning_logo_bluered.png'
import constructorLogoWhite from '../../assets/constructor_learning_logo_white.png'
import {device as devices} from '../../style/devices'

const ConstructorLogoFooterContainer = styled.a`
    height: ${(props) => (props.credentials ? '' : '90px')};
    width: 100%;
    display: flex;
    justify-content: ${(props) =>
        props.credentials ? 'center' : 'space-between'};
    align-items: center;
    flex-direction: ${(props) => (props.credentials ? 'row' : 'column')};
    color: ${(props) =>
        props.credentials ? props.theme.black : props.theme.white};
    text-decoration: none;
    margin-bottom: 16px;

    img {
        width: ${(props) => (props.credentials ? '110px' : '110px')};
        margin-right: ${(props) => (props.credentials ? '10px' : '')};
        margin-bottom: ${(props) => props.theme.spaceXXS};
        margin-top: 3px;
    }
    p {
        font-size: ${(props) => (props.credentials ? '12px' : '8px')};
        align-self: ${(props) => (props.credentials ? 'center' : '')};
        margin-right: ${(props) => (props.landing ? '20px' : '')};
        color: ${(props) =>
        props.credentials ? props.theme.black : props.theme.white};

        opacity: 0.8;
    }
    :hover {
        cursor: pointer;
    }

    @media ${devices.mobileL} {
        position: relative;
        width: 100%;
        justify-content: center;
        display: ${(props) => (props.credentials ? 'flex' : 'none')};
        margin: 0;
        padding: 0;
        bottom: 0;
        right: 0;
        left: 0;
        p {
            font-size: 8px;
        }
    }
`

const ConstructorLogoFooter = ({credentials}) => {
    const {t} = useTranslation()

    return (
        <ConstructorLogoFooterContainer
            credentials={credentials}
            href="https://learning.constructor.org/"
            rel="noreferrer"
            target="_blank"
        >
            <img
                alt="constructor-learning-logo"
                src={credentials ? constructorLogo : constructorLogoWhite}
            />
            <p>© {new Date().getFullYear()} Constructor Learning.&nbsp;</p>
            <p>{t('components/sidebar:rights_reserved')}</p>
        </ConstructorLogoFooterContainer>
    )
}

export default ConstructorLogoFooter
