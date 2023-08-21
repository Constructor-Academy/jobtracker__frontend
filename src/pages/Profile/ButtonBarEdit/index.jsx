import React from 'react'
import {useTranslation} from 'react-i18next'

import ButtonSpinner from '../../../components/ButtonSpinner'
import {BaseButton, BaseButtonInverted} from '../../../style/buttons'
import {ExperienceButtonBar, ExperienceButtonBarRight} from '../../../style/component-based/profile_experience'


const ButtonBarEdit = ({onToggleHandler, setShowDeleteConfirmation, showLoader}) => {
    const {t} = useTranslation()

    return (
        <ExperienceButtonBar>
            <BaseButtonInverted
                onClick={onToggleHandler}
                type="button"
            >
                {t('common:cancel')}
            </BaseButtonInverted>
            <ExperienceButtonBarRight>
                <BaseButtonInverted
                    onClick={
                        async () => {
                            setShowDeleteConfirmation(true)
                        }
                    }
                    type="button"
                >
                    {t('common:delete')}
                </BaseButtonInverted>
                <BaseButton type="submit">
                    {showLoader ? <ButtonSpinner /> : t('common:update')}
                </BaseButton>
            </ExperienceButtonBarRight>
        </ExperienceButtonBar>
    )
}

export default ButtonBarEdit
