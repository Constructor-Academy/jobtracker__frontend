import React from 'react'
import styled from 'styled-components/macro'

import {device as devices} from '../../../style/devices'
import JobSuggestionsItem from './JobSuggestionsItem'


export const JobSuggestionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${devices.mobileL} {
        justify-items: center;
        overflow-x: scroll;
    }
`


const JobSuggestionsList = ({jobsSuggestions}) => {
    return (
        <JobSuggestionContainer>
            {
                jobsSuggestions.map((suggestion, i) => {
                    return (
                    // eslint-disable-next-line react/no-array-index-key
                        <JobSuggestionsItem key={`${suggestion.url}${i}`} suggestion={suggestion} />)
                })
            }
        </JobSuggestionContainer>
    )
}

export default JobSuggestionsList
