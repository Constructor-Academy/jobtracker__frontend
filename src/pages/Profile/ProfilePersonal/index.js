import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {ProfileEditIconButton} from '../../../style/buttons'
import {
    ProfileCardContainer,
    ProfileCardHeaderWrapper,
    ProfileCardTitle,
} from '../../../style/component-based/profile'
import ProfilePersonalDisplay from './ProfilePersonalDisplay'
import ProfilePersonalEdit from './ProfilePersonalEdit'



const ProfilePersonal = ({user, editable}) => {
    const {t} = useTranslation()
    const [showEdit, setShowEdit] = useState(false)

    return (
        <ProfileCardContainer>
            <ProfileCardHeaderWrapper>
                <ProfileCardTitle>{t('profile:personal.title')}</ProfileCardTitle>
                {
                    !showEdit && editable && (
                        <ProfileEditIconButton
                            onClick={() => setShowEdit(!showEdit)}
                            title={t('profile:personal.edit')}
                        />
                    )
                }
            </ProfileCardHeaderWrapper>
            {!showEdit && <ProfilePersonalDisplay user={user} />}
            {
                showEdit && (
                    <ProfilePersonalEdit
                        closeEditMode={() => setShowEdit(false)}
                    />
                )
            }
        </ProfileCardContainer>
    )
}

export default ProfilePersonal
