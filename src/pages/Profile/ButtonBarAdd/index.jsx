import React from 'react'
import {useTranslation} from 'react-i18next'

import {BaseButton} from '../../../style/buttons'
import {ExperienceButtonInfoBar} from '../../../style/component-based/profile_experience'


const ButtonBarAdd = ({onToggle}) => {
    const {t} = useTranslation()

    return (
        <ExperienceButtonInfoBar>
            <BaseButton onClick={onToggle}>
                {t('common:add')}
            </BaseButton>
        </ExperienceButtonInfoBar>
    )
}

export default ButtonBarAdd
