import React from 'react'
import styled from 'styled-components/macro'

import {
    ExperienceInstitutionWrapper,
    ExperienceLocation,
} from '../../../../../../style/component-based/profile_experience'

const EventInstitution = styled.h2`

`

const ExperienceLocationSpan = styled.span`
    color: ${(props) => props.theme.greyLight};
`

const ViewEventLocation = ({event}) => {
    const showLocation = () => Boolean(event.city || event.country)

    return (
        <ExperienceInstitutionWrapper>
            {
                event.institution && (
                    <EventInstitution>
                        {event.institution} &nbsp;
                    </EventInstitution>)
            }

            {
                showLocation() && (
                    <ExperienceLocation>
                        {event.city && <ExperienceLocationSpan>{event.city}</ExperienceLocationSpan>}
                        {event.city && event.country && <ExperienceLocationSpan>{', '}</ExperienceLocationSpan>}
                        {event.country && <ExperienceLocationSpan>{event.country}</ExperienceLocationSpan>}
                    </ExperienceLocation>)
            }
        </ExperienceInstitutionWrapper>
    )
}
export default ViewEventLocation
