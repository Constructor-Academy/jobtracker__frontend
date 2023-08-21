import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import {BaseButton} from '../../../style/buttons'
import {
    CurrentlyViewingContainer,
    HeaderSectionContainer,
} from '../../../style/containers'
import {PageTitle} from '../../../style/titles'
import {
    AddJobButtonWrapper,
    CurrentlyViewingWrapper,
    HeaderTitleWrapper,
} from '../../../style/wrappers'
import NewJobForm from '../NewJobForm'


const HeaderSection = () => {
    const {t} = useTranslation()
    const {user} = useSelector(state => state.userLoginReducer)
    const {displayedUser} = useSelector(state => state.jobsReducer)
    const [showNewJobForm, setShowNewJobForm] = useState(false)

    return (
        <HeaderSectionContainer>
            <HeaderTitleWrapper>
                <PageTitle>{t('dashboard:hi')}, {user.first_name}!</PageTitle>
                <div>{user.is_admin ? t('dashboard:user_types.admin') : t('dashboard:user_types.jobseeker')}</div>
            </HeaderTitleWrapper>
            <CurrentlyViewingWrapper>
                {
                    user.is_admin && (
                        <CurrentlyViewingContainer>
                            {t('dashboard:current_dashboard')}:{' '}
                            <span>
                                {displayedUser.first_name} {displayedUser.last_name}
                            </span>
                        </CurrentlyViewingContainer>
                    )
                }
            </CurrentlyViewingWrapper>
            <AddJobButtonWrapper>
                <BaseButton onClick={() => setShowNewJobForm(true)}>
                    {t('dashboard:jobs.new')}
                </BaseButton>
                {
                    showNewJobForm && (
                        <NewJobForm
                            setShowNewJobForm={setShowNewJobForm}
                            showNewJobForm={showNewJobForm}
                        />
                    )
                }
            </AddJobButtonWrapper>
        </HeaderSectionContainer>
    )
}

export default HeaderSection
