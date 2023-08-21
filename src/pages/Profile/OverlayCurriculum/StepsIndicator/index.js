import React from 'react'
import {useTranslation} from 'react-i18next'

import {
    OverlayStepper,
    OverlayStepperItem,
    OverlayStepperItemText,
    OverlayStepperLine,
    OverlayCloseButton,
} from '../../../../style/overlay'


const StepsIndicator = ({fnClose, wizardStep}) => {
    const {t} = useTranslation()

    return (
        <>
            {
                wizardStep === 2 && (
                    <OverlayCloseButton onClick={fnClose} title="Close">
                        ×
                    </OverlayCloseButton>
                )
            }
            <OverlayStepper>
                <OverlayStepperItem isActive={wizardStep === 1}>
                    1
                    <OverlayStepperItemText isActive={wizardStep === 1}>
                        {t('profile:cv_gen.content.title')}
                    </OverlayStepperItemText>
                </OverlayStepperItem>
                <OverlayStepperLine />
                <OverlayStepperItem isActive={wizardStep === 2}>
                    2
                    <OverlayStepperItemText isActive={wizardStep === 2}>
                        {t('profile:pdf_styling.title')}
                    </OverlayStepperItemText>
                </OverlayStepperItem>
            </OverlayStepper>
        </>
    )
}

export default StepsIndicator
