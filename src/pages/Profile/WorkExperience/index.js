import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {
    ProfileCardContainer,
    ProfileCardHeaderWrapper,
    ProfileCardTitle,
} from '../../../style/component-based/profile'
import ButtonBarAdd from '../ButtonBarAdd'
import AddExperience from './AddExperience'
import WorkTile from './WorkTile'


const Work = ({user, editable}) => {
    const {t} = useTranslation()
    const [isAdding, setIsAdding] = useState(false)

    const addToggle = () => {
        setIsAdding(state => !state)
    }

    return (
        <ProfileCardContainer>
            <ProfileCardHeaderWrapper>
                <ProfileCardTitle>{t('profile:employment.title')}</ProfileCardTitle>
            </ProfileCardHeaderWrapper>
            {
                Boolean(Array.isArray(user.experiences) && user.experiences.length) && (
                    user.experiences.map((job) => (
                        <WorkTile
                            editable={editable}
                            jobData={job}
                            key={job.id}
                        />
                    ))
                )
            }

            {isAdding && <AddExperience addToggle={addToggle} />}
            {!isAdding && editable && <ButtonBarAdd onToggle={addToggle} />}
        </ProfileCardContainer>
    )
}

export default Work
