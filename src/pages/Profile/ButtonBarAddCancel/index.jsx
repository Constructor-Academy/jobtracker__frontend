import React from 'react'
import {useTranslation} from 'react-i18next'

import ButtonSpinner from '../../../components/ButtonSpinner'
import {BaseButton, BaseButtonInverted} from '../../../style/buttons'
import {ExperienceButtonBar} from '../../../style/component-based/profile_experience'


const ButtonBarAddCancel = ({onToggleHandler, isLoading}) => {
    const {t} = useTranslation()

    return (
        <ExperienceButtonBar>
            <BaseButtonInverted onClick={onToggleHandler} type="button">
                {t('common:cancel')}
            </BaseButtonInverted>
            <BaseButton type="submit">
                {isLoading ? <ButtonSpinner /> : t('common:add')}
            </BaseButton>
        </ExperienceButtonBar>
    )
}

export default ButtonBarAddCancel
