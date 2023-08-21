import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector, useDispatch} from 'react-redux'
import Select from 'react-select'

import PopUpMessages from '../../../../../components/PopUpMessages'
import {formatLink} from '../../../../../helpers'
import {getI18nJobSector, getI18nJobSectors} from '../../../../../helpers/i18n'
import {useResetErrors} from '../../../../../hooks'
import {updateJobAction} from '../../../../../store/actions/jobAction'
import {addMessage} from '../../../../../store/actions/messageAction'
import {BaseButtonInverted, BaseButton} from '../../../../../style/buttons'
import {FormFieldWrapperDefault, InputRow} from '../../../../../style/forms'
import {BaseInputStyled, InputTextArea} from '../../../../../style/inputs'
import {ErrorMessage, ErrorMessageContainer} from '../../../../../style/messages'
import {
    OverlayContent,
    OverlayFooter,
    OverlayTitle,
} from '../../../../../style/overlay'
import {InputTitle} from '../../../../../style/titles'


const EditJob = ({job, closeEdit}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    useResetErrors()

    const [url, setUrl] = useState(job.url)
    const [title, setTitle] = useState(job.title)
    const [company, setCompany] = useState(job.company)
    const [contact, setContact] = useState(job.contact)
    const [category, setCategory] = useState(job.category)
    const [description, setDescription] = useState(job.description)
    const [notes, setNotes] = useState(job.notes)
    const messages = useSelector((state) => state.messageReducer)
    const {t} = useTranslation()
    const sectors = getI18nJobSectors(t)

    const handleEditJobSubmit = async (e) => {
        e.preventDefault()
        if(!url){
            dispatch(addMessage({'detail': t('dashboard:errors.url')}))
            return
        }
        if(!title){
            dispatch(addMessage({'detail': t('dashboard:errors.title')}))
            return
        }
        if(!company){
            dispatch(addMessage({'detail': t('dashboard:errors.company')}))
            return
        }
        const newJob = {
            ...job,
            url: formatLink(url),
            title: title,
            description: description,
            company: company,
            contact: contact,
            category: category,
            notes: notes,
        }

        const success = await dispatch(updateJobAction(newJob))
        if (success) closeEdit()
    }

    const i18nJobCategory = getI18nJobSector(job.category, t)

    return (
        <>
            <OverlayTitle>{t('dashboard:jobs.edit')}</OverlayTitle>
            <OverlayContent>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('dashboard:jobs.fields.url_label')}</InputTitle>
                    <BaseInputStyled
                        defaultValue={job.url}
                        name="url"
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder={t('dashboard:jobs.fields.url_placeholder')}
                        type="text"
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('dashboard:jobs.fields.title_label')}</InputTitle>
                    <BaseInputStyled
                        defaultValue={job.title}
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={t('dashboard:jobs.fields.title_placeholder')}
                        type="text"
                    />
                </FormFieldWrapperDefault>
                <InputRow>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('dashboard:jobs.fields.company_label')}</InputTitle>
                        <BaseInputStyled
                            defaultValue={job.company}
                            name="company"
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder={t('dashboard:jobs.fields.company_placeholder')}
                            type="text"
                        />
                    </FormFieldWrapperDefault>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('dashboard:jobs.fields.contact_label')}</InputTitle>
                        <BaseInputStyled
                            defaultValue={job.contact}
                            maxLength={50}
                            name="contact"
                            onChange={(e) => setContact(e.target.value)}
                            placeholder={t('dashboard:jobs.fields.contact_placeholder')}
                            type="text"
                        />
                    </FormFieldWrapperDefault>
                </InputRow>
                <FormFieldWrapperDefault>
                    <InputTitle marginBottom>{t('dashboard:jobs.fields.industry_label')}</InputTitle>
                    <Select
                        defaultValue={
                            {
                                label: i18nJobCategory.label,
                                value: i18nJobCategory.value,
                            }
                        }
                        name="category"
                        onChange={e => setCategory(e.value)}
                        options={
                            sectors.map(sector => {
                                return {
                                    value: sector.value,
                                    label: sector.label,
                                }
                            })
                        }
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('dashboard:jobs.fields.description_label')}</InputTitle>
                    <InputTextArea
                        defaultValue={job.description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={t('dashboard:jobs.fields.description_placeholder')}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('dashboard:jobs.fields.notes_label')}</InputTitle>
                    <InputTextArea
                        defaultValue={job.notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={t('dashboard:jobs.fields.notes_placeholder')}
                    />
                </FormFieldWrapperDefault>
                {
                    error && (
                        <ErrorMessageContainer>
                            {
                                Object.keys(error).map(el => {
                                    return <ErrorMessage key={el}>{`${el}: ${error[el]}`}</ErrorMessage>
                                })
                            }
                        </ErrorMessageContainer>
                    )
                }
            </OverlayContent>
            <OverlayFooter>
                <BaseButtonInverted onClick={closeEdit}>
                    {t('dashboard:jobs.buttons.cancel')}
                </BaseButtonInverted>
                <BaseButton onClick={handleEditJobSubmit}>{t('dashboard:jobs.buttons.update')}</BaseButton>
            </OverlayFooter>
            {messages && <PopUpMessages messages={messages} />}
        </>
    )
}

export default EditJob
