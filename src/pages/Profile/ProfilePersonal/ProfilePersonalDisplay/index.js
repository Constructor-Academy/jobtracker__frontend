import React from 'react'
import {useTranslation} from 'react-i18next'

import {convertToBirthDate} from '../../../../helpers'
import {ProfileCardParagraph} from '../../../../style/component-based/profile'
import {InputTitle} from '../../../../style/titles'



const ProfilePersonalDisplay = ({user}) => {
    const {t} = useTranslation()

    return (
        <>
            <InputTitle>{t('profile:personal.dob.label')}</InputTitle>
            <ProfileCardParagraph>
                {user.date_of_birth ? convertToBirthDate(user.date_of_birth) : '-'}
            </ProfileCardParagraph>
            <InputTitle>{t('profile:personal.origin')}</InputTitle>
            <ProfileCardParagraph>{user.nationality}</ProfileCardParagraph>
            {
                user.nationality !== 'Switzerland' && user.nationality !== 'Schweiz' && (
                    <>
                        <InputTitle>{t('profile:personal.permit_if')}</InputTitle>
                        <ProfileCardParagraph>
                            {user.permit || '-'}
                        </ProfileCardParagraph>
                    </>
                )
            }
        </>
    )
}

export default ProfilePersonalDisplay
