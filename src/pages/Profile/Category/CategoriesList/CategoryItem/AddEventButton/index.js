import React  from 'react'
import {useTranslation} from 'react-i18next'

import {BaseButton} from '../../../../../../style/buttons'
import {ExperienceButtonInfoBar} from '../../../../../../style/component-based/profile_experience'


const AddEventButton = ({setAdd}) => {
    const {t} = useTranslation()
    const addToggle = () => setAdd(prevAdd => !prevAdd)

    return (
        <ExperienceButtonInfoBar>
            <BaseButton onClick={addToggle}>
                {t('common:add')}
            </BaseButton>
        </ExperienceButtonInfoBar>
    )
}

export default AddEventButton
