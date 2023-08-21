import moment from 'moment'
import React from 'react'
import {useTranslation} from 'react-i18next'

import {convertToMonthAndDate} from '../../../../helpers'
import {ProfileEditIconButton} from '../../../../style/buttons'
import {
    ExperienceContainer,
    ExperienceTitleWrapper,
    ExperienceDuration,
    ExperienceInstitution,
    ExperienceInstitutionWrapper,
    ExperienceDescription,
    ExperienceLocation,
    ExperienceTitle,
    ExperienceHeaderWrapper,
} from '../../../../style/component-based/profile_experience'


const ViewExperience = ({jobData, editable, toggleEditMode}) => {
    const {t, i18n} = useTranslation()
    moment.locale(i18n.language)

    return (
        <ExperienceContainer>
            <ExperienceHeaderWrapper>
                <ExperienceTitleWrapper>
                    <ExperienceDuration>
                        {convertToMonthAndDate(jobData.start_date)}
                        {' - '}
                        {convertToMonthAndDate(jobData.end_date)}
                    </ExperienceDuration>
                    <ExperienceTitle>
                        {jobData.job_title}
                    </ExperienceTitle>
                </ExperienceTitleWrapper>
                {
                    editable && (
                        <ProfileEditIconButton
                            onClick={toggleEditMode}
                            title={t('profile:employment.edit')}
                        />
                    )
                }
            </ExperienceHeaderWrapper>
            <ExperienceInstitutionWrapper>
                <ExperienceInstitution
                    href={jobData.webpage !== '' ? jobData.webpage : null}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {jobData.employer}
                </ExperienceInstitution>
                <ExperienceLocation>
                    ({jobData.city}, {jobData.country})
                </ExperienceLocation>
            </ExperienceInstitutionWrapper>
            <ExperienceDescription>
                {jobData.description}
            </ExperienceDescription>
        </ExperienceContainer>
    )
}

export default ViewExperience
