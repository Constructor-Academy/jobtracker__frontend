import React from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'

import {CircleBackground4} from '../../../style/background'
import {device} from '../../../style/devices'
import LandingFooter from '../LandingFooter'
import LandingNavigation from '../LandingNavigation'


const LegalNoticeContainer = styled.div`
      height: 50vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media ${device.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
        height: 70vh;
      }
`

const DataInfo = styled.div`
  height: 80%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  min-width: 300px;

  h1 {
    font-size: 32px;
    font-weight: lighter;
    margin-bottom: 5%;
  }


    h2 {
      font-size: 21px;
      font-weight: bold;
      color: white;
    }
    h3 {
      font-size: 18px;
      font-weight: lighter;
    }

    h4 {
      font-size: 18px;
      font-weight: lighter;
      color: #e54c12;

    }
    h5 {
      font-size: 20px;
    }

   @media ${device.mobileL} {
        height: 40%;
        width: 70%;
        h1 {
          font-size: 20px;

        }
        h2 {
         font-size: 18px;

        }
        h3 {
          font-size: 16px;
          font-weight: lighter;
        }
        h4 {
          font-size: 15px;
          font-weight: lighter;
        }
        h5 {
        font-size: 14px;
        }
   }
`

const LegalNotice = () => {
    const {t} = useTranslation()

    return (
        <LegalNoticeContainer>
            <LandingNavigation />
            <CircleBackground4 />
            <DataInfo>
                <h1>{t('legal:contact')}:</h1>
                <h2>Constructor Learning</h2>
                <h3>c/o SIT Academy AG</h3>
                <h3>Heinrichstrasse 200</h3>
                <h3>8005 {t('legal:zh')}</h3>
                <h3>{t('legal:ch')}</h3>
                {/*<h4>learn@sit.academy</h4>*/}
                <h4>+41 (0)44 797 51 43</h4>
                <h5>{t('legal:vat')}: CHE-246.121.247</h5>
            </DataInfo>
            <LandingFooter />
        </LegalNoticeContainer>
    )
}

export default LegalNotice
