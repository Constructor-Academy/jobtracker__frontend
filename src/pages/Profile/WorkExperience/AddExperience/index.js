import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector, useDispatch} from 'react-redux'

import Axios from '../../../../axios'
import ButtonSpinner from '../../../../components/ButtonSpinner'
import {formatLink, decodeMessage} from '../../../../helpers'
import {getUserProfile} from '../../../../store/actions/userAction'
import {BaseButton, BaseButtonInverted} from '../../../../style/buttons'
import {
    ExperienceButtonBar,
    ExperienceContainer, ExperienceTitle,
    ExperienceTitleWrapperNew
} from '../../../../style/component-based/profile_experience'
import WorkExperienceForm from '../WorkExperienceForm'


const AddExperience = ({addToggle}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const [employer, setEmployer] = useState('')
    const [website, setWebsite] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [job_title, setJobTitle] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const [addLoader, setAddLoader] = useState(false)
    const accessToken = useSelector(state => state.userLoginReducer.accessToken)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setAddLoader(true)
        const config = {
            headers: {Authorization: `Bearer ${accessToken}`},
        }
        let webpage = formatLink(website)
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
        await Axios.post(
            '/cv/experience/',
            data,
            config
        )
            .then(() => {
                setError('')
                setAddLoader(false)
                dispatch(getUserProfile(accessToken))
                addToggle()
            })
            .catch((error) => {
                setError(decodeMessage(error.response.data))
                setAddLoader(false)
            })
    }

    return (
        <ExperienceContainer noBorder>
            <ExperienceTitleWrapperNew>
                <ExperienceTitle>{t('profile:employment.new_job')}</ExperienceTitle>
            </ExperienceTitleWrapperNew>

            <WorkExperienceForm
                addLoader={addLoader}
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
                <ExperienceButtonBar>
                    <BaseButtonInverted onClick={addToggle} type="button">
                        {t('common:cancel')}
                    </BaseButtonInverted>
                    <BaseButton type="submit">
                        {addLoader ? <ButtonSpinner /> : t('common:add')}
                    </BaseButton>
                </ExperienceButtonBar>
            </WorkExperienceForm>
        </ExperienceContainer>
    )
}
export default AddExperience
