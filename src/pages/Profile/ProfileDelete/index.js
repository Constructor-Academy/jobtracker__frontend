import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {DeleteButton} from '../../../style/buttons'
import {
    ProfileCardContainer,
    ProfileCardHeaderWrapper,
    ProfileCardTitle,
} from '../../../style/component-based/profile'
import DeleteModal from '../DeleteModal'


const ProfileDelete = () => {
    const {t} = useTranslation()
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

    return (
        <ProfileCardContainer>
            <ProfileCardHeaderWrapper>
                <ProfileCardTitle>{t('profile:danger.title')}</ProfileCardTitle>
            </ProfileCardHeaderWrapper>
            {showDeleteConfirmation && <DeleteModal setShowDeleteConfirmation={setShowDeleteConfirmation} />}

            <p>{t('profile:danger.warning')}</p>
            <br />

            <DeleteButton
                onClick={() => setShowDeleteConfirmation(true)}
            >
                {t('profile:danger.delete_acc')}
            </DeleteButton>
        </ProfileCardContainer>
    )
}

export default ProfileDelete
