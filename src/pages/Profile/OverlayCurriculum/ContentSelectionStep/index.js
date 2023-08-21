import React from 'react'
import {useTranslation} from 'react-i18next'

import {
    BaseButtonInverted,
    BaseButton,
} from '../../../../style/buttons'
import {OverlayFooter} from '../../../../style/overlay'
import SettingsContent from '../SettingsContent'



const ContentSelectionStep = ({fnClose, setWizardStep}) => {
    const {t} = useTranslation()

    return (
        <>
            <SettingsContent />
            <OverlayFooter>
                <BaseButtonInverted onClick={fnClose}>
                    {t('common:cancel')}
                </BaseButtonInverted>
                <BaseButton onClick={() => setWizardStep(2)}>
                    {t('common:next')}
                </BaseButton>
            </OverlayFooter>
        </>
    )

}

export default ContentSelectionStep
