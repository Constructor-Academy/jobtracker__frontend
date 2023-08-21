import React from 'react'
import {useTranslation} from 'react-i18next'

import astronaut from '../../../../assets/astronaut.svg'
import {ProfileEditIconButton} from '../../../../style/buttons'
import {ProfileCardParagraph} from '../../../../style/component-based/profile'
import {
    ProfileHeaderContainer,
    ProfileHeaderPicture,
    ProfileHeaderLeftContainer,
    ProfileHeaderRightContainer,
    ProfileHeaderName,
    ProfileHeaderOrigin,
    ProfileHeaderFloatingButtonWrapper,
} from '../../../../style/component-based/profile_header'
import {TagsContainer} from '../../../../style/component-based/skills'
import {InputTitle} from '../../../../style/titles'
import ProfileLangs from '../ProfileTagsLangs'
import ProfileSkills from '../ProfileTagsSkills'


const ProfileHeaderDisplay = ({user, editable, enableEditMode}) => {
    const {t} = useTranslation()

    return (
        <ProfileHeaderContainer>
            <ProfileHeaderLeftContainer>
                <ProfileHeaderPicture src={!user.avatar ? astronaut : user.avatar} />
                <ProfileHeaderName>
                    {user.first_name ? user.first_name : '-'}&nbsp;
                    {user.last_name ? user.last_name : '-'}
                </ProfileHeaderName>
                {
                    (user.city || user.country) && (
                        <ProfileHeaderOrigin>
                            {user.city}
                            {', '}
                            {user.country}
                        </ProfileHeaderOrigin>
                    )
                }
            </ProfileHeaderLeftContainer>
            <ProfileHeaderRightContainer>
                <InputTitle>{t('profile:header.current_job')}</InputTitle>
                <ProfileCardParagraph>
                    {user.actual_position || '-'}
                </ProfileCardParagraph>
                <InputTitle>{t('profile:header.summary')}</InputTitle>
                <ProfileCardParagraph>
                    {user.user_description || '-'}
                </ProfileCardParagraph>
                <InputTitle marginBottom>{t('profile:sections.skills')}</InputTitle>
                <TagsContainer>
                    <ProfileSkills user={user} />
                </TagsContainer>
                <InputTitle marginBottom>{t('profile:sections.languages')}</InputTitle>
                <TagsContainer noMargin>
                    <ProfileLangs user={user} />
                </TagsContainer>
                <InputTitle>{t('profile:header.job_search_area.label')}</InputTitle>
                <ProfileCardParagraph>
                    {user.job_search_area || '-'}
                </ProfileCardParagraph>
            </ProfileHeaderRightContainer>
            <ProfileHeaderFloatingButtonWrapper>
                {
                    editable && (
                        <ProfileEditIconButton
                            onClick={enableEditMode}
                            title={t('profile:header.edit')}
                        />
                    )
                }
            </ProfileHeaderFloatingButtonWrapper>
        </ProfileHeaderContainer>
    )
}

export default ProfileHeaderDisplay
