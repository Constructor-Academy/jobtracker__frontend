import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {
    ProfileCardContainer,
    ProfileCardHeaderWrapper,
    ProfileCardTitle,
} from '../../../style/component-based/profile'
import ButtonBarAdd from '../ButtonBarAdd'
import AddEducation from './AddEducation'
import EducationTile from './EducationTile'


const Education = ({editable, user}) => {
    const {t} = useTranslation()
    const [isAdding, setIsAdding] = useState(false)

    const addToggle = () => {
        setIsAdding(state => !state)
    }

    return (
        <ProfileCardContainer>
            <ProfileCardHeaderWrapper>
                <ProfileCardTitle>{t('profile:education.title')}</ProfileCardTitle>
            </ProfileCardHeaderWrapper>
            {
                (Boolean(Array.isArray(user.educations) && user.educations.length)) && (
                    user.educations.map((education) => (
                        <EducationTile
                            editable={editable}
                            educationData={education}
                            key={education.id}
                        />
                    ))
                )
            }

            {isAdding && <AddEducation addToggle={addToggle} />}
            {!isAdding && editable && <ButtonBarAdd onToggle={addToggle} />}
        </ProfileCardContainer>
    )
}

export default Education
