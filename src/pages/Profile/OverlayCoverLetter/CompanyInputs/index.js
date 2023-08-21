import React from 'react'
import {useTranslation} from 'react-i18next'

import CountryDropdown from '../../../../components/CountryDropdown'
import {FormFieldWrapperDefault, InputBlock, InputRow} from '../../../../style/forms'
import {BaseInputStyled} from '../../../../style/inputs'
import {OverlayContent, OverlayTitle} from '../../../../style/overlay'
import {InputTitle} from '../../../../style/titles'


const CompanyInputs = ({job, updateJobData}) => {
    const {t} = useTranslation()
    const onCountryChangeHandler = e => {
        updateJobData({...job, company_country: e.value})
    }

    const onChangeHandler = e => {
        updateJobData({...job, [e.target.name]: e.target.value})
    }

    return (
        <OverlayContent>
            <InputBlock>
                <OverlayTitle>{t('profile:letter_gen.company.title')}</OverlayTitle>
                <form>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('profile:letter_gen.company.name.label')}</InputTitle>
                        <BaseInputStyled
                            name="company"
                            onChange={onChangeHandler}
                            placeholder={t('profile:letter_gen.company.name.placeholder')}
                            type="text"
                            value={job.company} // = company name
                        />
                    </FormFieldWrapperDefault>

                    <FormFieldWrapperDefault>
                        <InputTitle>{t('profile:letter_gen.company.street.label')}</InputTitle>
                        <BaseInputStyled
                            maxLength="50"
                            name="company_street"
                            onChange={onChangeHandler}
                            placeholder={t('profile:letter_gen.company.street.placeholder')}
                            type="text"
                            value={job.company_street}
                        />
                    </FormFieldWrapperDefault>

                    <InputRow>
                        <FormFieldWrapperDefault>
                            <InputTitle>{t('profile:letter_gen.company.zip.label')}</InputTitle>
                            <BaseInputStyled
                                maxLength="8"
                                name="company_zip"
                                onChange={onChangeHandler}
                                placeholder={t('profile:letter_gen.company.zip.placeholder')}
                                type="text"
                                value={job.company_zip}
                            />
                        </FormFieldWrapperDefault>
                        <FormFieldWrapperDefault>
                            <InputTitle>{t('profile:letter_gen.company.city.label')}</InputTitle>
                            <BaseInputStyled
                                maxLength="50"
                                name="company_city"
                                onChange={onChangeHandler}
                                placeholder={t('profile:letter_gen.company.city.placeholder')}
                                type="text"
                                value={job.company_city}
                            />
                        </FormFieldWrapperDefault>
                    </InputRow>

                    <CountryDropdown onChangeHandler={onCountryChangeHandler} value={job.company_country} />
                </form>
            </InputBlock>
        </OverlayContent>
    )
}

export default CompanyInputs
