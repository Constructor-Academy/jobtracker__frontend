import React from 'react'
import {useTranslation} from 'react-i18next'
import Select from 'react-select'

import {FormFieldWrapperDefault} from '../../style/forms'
import {InputTitle} from '../../style/titles'
import {countries} from './countries'

const CountryDropdown = ({onChangeHandler, value='', placeholder, required}) => {
    const {t} = useTranslation()

    const i18nCountries = countries.map(country => {
        const i18nCountry = t(country.locale)
        return {
            value: i18nCountry,
            label: i18nCountry
        }
    })

    return (
        <FormFieldWrapperDefault>
            <InputTitle marginBottom>{t('profile:shared.country')}</InputTitle>
            <Select
                name="country"
                onChange={onChangeHandler}
                options={i18nCountries}
                placeholder={placeholder ? placeholder : t('common:select')}
                required={required}
                value={
                    {
                        label: value,
                        value: value,
                    }
                }
            />
        </FormFieldWrapperDefault>
    )
}

export default CountryDropdown
