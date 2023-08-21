import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {BeatLoader} from 'react-spinners'

import {useResetErrors} from '../../hooks'
import {bookletDownloadAction} from '../../store/actions/bookletAction'
import {BaseButton} from '../../style/buttons'
import {
    BasePageContainerStyled,
    PageContentsContainerDefault,
} from '../../style/containers'
import {BaseFormStyled, FormFieldWrapperDefault} from '../../style/forms'
import {BaseInputStyled} from '../../style/inputs'
import {ErrorMessage} from '../../style/messages'
import {InputTitle, PageTitle} from '../../style/titles'


const Booklet = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [emails, setEmails] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    useResetErrors()

    const onSubmitHandler = async e => {
        e.preventDefault()
        setIsLoading(true)
        const success = await dispatch(bookletDownloadAction(title, emails))
        if (success) {
            setTitle('')
            setEmails('')
        }
        setIsLoading(false)
    }

    return (
        <BasePageContainerStyled>
            <PageContentsContainerDefault>
                <PageTitle>{t('booklet:title')}</PageTitle>
                <BaseFormStyled onSubmit={onSubmitHandler}>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('booklet:form.title.label')}</InputTitle>
                        <BaseInputStyled
                            maxLength="20"
                            onChange={e => setTitle(e.target.value)}
                            placeholder={t('booklet:form.title.placeholder')}
                            required
                            type="text"
                            value={title}
                        />
                        {error && <ErrorMessage>{error.title}</ErrorMessage>}
                    </FormFieldWrapperDefault>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('booklet:form.emails.label')}</InputTitle>
                        <BaseInputStyled
                            maxLength="1000"
                            onChange={e => setEmails(e.target.value)}
                            placeholder={t('booklet:form.emails.placeholder')}
                            required
                            type="text"
                            value={emails}
                        />
                        {error && <ErrorMessage>{error.students}</ErrorMessage>}
                    </FormFieldWrapperDefault>
                    {error && <ErrorMessage>{error.non_field_errors}</ErrorMessage>}
                    {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                    <BaseButton disabled={isLoading} type="submit">{isLoading ? <BeatLoader color='#fff' size={15} /> : t('booklet:download_btn')}</BaseButton>
                </BaseFormStyled>
            </PageContentsContainerDefault>
        </BasePageContainerStyled>
    )
}

export default Booklet
