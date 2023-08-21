import React from 'react'
import {useTranslation} from 'react-i18next'
import {formatPhoneNumberIntl} from 'react-phone-number-input'

import {
    ProfileCardParagraph,
    ProfileCardLink,
} from '../../../../style/component-based/profile'
import {InputTitle} from '../../../../style/titles'

const ProfileContactDisplay = ({user}) => {
    const {t} = useTranslation()

    return (
        <>
            <InputTitle>{t('profile:contact.email')}</InputTitle>
            <ProfileCardLink href={'mailto:' + user.email}>
                {user.email}
            </ProfileCardLink>
            <InputTitle>{t('profile:contact.phone.label')}</InputTitle>
            {
                user.phone ? (
                    <ProfileCardLink href={'tel:' + user.phone}>
                        {formatPhoneNumberIntl(user.phone)}
                    </ProfileCardLink>
                ) : (
                    <ProfileCardParagraph>-</ProfileCardParagraph>
                )
            }
            <InputTitle>{t('profile:contact.linkedin.label')}</InputTitle>
            {
                user.linkedin_profile ? (
                    <ProfileCardLink
                        href={user.linkedin_profile}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {user.linkedin_profile}
                    </ProfileCardLink>
                ) : (
                    <ProfileCardParagraph>-</ProfileCardParagraph>
                )
            }
            <InputTitle>{t('profile:contact.github.label')}</InputTitle>
            {
                user.github_profile ? (
                    <ProfileCardLink
                        href={user.github_profile}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {user.github_profile || '-'}
                    </ProfileCardLink>
                ) : (
                    <ProfileCardParagraph>-</ProfileCardParagraph>
                )
            }
            <InputTitle>{t('profile:contact.address')}</InputTitle>
            <ProfileCardParagraph>
                {
                    user.street && (
                        <>
                            {user.street}
                            <br />
                        </>
                    )
                }
                {user.zip} {user.city}
                {user.city && user.country ? ', ' : ''}
                {user.country}
            </ProfileCardParagraph>
        </>
    )
}

export default ProfileContactDisplay
