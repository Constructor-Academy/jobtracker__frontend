import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import CountryDropdown from '../../../../components/CountryDropdown'
import {useI18nNativeInputErrorTooltips} from '../../../../hooks'
import {FormFieldWrapperCentered, FormFieldWrapperDefault, InputCounter, InputRowDate} from '../../../../style/forms'
import {BaseInputStyled, InputTextArea} from '../../../../style/inputs'
import {ErrorMessageContainer} from '../../../../style/messages'
import {InputTitle} from '../../../../style/titles'
import {CheckboxLabelWrapperProfile} from '../../../../style/wrappers'


const WorkExperienceForm = ({
    onSubmitHandler,
    job_title,
    setJobTitle,
    employer,
    setEmployer,
    start_date,
    setStartDate,
    end_date,
    setEndDate,
    checkbox,
    setCheckbox,
    country,
    setCountry,
    city,
    setCity,
    website,
    setWebsite,
    description,
    setDescription,
    error,
    children
}) => {
    const {t} = useTranslation()
    const [wordCount, setWordCount] = useState(400)
    useI18nNativeInputErrorTooltips()

    const setCheckboxHandler = (e) => {
        setCheckbox(e.target.checked)
        setEndDate('')
    }

    const onDescriptionHandler = (e) => {
        setDescription(e.target.value.substring(0, 400))
        setWordCount(400 - e.target.value.substring(0, 400).length)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:employment.job_title.label')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setJobTitle(e.target.value)}
                    placeholder={t('profile:employment.job_title.placeholder')}
                    required
                    value={job_title}
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:employment.employer.label')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setEmployer(e.target.value)}
                    placeholder={t('profile:employment.employer.placeholder')}
                    required
                    value={employer}
                />
            </FormFieldWrapperDefault>
            <InputRowDate>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('profile:shared.start_date')}</InputTitle>
                    <BaseInputStyled
                        name="start date"
                        onChange={e => setStartDate(e.target.value)}
                        required
                        type="date"
                        value={start_date}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('profile:shared.end_date')}</InputTitle>
                    <BaseInputStyled
                        disabled={checkbox ? 'disabled' : ''}
                        name="end date"
                        onChange={e => setEndDate(e.target.value)}
                        required
                        type="date"
                        value={end_date}
                    />
                </FormFieldWrapperDefault>
                <FormFieldWrapperCentered>
                    <InputTitle>{t('profile:shared.present')}</InputTitle>
                    <CheckboxLabelWrapperProfile>
                        <input
                            checked={checkbox}
                            onChange={setCheckboxHandler}
                            type="checkbox"
                        />
                    </CheckboxLabelWrapperProfile>
                </FormFieldWrapperCentered>
            </InputRowDate>
            <CountryDropdown
                onChangeHandler={(e) => setCountry(e.value)}
                placeholder={t('profile:employment.country_placeholder')}
                required
                value={country}
            />
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:shared.city')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setCity(e.target.value)}
                    required
                    spellcheck="true"
                    value={city}
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:shared.website')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setWebsite(e.target.value)}
                    placeholder="https://www.name.com"
                    type="url"
                    value={website}
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:shared.description')}</InputTitle>
                <InputTextArea
                    maxLength="400"
                    onChange={onDescriptionHandler}
                    placeholder={t('profile:employment.description_placeholder')}
                    required
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

export default WorkExperienceForm
