import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Axios from '../../../../axios'
import {formatLink, decodeMessage} from '../../../../helpers'
import {getUserProfile} from '../../../../store/actions/userAction'
import {ExperienceContainer} from '../../../../style/component-based/profile_experience'
import ButtonBarAddCancel from '../../ButtonBarAddCancel'
import EducationForm from '../EducationForm'


const AddEducation = ({addToggle}) => {
    const dispatch = useDispatch()
    const [education_title, setEducationTitle] = useState('')
    const [institute, setInstitute] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const [present, setPresent] = useState(false)
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [website, setWebsite] = useState('')
    const [description, setDescription] = useState('')
    const [wordCount, setWordCount] = useState(200)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const accessToken = useSelector(state => state.userLoginReducer.accessToken)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const config = {
            headers: {Authorization: `Bearer ${accessToken}`},
        }
        let webpage = formatLink(website)
        const data = {
            education_title,
            institute,
            webpage,
            start_date,
            end_date: end_date || null,
            description,
            country,
            city,
        }
        await Axios.post(
            '/cv/education/',
            data,
            config
        )
            .then(() => {
                dispatch(getUserProfile(accessToken))
                setError('')
                setIsLoading(false)
                addToggle()
            })
            .catch((error) => {
                setError(decodeMessage(error.response.data))
                setIsLoading(false)
            })
    }

    return (
        <ExperienceContainer noBorder>
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
                <ButtonBarAddCancel isLoading={isLoading} onToggleHandler={addToggle} />
            </EducationForm>
        </ExperienceContainer>
    )
}

export default AddEducation
