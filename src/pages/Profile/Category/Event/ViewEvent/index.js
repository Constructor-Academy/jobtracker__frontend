import React, {useState, useEffect} from 'react'
import styled from 'styled-components/macro'

import {
    ExperienceContainer,
    ExperienceDescription,
} from '../../../../../style/component-based/profile_experience'
import {BaseLinkStyled} from '../../../../../style/links'
import ViewEventHeader from './ViewEventHeader'
import ViewEventLocation from './ViewEventLocation'

const EventLink = styled(BaseLinkStyled)``


const ViewEvent = ({eventData, editable, toggleEditMode}) => {
    const [event, setEvent] = useState(eventData)

    const showLocation = () => Boolean(event.institution || event.city || event.country)

    useEffect(() => {
        setEvent(eventData)
    }, [eventData])

    return (
        <ExperienceContainer>
            <ViewEventHeader editable={editable} event={event} toggleEditMode={toggleEditMode} />

            {showLocation() && <ViewEventLocation event={event} />}

            <ExperienceDescription>{event.description}</ExperienceDescription>

            <EventLink>{event.link}</EventLink>
        </ExperienceContainer>
    )
}
export default ViewEvent
