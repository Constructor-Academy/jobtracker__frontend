import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import astronaut from '../../../../assets/astronaut.svg'
import ButtonSpinner from '../../../../components/ButtonSpinner'
import {decodeMessage} from '../../../../helpers'
import {userUpdateAction} from '../../../../store/actions/userAction'
import {BaseButton, BaseButtonInverted} from '../../../../style/buttons'
import {ProfileEditButtonBar} from '../../../../style/component-based/profile'
import {
    ProfileHeaderPicture,
    ProfileHeaderEditFirstRow,
    ProfileHeaderEditAvatarZone,
} from '../../../../style/component-based/profile_header'
import {FormFieldWrapperDefault, InputCounter} from '../../../../style/forms'
import {BaseInputStyled, InputTextArea} from '../../../../style/inputs'
import {ErrorMessageContainer} from '../../../../style/messages'
import {InputTitle} from '../../../../style/titles'
import ProfileJobSearchArea from '../ProfileJobSearchArea'
import ProfileLangs from '../ProfileTagsLangs'
import ProfileSkills from '../ProfileTagsSkills'


const ProfileHeaderEdit = ({closeEditMode}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.userLoginReducer)
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [actualPosition, setActualPosition] = useState(user.actual_position)
    const [userDescription, setUserDescription] = useState(user.user_description)
    const [jobSearchArea, setJobSearchArea] = useState(user.job_search_area)
    const [skills, setSkills] = useState(user.skills)
    const [languages, setLanguages] = useState(user.languages)
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState(null)
    const [addLoader, setAddLoader] = useState(false)
    const [error, setError] = useState('')
    const [wordCount, setWordCount] = useState(200 - user.user_description.length)

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles[0].size > 2097152) {
            alert(t('errors:upload.max_size', {size: '2MB'}))
        } else {
            const reader = new FileReader()
            reader.onloadend = () => {
                setAvatarPreview(reader.result)
            }
            reader.readAsDataURL(acceptedFiles[0])
            setAvatar(acceptedFiles[0])
        }
    }, [t])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png',
    })

    const updateUser = async (e) => {
        e.preventDefault()
        setAddLoader(true)

        const data = {
            first_name: firstName,
            last_name: lastName,
            actual_position: actualPosition,
            user_description: userDescription,
            skills: skills,
            languages: languages,
            avatar: avatar,
            job_search_area: jobSearchArea
        }

        dispatch(userUpdateAction(data, true)).then((response) => {
            if (response === true) {
                setAddLoader(false)
                closeEditMode()
            } else {
                setError(decodeMessage(response))
                setAddLoader(false)
            }
        })
    }

    return (
        <>
            <ProfileHeaderEditFirstRow>
                <ProfileHeaderEditAvatarZone {...getRootProps()}>
                    <ProfileHeaderPicture
                        alt={t('profile:header.avatar.alt')}
                        src={
                            avatarPreview ||
                            (!user.avatar ? astronaut : user.avatar)
                        }
                    />
                    <input {...getInputProps()} />
                    {
                        isDragActive
                            ? t('profile:header.avatar.drop')
                            : t('profile:header.avatar.click_or_drop')
                    }
                </ProfileHeaderEditAvatarZone>
                <div>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('common:forms.first_name')}</InputTitle>
                        <BaseInputStyled
                            defaultValue={user.first_name}
                            maxLength="80"
                            name="first_name"
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder={t('common:forms.first_name')}
                            type="text"
                        />
                    </FormFieldWrapperDefault>
                    <FormFieldWrapperDefault>
                        <InputTitle>{t('common:forms.last_name')}</InputTitle>
                        <BaseInputStyled
                            defaultValue={user.last_name}
                            maxLength="80"
                            name="last_name"
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder={t('common:forms.last_name')}
                            type="text"
                        />
                    </FormFieldWrapperDefault>
                    <FormFieldWrapperDefault noMargin>
                        <InputTitle>{t('profile:header.current_job')}</InputTitle>
                        <BaseInputStyled
                            defaultValue={user.actual_position}
                            maxLength="80"
                            name="actual_position"
                            onChange={(e) => setActualPosition(e.target.value)}
                            placeholder={t('profile:header.current_job_placeholder')}
                            type="text"
                        />
                    </FormFieldWrapperDefault>
                </div>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('profile:header.summary')}</InputTitle>
                    <InputTextArea
                        fullHeight
                        maxlength="200"
                        name="user_description"
                        onChange={
                            (e) => {
                                setUserDescription(
                                    e.target.value.substring(0, 200)
                                )
                                setWordCount(
                                    200 - e.target.value.substring(0, 200).length
                                )
                            }
                        }
                        placeholder={t('profile:header.summary_placeholder')}
                        value={userDescription}
                    />
                    <InputCounter>{wordCount}</InputCounter>
                </FormFieldWrapperDefault>
            </ProfileHeaderEditFirstRow>
            <InputTitle marginBottom>{t('profile:sections.skills')}</InputTitle>
            <ProfileSkills
                setTags={setSkills}
                showEdit
                tags={skills}
                user={user}
            />
            <InputTitle marginBottom>{t('profile:sections.languages')}</InputTitle>
            <ProfileLangs
                setTags={setLanguages}
                showEdit
                tags={languages}
                user={user}
            />
            <InputTitle marginBottom>{t('profile:header.job_search_area.label')}</InputTitle>
            <ProfileJobSearchArea
                jobSearchArea={jobSearchArea}
                setJobSearchArea={setJobSearchArea}
                setTags={setSkills}
            />
            {error && <ErrorMessageContainer>{error}</ErrorMessageContainer>}
            <ProfileEditButtonBar>
                <BaseButtonInverted onClick={closeEditMode} type="button">
                    {t('common:cancel')}
                </BaseButtonInverted>
                <BaseButton onClick={updateUser}>
                    {addLoader ? <ButtonSpinner /> : t('common:update')}
                </BaseButton>
            </ProfileEditButtonBar>
        </>
    )
}

export default ProfileHeaderEdit
