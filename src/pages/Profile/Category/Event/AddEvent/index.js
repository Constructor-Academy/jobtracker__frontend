import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import {formatLink} from '../../../../../helpers'
import {useResetErrors} from '../../../../../hooks'
import {createEventAction} from '../../../../../store/actions/eventAction'
import {
    ExperienceContainer,
    ExperienceTitle,
    ExperienceTitleWrapperNew
} from '../../../../../style/component-based/profile_experience'
import ButtonBarAddCancel from '../../../ButtonBarAddCancel'
import EventForm from '../EventForm'


const AddEventForm = ({addToggle, category}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {error} = useSelector(state => state.errorReducer)
    const descriptionMaxLength = 400
    useResetErrors()

    const [title, setTitle] = useState('')
    const [institution, setInstitution] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [present, setPresent] = useState(false)
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [wordCount, setWordCount] = useState(descriptionMaxLength)
    const [isLoading, setIsLoading] = useState(false)

    const notEmpty = val => val.trim() !== ''

    const generateDataObject = (categoryId) => {
        const data = {}
        if (notEmpty(title)) data['title'] = title
        if (notEmpty(institution)) data['institution'] = institution
        if (notEmpty(link)) data['link'] = formatLink(link)
        if (notEmpty(startDate)) data['start_date'] = startDate
        if (notEmpty(endDate)) data['end_date'] = endDate
        if (notEmpty(description)) data['description'] = description
        if (notEmpty(country)) data['country'] = country
        if (notEmpty(city)) data['city'] = city
        data['category'] = categoryId
        return data
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const data = generateDataObject(category.id)
        const success = await dispatch(createEventAction(data))
        if (!success) setIsLoading(false)
    }

    return (
        <ExperienceContainer noBorder>
            <ExperienceTitleWrapperNew>
                <ExperienceTitle>{t('profile:event.new')} {category.name}</ExperienceTitle>
            </ExperienceTitleWrapperNew>

            <EventForm
                category={category}
                city={city}
                country={country}
                description={description}
                descriptionMaxLength={descriptionMaxLength}
                endDate={endDate}
                error={error}
                institution={institution}
                isLoading={isLoading}
                link={link}
                onSubmitHandler={onSubmitHandler}
                present={present}
                setCity={setCity}
                setCountry={setCountry}
                setDescription={setDescription}
                setEndDate={setEndDate}
                setInstitution={setInstitution}
                setIsLoading={setIsLoading}
                setLink={setLink}
                setPresent={setPresent}
                setStartDate={setStartDate}
                setTitle={setTitle}
                setWordCount={setWordCount}
                startDate={startDate}
                title={title}
                wordCount={wordCount}
            >
                <ButtonBarAddCancel isLoading={isLoading} onToggleHandler={addToggle} />
            </EventForm>
        </ExperienceContainer>
    )
}

export default AddEventForm
