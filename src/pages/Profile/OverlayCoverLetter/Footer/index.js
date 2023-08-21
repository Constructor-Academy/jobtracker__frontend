import React from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import CoverLetter from '../../../../pdf-templates/Coverletter'
import {setPdfSourceAction} from '../../../../store/actions/pdfGeneratorAction'
import {BaseButton, BaseButtonInverted, DownloadButton} from '../../../../style/buttons'
import {OverlayFooter, OverlayFooterGroup} from '../../../../style/overlay'


const Footer = ({job, applicationData, fontColor, mainColor, steps, templateId, wizardStep, setWizardStep, cancelCloseHandler, saveCloseHandler, saveSignatureNextStepHandler}) => {
    const {t} = useTranslation()
    const user = useSelector(state => state.userLoginReducer.user)
    const lastStep = steps.length
    const dispatch = useDispatch()

    const nextStepHandler = () => {
        if (wizardStep === 4) {
            return saveSignatureNextStepHandler()
        } else {
            return setWizardStep(wizardStep + 1)
        }
    }

    return (
        <OverlayFooter>
            {
                wizardStep === 1 ?
                    <BaseButtonInverted onClick={cancelCloseHandler}>{t('common:cancel')}</BaseButtonInverted> :
                    <BaseButtonInverted onClick={() => setWizardStep(wizardStep - 1)}>{t('common:back')}</BaseButtonInverted>
            }

            {
                wizardStep === lastStep ?
                    <OverlayFooterGroup>
                        <BaseButtonInverted onClick={saveCloseHandler}>{t('common:close')}</BaseButtonInverted>
                        <DownloadButton
                            document={
                                <CoverLetter
                                    application={applicationData}
                                    company={job.company}
                                    contact={job.contact}
                                    fontColor={fontColor}
                                    job={job}
                                    mainColor={mainColor}
                                    templateId={templateId}
                                    user={user}
                                />
                            }
                            fileName={`coverletter_${job.title.toLowerCase()}_${user.first_name.toLowerCase()}_${user.last_name.toLowerCase()}.pdf`}
                        >
                            {
                                ({blob, url, loading, error}) => {
                                    dispatch(setPdfSourceAction(url))
                                    return loading
                                        ? t('profile:pdf_gen.loading')
                                        : t('profile:pdf_gen.download')
                                }
                            }
                        </DownloadButton>
                    </OverlayFooterGroup> :
                    <OverlayFooterGroup>
                        <BaseButtonInverted onClick={saveCloseHandler}>{t('common:close')}</BaseButtonInverted>
                        <BaseButton onClick={nextStepHandler}>{t('common:next')}</BaseButton>
                    </OverlayFooterGroup>
            }
        </OverlayFooter>
    )
}

export default Footer


