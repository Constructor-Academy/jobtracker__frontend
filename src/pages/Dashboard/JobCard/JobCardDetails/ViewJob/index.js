import React from 'react'
import {useTranslation} from 'react-i18next'

import {getJobIcon} from '../../../../../helpers'
import {getI18nJobSector} from '../../../../../helpers/i18n'
import {BaseButtonInverted, BaseButton} from '../../../../../style/buttons'
import {JobIconInline} from '../../../../../style/component-based/job'
import {
    ProfileCardParagraph,
    ProfileCardLink,
} from '../../../../../style/component-based/profile'
import {InputRow, FormFieldWrapperDisplay} from '../../../../../style/forms'
import {
    OverlayContent,
    OverlayFooter,
    OverlayFooterGroup,
    OverlayTitle,
    OverlayCloseButton,
} from '../../../../../style/overlay'
import {InputTitle} from '../../../../../style/titles'


const ViewJob = ({job, closeOverlay, openEdit, deleteJob, showCoverletter}) => {
    const {t}=useTranslation()

    return (
        <>
            <OverlayCloseButton onClick={closeOverlay}>
                ×
            </OverlayCloseButton>
            <OverlayContent>
                <OverlayTitle>{job.title}</OverlayTitle>
                <InputTitle>{t('dashboard:jobs.fields.url')}</InputTitle>
                <ProfileCardLink
                    href={job.url}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {job.url}
                </ProfileCardLink>
                <InputRow>
                    <FormFieldWrapperDisplay>
                        <InputTitle>{t('dashboard:jobs.fields.company')}</InputTitle>
                        <ProfileCardParagraph>
                            {job.company}
                        </ProfileCardParagraph>
                    </FormFieldWrapperDisplay>
                    <FormFieldWrapperDisplay>
                        <InputTitle>{t('dashboard:jobs.fields.contact_label')}</InputTitle>
                        <ProfileCardParagraph>
                            {job.contact || '-'}
                        </ProfileCardParagraph>
                    </FormFieldWrapperDisplay>
                </InputRow>
                <InputTitle>{t('dashboard:jobs.fields.industry_label')}</InputTitle>
                <ProfileCardParagraph>
                    <JobIconInline src={getJobIcon(job.category)} />
                    {getI18nJobSector(job.category, t).label}
                </ProfileCardParagraph>
                <InputTitle>{t('dashboard:jobs.fields.description_label')}</InputTitle>
                <ProfileCardParagraph>
                    {job.description || '-'}
                </ProfileCardParagraph>
                <InputTitle>{t('dashboard:jobs.fields.notes_label')}</InputTitle>
                <ProfileCardParagraph>{job.notes || '-'}</ProfileCardParagraph>
            </OverlayContent>
            <OverlayFooter>
                <OverlayFooterGroup>
                    <BaseButtonInverted onClick={openEdit}>
                        {t('dashboard:jobs.buttons.edit')}
                    </BaseButtonInverted>
                    <BaseButtonInverted onClick={deleteJob}>
                        {t('dashboard:jobs.buttons.delete')}
                    </BaseButtonInverted>
                </OverlayFooterGroup>
                <BaseButton
                    onClick={
                        () => {
                            showCoverletter()
                            closeOverlay()
                        }
                    }
                >
                    {t('dashboard:jobs.cover_letter')}
                </BaseButton>
            </OverlayFooter>
        </>
    )
}

export default ViewJob
