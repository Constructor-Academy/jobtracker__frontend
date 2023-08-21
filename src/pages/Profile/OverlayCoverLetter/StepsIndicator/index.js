import React, {Fragment} from 'react'
import {useTranslation} from 'react-i18next'

import {
    OverlayStepper,
    OverlayStepperItem,
    OverlayStepperItemText,
    OverlayStepperLine,
} from '../../../../style/overlay'


const StepsIndicator = ({steps, wizardStep}) => {
    const {t} = useTranslation()

    return (
        <OverlayStepper>
            {
                steps.map(step => {
                    return (
                        <Fragment key={step.id}>
                            <OverlayStepperItem isActive={wizardStep === step.id}>
                                {step.id}
                                <OverlayStepperItemText isActive={wizardStep === step.id}>
                                    {t(step.name)}
                                </OverlayStepperItemText>
                            </OverlayStepperItem>
                            {step.id !== (steps.length) && <OverlayStepperLine />}
                        </Fragment>
                    )
                })
            }
        </OverlayStepper>
    )
}

export default StepsIndicator
