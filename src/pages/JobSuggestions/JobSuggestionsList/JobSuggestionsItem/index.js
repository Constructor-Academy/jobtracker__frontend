import React from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'
import styled from 'styled-components/macro'

import {convertToBirthDate} from '../../../../helpers'
import {getI18nJobType} from '../../../../helpers/i18n'
import {createSuggestedJobAction} from '../../../../store/actions/jobAction'
import {BaseButton} from '../../../../style/buttons'
import {device} from '../../../../style/devices'
import {BaseLinkStyled} from '../../../../style/links'

const JobSuggestionCardContainer = styled.div`
    box-shadow: ${(props) => props.theme.boxShadowTiles};
    border-radius: ${(props) => props.theme.borderRadius};
    display: grid;
    grid-template-columns: auto 100px;
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
        "title title"
        "title title"
        "company ."
        "company button"
        "location button"
        "location button";
    @media ${device.laptop} {
        grid-template-columns: repeat(2, 1fr) 100px;
        grid-template-areas:
            "title title title"
            "title title title"
            "company occupation ."
            "company occupation button "
            "location published button"
            "location published button";
    }
    padding: ${(props) => props.theme.spaceS};
    background: ${(props) => props.theme.white};
    margin-bottom: ${(props) => props.theme.spaceXS};

    img {
        border: solid rgba(211, 211, 211, 0.86) 1px;
        width: 86px;
        height: 86px;
        border-radius: 100%;
    }
`

const Details = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    @media ${device.laptop} {
        font-size: 18px;
    }
`

const DetailsBold = styled(Details)`
    font-weight: bold;
`

const Label = styled(Details)`
    display: none;
    @media ${device.laptop} {
        display: flex;
        width: 100px;
        font-size: 14px;
    }
`

const JobTitle = styled(BaseLinkStyled)`
    grid-area: title;
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.primaryBlue};
    margin-bottom: ${(props) => props.theme.spaceXS};
    @media ${device.laptop} {
        font-size: 20px;
    }
`

const JobCompany = styled(DetailsBold)`
    grid-area: company;
`

const JobLocation = styled(Details)`
    grid-area: location;
`

const JobOccupation = styled(Details)`
    grid-area: occupation;
    display: none;
    @media ${device.laptop} {
        display: flex;
    }
`

const JobPublishedDate = styled(Details)`
    grid-area: published;
    display: none;
    @media ${device.laptop} {
        display: flex;
    }
`

const AddButton = styled(BaseButton)`
    grid-area: button;
    width: 100%;
    height: 40px;
    display: flex;
    align-self: flex-end;
    text-transform: uppercase;
`


const JobSuggestionsItem = ({suggestion}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()

    const handleAddNewJob = async (job) => {
        await dispatch(createSuggestedJobAction(job))
    }

    return (
        <JobSuggestionCardContainer key={suggestion.posting_id}>
            <JobTitle
                href={suggestion.url}
                rel="noopener noreferrer"
                target="_blank"
            >
                {suggestion.job_title}
            </JobTitle>
            <JobCompany>{suggestion.company_name}</JobCompany>
            <JobLocation>{suggestion.location}</JobLocation>
            <JobOccupation><Label>{t('jobs:occupation')}:</Label>&nbsp;{getI18nJobType(suggestion.occupation, t)}</JobOccupation>
            <JobPublishedDate><Label>{t('jobs:published')}:</Label>&nbsp;{convertToBirthDate(suggestion.date_published, 'DD.MM.YYYY')}</JobPublishedDate>
            <AddButton disabled={suggestion.tracked} onClick={() => handleAddNewJob(suggestion)}>{suggestion.tracked ? t('jobs:tracked') : t('common:add')}</AddButton>
        </JobSuggestionCardContainer>
    )
}

export default JobSuggestionsItem
