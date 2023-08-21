import React from 'react'
import {useTranslation} from 'react-i18next'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components/macro'


import {BaseButton} from '../../../style/buttons'
import {device} from '../../../style/devices'
import SkillgapCvUploader from './SkillgapCvUploader'


const GetSuggestionsOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: ${props => props.theme.spaceM};
    margin-bottom: 72px;
    @media ${device.laptop} {
        margin-top: ${props => props.theme.spaceXL};
        margin-bottom: 96px;
    }
    p {
        text-align: center;
        font-size: 16px;
        margin-bottom: ${props => props.theme.spaceM};
        @media ${device.laptop} {
            font-size: 18px;
        }
    }
`

const AddButton = styled(BaseButton)`
    grid-area: button;
    width: 100%;
    height: 40px;
    display: flex;
    align-self: center;
    text-transform: uppercase;
    margin-bottom: ${props => props.theme.spaceM};
    @media ${device.laptop} {
        width: 30%;
    }
`

const FillProfileOrUploadCV = ({setUploadedViaCv}) => {
    const {t} = useTranslation()
    const history = useHistory()

    return (
        <>
            <GetSuggestionsOptionsContainer>
                <p>{t('jobs:more_info')}</p>
                <p>{t('jobs:complete_profile')}</p>
                <AddButton onClick={() => history.push('/userprofile')}>{t('jobs:complete_btn')}</AddButton>
            </GetSuggestionsOptionsContainer>
            <SkillgapCvUploader setUploadedViaCv={setUploadedViaCv} />
        </>
    )
}

export default FillProfileOrUploadCV
