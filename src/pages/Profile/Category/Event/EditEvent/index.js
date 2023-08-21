import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector, useDispatch} from 'react-redux'

import DeleteData from '../../../../../components/DeleteData'
import {formatLink} from '../../../../../helpers'
import {deleteEventAction, updateEventAction} from '../../../../../store/actions/eventAction'
import {
    ExperienceContainer,
    ExperienceTitle,
    ExperienceTitleWrapperNew,
} from '../../../../../style/component-based/profile_experience'
import ButtonBarEdit from '../../../ButtonBarEdit'
import EventForm from '../EventForm'


const EditEvent = ({eventData, toggleEditMode}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {error} = useSelector(state => state.errorReducer)
    const eventId = eventData.id
    const descriptionMaxLength = 400

    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const [title, setTitle] = useState(eventData.title || '')
    const [institution, setInstitution] = useState(eventData.institution || '')
    const [city, setCity] = useState(eventData.city || '')
    const [country, setCountry] = useState(eventData.country)
    const [startDate, setStartDate] = useState(eventData.start_date || '')
    const [endDate, setEndDate] = useState(eventData.end_date || '')
    const [present, setPresent] = useState('')
    const [description, setDescription] = useState(eventData.description)
    const [link, setLink] = useState(eventData.link || '')
    const [wordCount, setWordCount] = useState(descriptionMaxLength - eventData.description.length)
    const [isLoading, setIsLoading] = useState(false)

    const trimmed = val => val ? val.trim() : ''

    const generateDataObject = () => {
        const data = {}
        data['title'] = trimmed(title)
        data['institution'] = trimmed(institution)
        data['link'] = formatLink(trimmed(link))
        data['start_date'] = startDate ? startDate : null
        data['end_date'] = endDate ? endDate : null
        data['description'] = trimmed(description)
        data['country'] = trimmed(country)
        data['city'] = trimmed(city)
        return data
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const data = generateDataObject()
        const success = await dispatch(updateEventAction(eventId, data))
        if (!success) setIsLoading(false)
    }

    const onDeleteHandler = async () => {
        const categoryId = eventData.category
        setIsLoading(true)
        const success = await dispatch(deleteEventAction(categoryId, eventId))
        if (success) {
            toggleEditMode()
        } else {
            setIsLoading(false)
        }
    }

    return (
        <ExperienceContainer>
            {
                showDeleteConfirmation && (
                    <DeleteData
                        onDeleteHandler={onDeleteHandler}
                        setShowDeleteConfirmation={setShowDeleteConfirmation}
                    />
                )
            }
            <ExperienceTitleWrapperNew>
                <ExperienceTitle>{t('profile:event.edit')}: {title}</ExperienceTitle>
            </ExperienceTitleWrapperNew>

            <EventForm
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
                <ButtonBarEdit
                    onToggleHandler={toggleEditMode}
                    setShowDeleteConfirmation={setShowDeleteConfirmation}
                    showLoader={isLoading}
                />
            </EventForm>
        </ExperienceContainer>
    )
}

export default EditEvent
