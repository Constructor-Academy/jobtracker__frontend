import moment from 'moment'
import React, {useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import Select from 'react-select'

import PopUpMessages from '../../../components/PopUpMessages'
import {getI18nJobSectors} from '../../../helpers/i18n'
import {setJobsAction} from '../../../store/actions/jobAction'
import {addMessage} from '../../../store/actions/messageAction'
import {BaseButtonInverted, BaseButton} from '../../../style/buttons'
import {FormFieldWrapperDefault, InputRow} from '../../../style/forms'
import {BaseInputStyled, InputTextArea} from '../../../style/inputs'
import {
    OverlayBackground,
    OverlayTitle,
    OverlayContent,
    OverlayFooter,
    OverlayContainerForm,
} from '../../../style/overlay'
import {InputTitle} from '../../../style/titles'


const NewJobForm = ({setShowNewJobForm}) => {
    let url = useRef('')
    let title = useRef('')
    let company = useRef('')
    let contact = useRef('')
    let category = useRef('')
    let description = useRef('')
    let notes = useRef('')
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const sectors = getI18nJobSectors(t)

    const messages = useSelector(state => state.messageReducer)
    const jobs = useSelector(state => state.jobsReducer.jobs)
    const displayedUser = useSelector(state => state.jobsReducer.displayedUser)
    const user = useSelector(state => state.userLoginReducer.user)

    const handleNewJobSubmit = async (e) => {
        e.preventDefault()
        if(!url.current.value){
            dispatch(addMessage({'detail': t('dashboard:errors.url')}))
            return
        }
        if(!title.current.value){
            dispatch(addMessage({'detail': t('dashboard:errors.title')}))
            return
        }
        if(!company.current.value){
            dispatch(addMessage({'detail': t('dashboard:errors.company')}))
            return
        }

        let job = {
            url: url.current.value,
            title: title.current.value,
            description: description.current.value,
            category: category.current.state.value.value,
            company: company.current.value,
            contact: contact.current.value,
            notes: notes.current.value,
            created: moment().utc(),
        }
        job.index = jobs.WH.length
        job.user = user.is_admin ? displayedUser.id : user.id
        if (job.url) {
            job.url = job.url.includes('http') ? job.url : 'https://' + job.url
        }
        let payload = {
            WH: [...jobs.WH, job],
            AP: jobs.AP,
            IN: jobs.IN,
            OF: jobs.OF,
            AC: jobs.AC,
            RJ: jobs.RJ,
        }
        await dispatch(setJobsAction(payload))
        setShowNewJobForm(false)
    }

    const handleBackgroundClick = (event) => {
        if (event.target.id === 'overlay-background') {
            setShowNewJobForm(false)
        }
    }

    return (
        <OverlayBackground id='overlay-background' onClick={(e) => { handleBackgroundClick(e)}}>
            <OverlayContainerForm>
                <OverlayTitle>{t('dashboard:jobs.create')}</OverlayTitle>
                <OverlayContent>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('dashboard:jobs.fields.url_label')}</InputTitle>
                        <BaseInputStyled
                            name="url"
                            placeholder={t('dashboard:jobs.fields.url_placeholder')}
                            ref={url}
                            type="text"
                        />
                    </FormFieldWrapperDefault>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('dashboard:jobs.fields.title_label')}</InputTitle>
                        <BaseInputStyled
                            name="title"
                            placeholder={t('dashboard:jobs.fields.title_placeholder')}
                            ref={title}
                            type="text"
                        />
                    </FormFieldWrapperDefault>
                    <InputRow>
                        <FormFieldWrapperDefault>
                            <InputTitle>{t('dashboard:jobs.fields.company_label')}</InputTitle>
                            <BaseInputStyled
                                name="company"
                                placeholder={t('dashboard:jobs.fields.company_placeholder')}
                                ref={company}
                                type="text"
                            />
                        </FormFieldWrapperDefault>
                        <FormFieldWrapperDefault>
                            <InputTitle>{t('dashboard:jobs.fields.contact_label')}</InputTitle>
                            <BaseInputStyled
                                name="contact"
                                placeholder={t('dashboard:jobs.fields.contact_placeholder')}
                                ref={contact}
                                type="text"
                            />
                        </FormFieldWrapperDefault>
                    </InputRow>
                    <FormFieldWrapperDefault>
                        <InputTitle marginBottom>{t('dashboard:jobs.fields.industry_label')}</InputTitle>
                        <Select
                            defaultValue={
                                {
                                    label: t('dashboard:jobs.industries.others'),
                                    value: 'Others',
                                }
                            }
                            name="category"
                            options={
                                sectors.map((sector) => {
                                    return {
                                        value: sector.value,
                                        label: sector.label,
                                    }
                                })
                            }
                            ref={category}
                        />
                    </FormFieldWrapperDefault>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('dashboard:jobs.fields.description_label')}</InputTitle>
                        <InputTextArea
                            name="description"
                            placeholder={t('dashboard:jobs.fields.description_placeholder')}
                            ref={description}
                            type="text"
                        />
                    </FormFieldWrapperDefault>
                    <FormFieldWrapperDefault noMargin>
                        <InputTitle>{t('dashboard:jobs.fields.notes_label')}</InputTitle>
                        <InputTextArea
                            name="notes"
                            placeholder={t('dashboard:jobs.fields.notes_placeholder')}
                            ref={notes}
                            type="text"
                        />
                    </FormFieldWrapperDefault>
                </OverlayContent>
                <OverlayFooter>
                    <BaseButtonInverted
                        onClick={() => setShowNewJobForm(false)}
                    >
                        {t('dashboard:jobs.buttons.cancel')}
                    </BaseButtonInverted>
                    <BaseButton onClick={(e) => handleNewJobSubmit(e)}>
                        {t('dashboard:jobs.buttons.add')}
                    </BaseButton>
                </OverlayFooter>
            </OverlayContainerForm>
            {messages && <PopUpMessages messages={messages} />}
        </OverlayBackground>
    )
}

export default NewJobForm
