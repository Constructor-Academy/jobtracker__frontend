import React from 'react'
import {useTranslation} from 'react-i18next'

import {convertToMonthAndDate} from '../../../../helpers'
import {ProfileEditIconButton} from '../../../../style/buttons'
import {
    ExperienceContainer,
    ExperienceTitleWrapper,
    ExperienceDuration,
    ExperienceTitle,
    ExperienceInstitutionWrapper,
    ExperienceInstitution,
    ExperienceLocation,
    ExperienceDescription,
    ExperienceHeaderWrapper,
} from '../../../../style/component-based/profile_experience'


const ViewEducation = ({educationData, editable, toggleEditMode}) => {
    const {t} = useTranslation()

    return (
        <ExperienceContainer>
            <ExperienceHeaderWrapper>
                <ExperienceTitleWrapper>
                    <ExperienceDuration>
                        {convertToMonthAndDate(educationData.start_date)}
                        {' - '}
                        {convertToMonthAndDate(educationData.end_date)}
                    </ExperienceDuration>
                    <ExperienceTitle>
                        {educationData.education_title}
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
                    href={educationData.webpage !== '' ? educationData.webpage : null}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {educationData.institute}
                </ExperienceInstitution>
                <ExperienceLocation>
                    ({educationData.city}, {educationData.country})
                </ExperienceLocation>
            </ExperienceInstitutionWrapper>

            <ExperienceDescription>
                {educationData.description}
            </ExperienceDescription>
        </ExperienceContainer>
    )
}
export default ViewEducation
