import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {connect, useDispatch} from 'react-redux'
import Select from 'react-select'

import ButtonSpinner from '../../../../components/ButtonSpinner'
import CountryDropdown from '../../../../components/CountryDropdown'
import {decodeMessage} from '../../../../helpers'
import {useI18nNativeInputErrorTooltips} from '../../../../hooks'
import {userUpdateAction} from '../../../../store/actions/userAction'
import {BaseButton, BaseButtonInverted} from '../../../../style/buttons'
import {ProfileEditButtonBar} from '../../../../style/component-based/profile'
import {FormFieldWrapperDefault} from '../../../../style/forms'
import {BaseInputStyled} from '../../../../style/inputs'
import {ErrorMessageContainer} from '../../../../style/messages'
import {InputTitle} from '../../../../style/titles'


const ProfilePersonalEdit = ({closeEditMode, user}) => {
    const {t} = useTranslation()
    useI18nNativeInputErrorTooltips()
    const [birthDate, setBirthDate] = useState(user.date_of_birth)
    const [nationality, setNationality] = useState(user.nationality)
    const [permit, setPermit] = useState(user.permit)
    const [error, setError] = useState('')
    const [addLoader, setAddLoader] = useState(false)
    const swissPermits = [
        {value: 'A', label: 'A'},
        {value: 'B', label: 'B'},
        {value: 'C', label: 'C'},
        {value: 'D', label: 'D'},
        {value: 'F', label: 'F'},
        {value: 'F+', label: 'F+'},
        {value: 'G', label: 'G'},
        {value: 'L', label: 'L'},
        {value: 'Sans-Papiers', label: 'Sans-Papiers'},
    ]

    const dispatch = useDispatch()
    const updateUser = async (e) => {
        e.preventDefault()
        setAddLoader(true)
        const data = {
            date_of_birth: birthDate,
            nationality: nationality,
            permit: permit,
        }

        dispatch(userUpdateAction(data, true)).then((response) => {
            if(response === true){
                setAddLoader(false)
                setError('')
                closeEditMode()
            } else {
                setError(decodeMessage(response))
                setAddLoader(false)
            }
        })
    }

    return (
        <form onSubmit={updateUser}>
            <FormFieldWrapperDefault>
                <InputTitle>{t('profile:personal.dob.label')}</InputTitle>
                <BaseInputStyled
                    defaultValue={user.date_of_birth}
                    name="date_of_birth"
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                    type="date"
                />
            </FormFieldWrapperDefault>
            <CountryDropdown onChangeHandler={(e) => setNationality(e.value)} value={nationality} />
            {
                nationality !== 'Switzerland' && nationality !== 'Schweiz' && (
                    <FormFieldWrapperDefault>
                        <InputTitle marginBottom>{t('profile:personal.permit_if')}</InputTitle>
                        <Select
                            defaultValue={
                                {
                                    label: user.permit,
                                    value: user.permit,
                                }
                            }
                            name="permit"
                            onChange={(e) => setPermit(e.label)}
                            options={swissPermits}
                        />
                    </FormFieldWrapperDefault>
                )
            }
            {error && <ErrorMessageContainer>{error}</ErrorMessageContainer>}
            <ProfileEditButtonBar>
                <BaseButtonInverted
                    onClick={closeEditMode}
                >
                    {t('common:cancel')}
                </BaseButtonInverted>
                <BaseButton>
                    {addLoader ? <ButtonSpinner /> : t('common:update')}
                </BaseButton>
            </ProfileEditButtonBar>
        </form>
    )
}

const mapStateToProps = ({userLoginReducer: {user}, errorReducer: {error},}) => ({
    user,
    error,
})

export default connect(mapStateToProps)(ProfilePersonalEdit)
