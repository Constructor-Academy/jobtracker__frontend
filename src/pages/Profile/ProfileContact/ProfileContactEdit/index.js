import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {isValidPhoneNumber} from 'react-phone-number-input'
import {connect, useDispatch} from 'react-redux'

import ButtonSpinner from '../../../../components/ButtonSpinner'
import CountryDropdown from '../../../../components/CountryDropdown'
import {formatLink, decodeMessage} from '../../../../helpers'
import {userUpdateAction} from '../../../../store/actions/userAction'
import {BaseButton, BaseButtonInverted} from '../../../../style/buttons'
import {
    ProfileCardParagraph,
    ProfileEditButtonBar,
} from '../../../../style/component-based/profile'
import {FormFieldWrapperDefault} from '../../../../style/forms'
import {BaseInputStyled} from '../../../../style/inputs'
import {ErrorMessageContainer} from '../../../../style/messages'
import {InputTitle} from '../../../../style/titles'


const ProfileContactEdit = ({user, closeEditMode}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const [phone, setPhone] = useState(user.phone)
    const [linkedin, setLinkedin] = useState(user.linkedin_profile)
    const [github, setGithub] = useState(user.github_profile)
    const [street, setStreet] = useState(user.street)
    const [zip, setZip] = useState(user.zip)
    const [city, setCity] = useState(user.city)
    const [country, setCountry] = useState(user.country)
    const [addLoader, setAddLoader] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const updateUser = async (e) => {
        e.preventDefault()
        setAddLoader(true)
        if (phone && !isValidPhoneNumber(phone)) {
            setAddLoader(false)
            setErrorMessage(
                `${phone} ${t('profile:contact.errors.phone_invalid')}`
            )
            return
        }

        const data = {
            street: street,
            zip: zip,
            city: city,
            country: country,
            phone: phone,
            linkedin_profile: formatLink(linkedin),
            github_profile: formatLink(github),
        }

        dispatch(userUpdateAction(data, true)).then((response) => {
            if (response === true) {
                closeEditMode()
                setAddLoader(false)
                setErrorMessage('')
            } else {
                setErrorMessage(decodeMessage(response))
                setAddLoader(false)
            }
        })
    }

    return (
        <form onSubmit={updateUser}>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:contact.email')}</InputTitle>
                <ProfileCardParagraph disabled>
                    {user.email}
                </ProfileCardParagraph>
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:contact.phone.label')}</InputTitle>
                <BaseInputStyled
                    defaultValue={user.phone}
                    name="phone"
                    onChange={
                        (e) => {
                            setPhone(e.target.value)
                        }
                    }
                    placeholder={t('profile:contact.phone.placeholder')}
                    type="tel"
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:contact.linkedin.label')}</InputTitle>
                <BaseInputStyled
                    defaultValue={user.linkedin_profile}
                    name="linkedin_profile"
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder={t('profile:contact.linkedin.placeholder')}
                    type="url"
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:contact.github.label')}</InputTitle>
                <BaseInputStyled
                    defaultValue={user.github_profile}
                    name="github_profile"
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder={t('profile:contact.github.placeholder')}
                    type="url"
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:contact.street.label')}</InputTitle>
                <BaseInputStyled
                    defaultValue={user.street}
                    name="street"
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder={t('profile:contact.street.placeholder')}
                    type="text"
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:contact.zip.label')}</InputTitle>
                <BaseInputStyled
                    defaultValue={user.zip}
                    maxLength="8"
                    name="zip"
                    onChange={(e) => setZip(e.target.value)}
                    placeholder={t('profile:contact.zip.placeholder')}
                    type="text"
                />
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:shared.city')}</InputTitle>
                <BaseInputStyled
                    defaultValue={user.city}
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={t('profile:shared.city')}
                    type="text"
                />
            </FormFieldWrapperDefault>
            <CountryDropdown onChangeHandler={(e) => setCountry(e.value)} value={country} />
            {
                errorMessage && (
                    <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
                )
            }
            <ProfileEditButtonBar>
                <BaseButtonInverted
                    onClick={closeEditMode}
                    type="button"
                >
                    {t('common:cancel')}
                </BaseButtonInverted>
                <BaseButton type="submit">
                    {addLoader ? <ButtonSpinner /> : t('common:update')}
                </BaseButton>
            </ProfileEditButtonBar>
        </form>
    )
}

const mapStateToProps = ({
    userLoginReducer: {user},
    errorReducer: {error},
}) => ({
    user,
    error,
})

export default connect(mapStateToProps)(ProfileContactEdit)
