import React from 'react'
import {useTranslation} from 'react-i18next'

import CountryDropdown from '../../../../../components/CountryDropdown'
import {
    FormFieldWrapperCentered,
    FormFieldWrapperDefault,
    InputCounter,
    InputRowDate
} from '../../../../../style/forms'
import {BaseInputStyled, InputTextArea} from '../../../../../style/inputs'
import {ErrorMessageContainer} from '../../../../../style/messages'
import {InputTitle} from '../../../../../style/titles'
import {CheckboxLabelWrapperProfile} from '../../../../../style/wrappers'


const EventForm = ({
    descriptionMaxLength,
    title,
    setTitle,
    institution,
    setInstitution,
    city,
    setCity,
    country,
    setCountry,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    present,
    setPresent,
    description,
    setDescription,
    link,
    setLink,
    wordCount,
    setWordCount,
    onSubmitHandler,
    error,
    children,
}) => {
    const {t} = useTranslation()

    const checkboxHandler = (e) => {
        setPresent(e.target.checked)
        setEndDate('')
    }

    const onDescriptionHandler = (e) => {
        setDescription(e.target.value)
        const value = e.target.value.length
        setWordCount(descriptionMaxLength - value)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:event.title')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setTitle(e.target.value)}
                    required
                    type="text"
                    value={title}
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:event.where')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setInstitution(e.target.value)}
                    value={institution}
                />
            </FormFieldWrapperDefault>
            <InputRowDate>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('profile:shared.start_date')}</InputTitle>
                    <BaseInputStyled
                        name="start_date"
                        onChange={e => setStartDate(e.target.value)}
                        type="date"
                        value={startDate}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('profile:shared.end_date')}</InputTitle>
                    <BaseInputStyled
                        disabled={present}
                        name="end_date"
                        onChange={e => setEndDate(e.target.value)}
                        type="date"
                        value={endDate}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperCentered>
                    <InputTitle>{t('profile:shared.present')}</InputTitle>
                    <CheckboxLabelWrapperProfile>
                        <input
                            checked={present}
                            onChange={checkboxHandler}
                            type="checkbox"
                        />
                    </CheckboxLabelWrapperProfile>
                </FormFieldWrapperCentered>
            </InputRowDate>
            <CountryDropdown onChangeHandler={(e) => setCountry(e.value)} value={country} />
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:shared.city')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setCity(e.target.value)}
                    spellcheck="true"
                    type="text"
                    value={city}
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:event.link.label')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setLink(e.target.value)}
                    placeholder={t('profile:event.link.placeholder')}
                    type="url"
                    value={link}
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:shared.description')}</InputTitle>
                <InputTextArea
                    maxLength={descriptionMaxLength}
                    onChange={onDescriptionHandler}
                    spellcheck="true"
                    value={description}
                />
                <InputCounter>{wordCount}</InputCounter>
            </FormFieldWrapperDefault>
            {
                error && (
                    <ErrorMessageContainer>{error}</ErrorMessageContainer>
                )
            }
            {children}
        </form>
    )
}

export default EventForm
