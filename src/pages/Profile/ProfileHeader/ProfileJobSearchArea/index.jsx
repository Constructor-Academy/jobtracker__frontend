import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import Select from 'react-select'

import {getI18nJobSearchAreas} from '../../../../helpers/i18n'
import {FormAddTag} from '../../../../style/component-based/skills'
import {FormFieldWrapperDefault} from '../../../../style/forms'
import {BaseInputStyled} from '../../../../style/inputs'


const ProfileJobSearchArea = ({jobSearchArea, setJobSearchArea}) => {
    const {t} = useTranslation()
    const searchAreaOptions = getI18nJobSearchAreas(t)
    const [searchAreaOptionSelected, setSearchAreaOptionSelected] = useState(searchAreaOptions[0])

    const handleSearchAreaOptionChange = (e) => {
        setSearchAreaOptionSelected(e)
        if (e.value !== 'Other') {
            setJobSearchArea(e.value)
        } else {
            setJobSearchArea('')
        }
    }

    useEffect(() => {
        // find if the user's job search area is one of the dropdown options or not, then set option selected and text input values
        const selectedJobSearchArea = searchAreaOptions.find(searchArea => searchArea.value === jobSearchArea)
        if (selectedJobSearchArea){
            setSearchAreaOptionSelected(selectedJobSearchArea)
        } else {
            // the user's job search area is not in the main dropdown options, so we set the option selected to 'Other'
            // and set the input field value to the user's search area value from the backend
            setSearchAreaOptionSelected(searchAreaOptions[searchAreaOptions.length - 1])
            setJobSearchArea(jobSearchArea)
        }
    }, [])

    return (
        <FormFieldWrapperDefault>
            <FormAddTag onSubmit={(e) => e.preventDefault()}>
                <Select
                    defaultValue={searchAreaOptions[0]}
                    onChange={handleSearchAreaOptionChange}
                    options={searchAreaOptions}
                    value={searchAreaOptionSelected}
                />
                {
                    searchAreaOptionSelected.value === 'Other' ?
                        <BaseInputStyled
                            onChange={(e) => setJobSearchArea(e.target.value)}
                            placeholder={t('profile:header.job_search_area.placeholder')}
                            type="text"
                            value={jobSearchArea}
                        />

                        : null
                }
            </FormAddTag>
        </FormFieldWrapperDefault>
    )
}

export default ProfileJobSearchArea
