import React from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'

import {CircleBackground4} from '../../../style/background'
import {device} from '../../../style/devices'
import LandingFooter from '../LandingFooter'
import LandingNavigation from '../LandingNavigation'


const PrivacyContainer = styled.div`
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
        width: 80%;
        text-align: center;
      }
      article {
        height: 75%;
        width: 65%;
        overflow-y: scroll;
        text-align: justify;
        font-size: 14px;
        padding: 0 10px;
        h2 {
          font-size: 20px;
          color: white;
          font-weight: bold;
          margin: 10px 0;
        }
        p {
          font-size: 14px;
          color: white;
          font-weight: lighter;
          margin-bottom: 14px;
        }
        h3 {
          font-size: 20px;
          color: #2b2727;
          font-weight: bold;
          margin: 10px 0;
        }
      }

      @media ${device.mobileL} {

      }
`


const Privacy = () => {
    const {t} = useTranslation()

    return (
        <PrivacyContainer>
            <LandingNavigation />
            <CircleBackground4 />
            <h6>{t('privacy:title')}</h6>
            <article>
                <p>{t('privacy:intro.1')}</p>
                <p>{t('privacy:intro.2')}</p>
                <p>{t('privacy:intro.3')}</p>
                <p>{t('privacy:intro.4')}</p>
                <p>{t('privacy:intro.5')}</p>

                <h2>1. {t('privacy:controller.title')}</h2>
                <p>{t('privacy:controller.text')}</p>

                <h2>2. {t('privacy:data_collection.title')}</h2>
                <p>{t('privacy:data_collection.text')}</p>

                <h2>3. {t('privacy:user_data.title')}</h2>
                <p>{t('privacy:user_data.text')}</p>

                <h2>4. {t('privacy:third_party_links.title')}</h2>
                <p>{t('privacy:third_party_links.text')}</p>

                <h2>5. {t('privacy:data_processing_purpose.title')}</h2>
                <p>{t('privacy:data_processing_purpose.text')}</p>

                <h2>6. {t('privacy:tracking.title')}</h2>
                <p>{t('privacy:tracking.text')}</p>

                <h2>7. {t('privacy:datatransfer.title')}</h2>
                <p>{t('privacy:datatransfer.text')}</p>

                <h2>8. {t('privacy:data_retention.title')}</h2>
                <p>{t('privacy:data_retention.text')}</p>

                <h2>9. {t('privacy:data_security.title')}</h2>
                <p>{t('privacy:data_retention.text')}</p>

                <h2>10. {t('privacy:data_provision.title')}</h2>
                <p>{t('privacy:data_provision.text')}</p>

                <h2>11. {t('privacy:profiling.title')}</h2>
                <p>{t('privacy:profiling.text')}</p>

                <h2>12. {t('privacy:your_rights.title')}</h2>
                <p>{t('privacy:your_rights.text')}</p>

                <h2>13. {t('privacy:amendments.title')}</h2>
                <p>{t('privacy:amendments.text')}</p>

                <h3>{t('privacy:version')} 26.03.2019</h3>
            </article>
            <LandingFooter />
        </PrivacyContainer>
    )
}

export default Privacy
