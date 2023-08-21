import React from 'react'
import {useTranslation} from 'react-i18next'

import {convertToMonthAndDate} from '../../../../../../helpers'
import {ProfileEditIconButton} from '../../../../../../style/buttons'
import {
    ExperienceTitleWrapper,
    ExperienceDuration,
    ExperienceTitle,
    ExperienceHeaderWrapper,
} from '../../../../../../style/component-based/profile_experience'



const ViewEventHeader = ({event, editable, toggleEditMode}) => {
    const {t} = useTranslation()
    const showDuration = () => Boolean(event.start_date || event.end_date)

    const getDuration = (startDate, endDate) => {
        let result = ''
        if (startDate) {
            result += `${convertToMonthAndDate(startDate)} - ${convertToMonthAndDate(endDate)}`
        }
        return result
    }

    return (
        <ExperienceHeaderWrapper>
            <ExperienceTitleWrapper>
                {
                    showDuration() && (
                        <ExperienceDuration>
                            {getDuration(event.start_date, event.end_date)}
                        </ExperienceDuration>)
                }

                {event.title && <ExperienceTitle>{event.title}</ExperienceTitle>}
            </ExperienceTitleWrapper>

            {
                editable && (
                    <ProfileEditIconButton
                        onClick={toggleEditMode}
                        title={t('profile:event.edit')}
                    />)
            }
        </ExperienceHeaderWrapper>
    )
}
export default ViewEventHeader
