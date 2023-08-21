import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector, useDispatch} from 'react-redux'

import Axios from '../../../../axios'
import DeleteData from '../../../../components/DeleteData'
import {formatLink, decodeMessage} from '../../../../helpers'
import {getUserProfile} from '../../../../store/actions/userAction'
import {
    ExperienceContainer,
    ExperienceTitleWrapperNew,
    ExperienceTitle,
} from '../../../../style/component-based/profile_experience'
import ButtonBarEdit from '../../ButtonBarEdit'
import EducationForm from '../EducationForm'


const EditEducation = ({educationData, toggleEditMode}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const [institute, setInstitute] = useState(educationData.institute)
    const [website, setWebsite] = useState(educationData.webpage)
    const [country, setCountry] = useState(educationData.country)
    const [city, setCity] = useState(educationData.city)
    const [error, setError] = useState('')
    const [showLoader, setShowLoader] = useState(false)
    const [education_title, setEducationTitle] = useState(educationData.education_title)
    const [start_date, setStartDate] = useState(educationData.start_date)
    const [end_date, setEndDate] = useState(educationData.end_date)
    const [present, setPresent] = useState(!educationData.end_date)
    const [description, setDescription] = useState(educationData.description)
    const [id] = useState(educationData.id)
    const accessToken = useSelector(state => state.userLoginReducer.accessToken)
    const [wordCount, setWordCount] = useState(200 - educationData.description.length)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setShowLoader(true)
        const config = {
            headers: {Authorization: `Bearer ${accessToken}`},
        }

        const webpage = formatLink(website)

        Axios.patch(
            `cv/education/${id}/`,
            {
                education_title,
                institute,
                webpage,
                start_date,
                end_date: end_date || null,
                description,
                country,
                city,
            },
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
        await Axios.delete('cv/education/' + id, config)
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
                <ExperienceTitle>{t('profile:education.edit')}: {education_title}</ExperienceTitle>
            </ExperienceTitleWrapperNew>

            <EducationForm
                city={city}
                country={country}
                description={description}
                education_title={education_title}
                end_date={end_date}
                error={error}
                institute={institute}
                onSubmitHandler={onSubmitHandler}
                present={present}
                setCity={setCity}
                setCountry={setCountry}
                setDescription={setDescription}
                setEducationTitle={setEducationTitle}
                setEndDate={setEndDate}
                setError={setError}
                setInstitute={setInstitute}
                setPresent={setPresent}
                setStartDate={setStartDate}
                setWebsite={setWebsite}
                setWordCount={setWordCount}
                start_date={start_date}
                website={website}
                wordCount={wordCount}
            >
                <ButtonBarEdit
                    onToggleHandler={toggleEditMode}
                    setShowDeleteConfirmation={setShowDeleteConfirmation}
                    showLoader={showLoader}
                />
            </EducationForm>
        </ExperienceContainer>
    )
}

export default EditEducation
