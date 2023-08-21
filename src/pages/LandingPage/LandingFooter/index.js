import React from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components/macro'

import constructorLogo from '../../../assets/constructor_learning_logo_bluered.png'
import {device} from '../../../style/devices'
import FooterMenu from './FooterMenu'


const LandingFooterContainer = styled.div`
    background: none;
    height: 60px;
    width: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-around;
    bottom: 0;
    padding-bottom: 16px;
    div {
        color: #5F5F5F;
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          cursor: pointer;
          font-size: 13px;
            :hover {
              font-weight: bold;
            }
        }
    }
    @media ${device.mobileL} {
        flex-direction: column;
        height: 70px;
        div {
        width: 100%;
        justify-content: space-around;
        padding: 0 10px;
          a {
            font-size: 12px;
          }
        }
    }
`

const ConstructorFooterLogoLanding = styled.a`
    height: 60px;
    width: 360px;
    min-width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    text-decoration: none;
    img {
        width: 100px;
        margin-right: 10px;
    }
    p {
        font-size: 9px;
        color: #5F5F5F;
        text-decoration: none;
    }
    :hover {
        cursor: pointer;
    }
    @media ${device.laptop} {
      justify-content: right;
    }
`

const LandingFooter = () => {
    const {t} = useTranslation()

    return (
        <LandingFooterContainer>
            <FooterMenu />
            <ConstructorFooterLogoLanding href='https://learning.constructor.org/' target='_blank'>
                <img alt="constructor-learning-logo" src={constructorLogo} />
                <p>© {new Date().getFullYear()} Constructor Learning.&nbsp;{t('landing_page:footer.rights_reserved')}</p>
            </ConstructorFooterLogoLanding>
        </LandingFooterContainer>)
}

export default LandingFooter
