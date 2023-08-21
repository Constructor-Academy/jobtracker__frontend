import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {ProfileEditIconButton} from '../../../style/buttons'
import {
    ProfileCardTitle,
    ProfileCardContainer,
    ProfileCardHeaderWrapper,
} from '../../../style/component-based/profile'
import ProfileContactDisplay from './ProfileContactDisplay'
import ProfileContactEdit from './ProfileContactEdit'


const ProfileContact = ({user, editable}) => {
    const {t} = useTranslation()
    const [showEdit, setShowEdit] = useState(false)

    return (
        <ProfileCardContainer>
            <ProfileCardHeaderWrapper>
                <ProfileCardTitle>{t('profile:contact.title')}</ProfileCardTitle>

                {
                    !showEdit && editable && (
                        <ProfileEditIconButton
                            onClick={() => setShowEdit(!showEdit)}
                            title={t('profile:contact.edit')}
                        />
                    )
                }
            </ProfileCardHeaderWrapper>
            {!showEdit && <ProfileContactDisplay user={user} />}
            {
                showEdit && (
                    <ProfileContactEdit
                        closeEditMode={() => setShowEdit(false)}
                    />
                )
            }
        </ProfileCardContainer>
    )
}

export default ProfileContact
