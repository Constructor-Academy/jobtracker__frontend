import React from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'

import {device} from '../../../style/devices'

const JobSuggestionsErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.spaceXXL};
  margin-bottom: 72px;
  @media ${device.laptop} {
    margin-bottom: 96px;
  }

  h2 {
    text-align: center;
    color: ${props => props.theme.colorFail};
  }
`

const JobSuggestionsError = () => {
    const {t} = useTranslation()

    return (
        <JobSuggestionsErrorContainer>
            <h2>{t('jobs:backend_error')}</h2>
        </JobSuggestionsErrorContainer>
    )
}

export default JobSuggestionsError
