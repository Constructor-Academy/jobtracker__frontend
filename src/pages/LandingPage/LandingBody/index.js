import React from 'react'
import {useTranslation} from 'react-i18next'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components/macro'

import cellphone from '../../../assets/cellphone_full.png'
import laptop from '../../../assets/laptop_full2.png'
import {BaseButton} from '../../../style/buttons'
import {device} from '../../../style/devices'


const LandingBodyContainer = styled.div`
    position: relative;
    padding-top: 40px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const ImagesWrapper = styled.div`
    height: 60%;
    width: 50%;
    position: relative;

    @media ${device.mobileL} {
        width: 100%;
        height: 40%;
    }
`

const LaptopImage = styled.img`
    height: 95%;
    position: absolute;
    top: 0;
    left: 30px;
    z-index: 1;
    animation: moveRight 3s ease-out;
    @keyframes moveRight {
        from {
            left: -10px;
        }
        to {
            left: 30px;
        }
    }

    @media ${device.mobileL} {
        height: 90%;
    }
`
const CellphoneImage = styled.img`
    height: 70%;
    position: absolute;
    bottom: 0;
    right: 30px;
    z-index: 2;
    animation: moveLeft 2s ease-in-out;
    @keyframes moveLeft {
        from {
            right: -10px;
        }
        to {
            right: 30px;
        }
    }

    @media ${device.mobileL} {
        height: 70%;
    }
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 22%;
    max-height: 500px;
    min-width: 287px;
    height: 70%;

    margin-top: -35px;

    h1 {
        line-height: 68px;
        font-size: 64px;
        font-weight: normal;
        color: white;
        min-width: 340px;

        i {
            font-size: 64px;
            font-weight: bold;
            font-style: normal;
            color: ${(props) => props.theme.accentColor};
        }
    }

    h2 {
        font-size: 22px;
        font-weight: 400;
        color: white;
        line-height: 30px;
    }

    @media ${device.mobileL} {
        display: flex;
        width: 100%;
        min-width: 344px;
        min-height: 260px;
        height: 40%;
        margin-top: -50px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 14px 20px;
        text-align: center;

        h1 {
            font-size: 40px;
            line-height: 40px;
            justify-content: flex-start;
            min-width: 373px;

            i {
                font-size: 40px;
            }
        }
        h2 {
            font-size: 15px;
            line-height: 16px;
            min-width: 340px;
        }
    }
`

const LandingBody = () => {
    const history = useHistory()
    const {t} = useTranslation()
    return (
        <LandingBodyContainer>
            <TitleWrapper>
                <h1>
                    {t('landing_page:main.title.part1')} <i>{t('landing_page:main.title.part2')}</i> {t('landing_page:main.title.part3')}
                </h1>
                <h2>
                    {t('landing_page:main.content')}
                </h2>
                <BaseButton onClick={() => history.push('/login')}>
                    {t('auth:sign_up')}
                </BaseButton>
            </TitleWrapper>
            <ImagesWrapper>
                <LaptopImage src={laptop} />
                <CellphoneImage src={cellphone} />
            </ImagesWrapper>
        </LandingBodyContainer>
    )
}

export default LandingBody
