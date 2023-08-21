import React from 'react'
import {useTranslation} from 'react-i18next'
import Select from 'react-select'

import {BaseButtonInverted, BaseButton} from '../../../style/buttons'
import {FormFieldWrapperDefault} from '../../../style/forms'
import {
    OverlayBackground,
    OverlayContainerDialog,
    OverlayFooter,
    OverlayContentOverflow,
    OverlayTitle,
} from '../../../style/overlay'
import {InputTitle} from '../../../style/titles'


const OverlayJobSelector = ({jobs, selectedJob, setSelectedJob, fnClose, showCoverletter}) => {
    const {t} = useTranslation()

    const handleBackgroundClick = (event) => {
        if (event.target.id === 'overlay-background') {
            fnClose(false)
        }
    }
    return (
        <OverlayBackground id='overlay-background' onClick={(e) => { handleBackgroundClick(e) }}>
            <OverlayContainerDialog>
                <OverlayTitle>{t('profile:letter_gen.job_select.title')}</OverlayTitle>

                <OverlayContentOverflow>
                    <FormFieldWrapperDefault noMargin>
                        <InputTitle marginBottom>
                            {t('profile:letter_gen.job_select.jobs')}
                        </InputTitle>
                        <Select
                            onChange={
                                (e) => {
                                    setSelectedJob(e.value)
                                }
                            }
                            options={
                                jobs.map((job) => {
                                    return {
                                        value: job,
                                        label: `${job.company} - ${job.title}`,
                                    }
                                })
                            }
                            placeholder={t('common:select')}
                        />
                    </FormFieldWrapperDefault>
                </OverlayContentOverflow>

                <OverlayFooter>
                    <BaseButtonInverted onClick={fnClose}>
                        {t('common:cancel')}
                    </BaseButtonInverted>
                    <BaseButton
                        disabled={!selectedJob}
                        onClick={
                            () => {
                                fnClose()
                                showCoverletter()
                            }
                        }
                    >
                        {t('common:generate')}
                    </BaseButton>
                </OverlayFooter>
            </OverlayContainerDialog>
        </OverlayBackground>
    )
}

export default OverlayJobSelector
