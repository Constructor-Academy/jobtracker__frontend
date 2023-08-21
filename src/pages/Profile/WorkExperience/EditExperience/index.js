import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector, useDispatch} from 'react-redux'

import Axios from '../../../../axios'
import DeleteData from '../../../../components/DeleteData'
import {formatLink, decodeMessage} from '../../../../helpers'
import {getUserProfile} from '../../../../store/actions/userAction'
import {
    ExperienceContainer,
    ExperienceTitle,
    ExperienceTitleWrapperNew,
} from '../../../../style/component-based/profile_experience'
import ButtonBarEdit from '../../ButtonBarEdit'
import WorkExperienceForm from '../WorkExperienceForm'


const EditExperience = ({jobData, toggleEditMode}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const [employer, setEmployer] = useState(jobData.employer || '')
    const [website, setWebsite] = useState(jobData.webpage || '')
    const [country, setCountry] = useState(jobData.country || '')
    const [city, setCity] = useState(jobData.city || '')
    const [job_title, setJobTitle] = useState(jobData.job_title || '')
    const [start_date, setStartDate] = useState(jobData.start_date || '')
    const [end_date, setEndDate] = useState(jobData.end_date || '')
    const [checkbox, setCheckbox] = useState(!jobData.end_date)
    const [description, setDescription] = useState(jobData.description || '')
    const [id] = useState(jobData.id)
    const [error, setError] = useState('')
    const [showLoader, setShowLoader] = useState(false)
    const accessToken = useSelector(state => state.userLoginReducer.accessToken)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setShowLoader(true)
        const config = {
            headers: {Authorization: `Bearer ${accessToken}`},
        }

        const webpage = formatLink(website)

        const data = {
            job_title,
            employer,
            webpage,
            start_date,
            end_date: end_date || null,
            description,
            country,
            city,
        }
        Axios.patch(
            `cv/experience/${id}/`,
            data,
            config
        )
            .then(() => {
                setError('')
                setShowLoader(false)
                dispatch(getUserProfile(accessToken))
                toggleEditMode()
            })
            .catch((error) => {
                setError(decodeMessage(error.response.data))
                setShowLoader(false)
            })
    }

    const onDeleteHandler = async (e) => {
        e.preventDefault()
        const config = {
            headers: {Authorization: `Bearer ${accessToken}`},
        }
        await Axios.delete(`cv/experience/${id}/`, config)
            .then(() => {
                setError('')
                setShowLoader(false)
                dispatch(getUserProfile(accessToken))
            })
            .catch((error) => {
                setError(decodeMessage(error.response.data))
                setShowLoader(false)
            })
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
                <ExperienceTitle>{t('profile:employment.edit')}: {job_title}</ExperienceTitle>
            </ExperienceTitleWrapperNew>

            <WorkExperienceForm
                addLoader={showLoader}
                checkbox={checkbox}
                city={city}
                country={country}
                description={description}
                employer={employer}
                end_date={end_date}
                error={error}
                job_title={job_title}
                onSubmitHandler={onSubmitHandler}
                setCheckbox={setCheckbox}
                setCity={setCity}
                setCountry={setCountry}
                setDescription={setDescription}
                setEmployer={setEmployer}
                setEndDate={setEndDate}
                setJobTitle={setJobTitle}
                setStartDate={setStartDate}
                setWebsite={setWebsite}
                start_date={start_date}
                website={website}
            >
                <ButtonBarEdit
                    onToggleHandler={toggleEditMode}
                    setShowDeleteConfirmation={setShowDeleteConfirmation}
                    showLoader={showLoader}
                />
            </WorkExperienceForm>
        </ExperienceContainer>
    )
}

export default EditExperience
