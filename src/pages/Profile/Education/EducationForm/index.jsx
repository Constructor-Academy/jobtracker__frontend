import React from 'react'
import {useTranslation} from 'react-i18next'

import CountryDropdown from '../../../../components/CountryDropdown'
import {useI18nNativeInputErrorTooltips} from '../../../../hooks'
import {ExperienceTitle, ExperienceTitleWrapperNew} from '../../../../style/component-based/profile_experience'
import {FormFieldWrapperCentered, FormFieldWrapperDefault, InputCounter, InputRowDate} from '../../../../style/forms'
import {BaseInputStyled, InputTextArea} from '../../../../style/inputs'
import {ErrorMessageContainer} from '../../../../style/messages'
import {InputTitle} from '../../../../style/titles'
import {CheckboxLabelWrapperProfile} from '../../../../style/wrappers'


const EducationForm = ({
    onSubmitHandler,
    education_title,
    setEducationTitle,
    institute,
    setInstitute,
    start_date,
    setStartDate,
    end_date,
    setEndDate,
    present,
    setPresent,
    country,
    setCountry,
    city,
    setCity,
    website,
    setWebsite,
    description,
    setDescription,
    wordCount,
    setWordCount,
    error,
    children
}) => {
    const {t} = useTranslation()
    useI18nNativeInputErrorTooltips()

    const checkboxHandler = (e) => {
        setPresent(e.target.checked)
        setEndDate('')
    }

    const onDescriptionHandler = (e) => {
        setDescription(e.target.value.substring(0, 400))
        setWordCount(400 - e.target.value.substring(0, 400).length)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <ExperienceTitleWrapperNew>
                <ExperienceTitle>{t('profile:education.new_qualification')}</ExperienceTitle>
            </ExperienceTitleWrapperNew>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:education.qualification.label')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setEducationTitle(e.target.value)}
                    placeholder={t('profile:education.qualification.placeholder')}
                    required
                    type="text"
                    value={education_title}
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:education.institute.label')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setInstitute(e.target.value)}
                    placeholder={t('profile:education.institute.placeholder')}
                    required
                    value={institute}
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
                        disabled={present ? 'disabled' : ''}
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
                            checked={present}
                            onChange={checkboxHandler}
                            type="checkbox"
                        />
                    </CheckboxLabelWrapperProfile>
                </FormFieldWrapperCentered>
            </InputRowDate>
            <CountryDropdown
                onChangeHandler={(e) => setCountry(e.value)}
                value={country}
            />
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:shared.city')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setCity(e.target.value)}
                    required
                    spellcheck="true"
                    type="text"
                    value={city}
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:shared.website')}</InputTitle>
                <BaseInputStyled
                    maxLength="50"
                    onChange={e => setWebsite(e.target.value)}
                    placeholder="http://www.name.com"
                    type="url"
                    value={website}
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:shared.description')}</InputTitle>
                <InputTextArea
                    maxLength="400"
                    onChange={onDescriptionHandler}
                    placeholder={t('profile:education.description_placeholder')}
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

export default EducationForm
