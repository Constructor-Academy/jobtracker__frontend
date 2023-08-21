import React from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'

import maintenance from '../../assets/maintenance.svg'
import {device} from '../../style/devices'


const UnderMaintenanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  h2 {
    font-size: 32px;
    margin-bottom: 60px;
    color: ${props => props.theme.accentColor};
  }
  img {
    max-width: 500px;
      @media ${device.mobileL} {
        max-width: 300px;
      }
  }
`

const UnderMaintenance = () => {
    const {t} = useTranslation()

    return (
        <UnderMaintenanceContainer>
            <h2>{t('common:under_maintenance')}</h2>
            <img
                alt="Under maintenance"
                src={maintenance}
            />
        </UnderMaintenanceContainer>
    )
}

export default UnderMaintenance
