import React from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'

import {CircleBackground4} from '../../../style/background'
import {device} from '../../../style/devices'
import LandingFooter from '../LandingFooter'
import LandingNavigation from '../LandingNavigation'


const TermsAndConditionsContainer = styled.div`
      height: 70%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      h6 {
        margin-bottom: 20px;
        font-size: 35px;
        color: white;
        font-weight: lighter;
      }
      article {
        height: 75%;
        width: 65%;
        overflow-y: scroll;
        text-align: justify;

        h2 {
          font-size: 20px;
          color: white;
          font-weight: bold;
          margin: 10px 0;
        }
        ul {
          li {
          font-size: 14px;
          color: white;
          font-weight: lighter;
          }
        }
        p {
          font-size: 14px;
          color: white;
          font-weight: lighter;
        }
        h3 {
          font-size: 20px;
          color: #2b2727;
          font-weight: bold;
          margin: 10px 0;
        }
      }
  @media ${device.mobileL} {
     h6 {
      font-size: 28px;
     }
     article {
      width: 70%;
     }
  }
`


const TermsAndConditions = () => {
    const {t} = useTranslation()

    return (
        <TermsAndConditionsContainer>
            <LandingNavigation />
            <CircleBackground4 />
            <h6>{t('terms_and_conds:title')}</h6>
            <article>
                <p>
                    {t('terms_and_conds:part1')}
                </p><br />
                <p>
                    {t('terms_and_conds:part2')}
                </p>

                <h2>{t('terms_and_conds:part3')}</h2>
                <p>
                    {t('terms_and_conds:part4')}
                </p><br />
                <p>
                    {t('terms_and_conds:part5')}
                </p><br />
                <p>
                    {t('terms_and_conds:part6')}
                </p><br />
                <p>
                    {t('terms_and_conds:part7')}
                </p><br />
                <p>
                    {t('terms_and_conds:part8')}
                </p><br />

                <h2>{t('terms_and_conds:part9')}</h2>
                <p>
                    {t('terms_and_conds:part10')}
                </p><br />
                <p>
                    {t('terms_and_conds:part11')}
                </p>

                <h2>{t('terms_and_conds:part12')}</h2>
                <p>
                    {t('terms_and_conds:part13')}
                </p>

                <h2>{t('terms_and_conds:part14')}</h2>
                <p>
                    {t('terms_and_conds:part15')}
                </p>
                <h2>{t('terms_and_conds:part16')}</h2>
                <p>
                    {t('terms_and_conds:part17')}
                </p><br />
                <ul>
                    <li>{t('terms_and_conds:part18')}</li>
                    <li>{t('terms_and_conds:part19')}</li>
                    <li>{t('terms_and_conds:part20')}</li>
                    <li>{t('terms_and_conds:part21')}</li>
                </ul>

                <h2>{t('terms_and_conds:part22')}</h2>

                <p>{t('terms_and_conds:part23')}</p>

                <h2>{t('terms_and_conds:part24')}</h2>
                <p>
                    {t('terms_and_conds:part25')}
                </p>
            </article>
            <LandingFooter />
        </TermsAndConditionsContainer>
    )
}

export default TermsAndConditions
