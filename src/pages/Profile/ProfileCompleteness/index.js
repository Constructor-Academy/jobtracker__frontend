/* eslint-disable react/jsx-max-depth */
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import styled from 'styled-components/macro'

import ProgressBar from '../../../components/ProgressBar'
import {ArrowDownButton, ArrowUpButton} from '../../../style/buttons'
import {ProfileCardContainer, ProfileCardHeaderWrapper, ProfileCardTitle} from '../../../style/component-based/profile'
import ProfileToCompleteSections from './ProfileToCompleteSections'


const ProfileCompletenessContainer = styled(ProfileCardContainer)`
    display: flex;
    flex-direction: column;
`

const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ProgressContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`


const ProfileCompleteness = ({setPreventModalBackgroundScroll, open}) => {
    const {t} = useTranslation()
    const completed = useSelector(state => state.userLoginReducer.user.profile_completeness)
    const incompleteSections = Object.keys(completed).filter(key => !completed[key] && key !== 'total')
    const [showToComplete, setShowToComplete] = useState(open)
    const onToggleHandler = () => setShowToComplete(prevShowToComplete => !prevShowToComplete)

    return (
        <ProfileCompletenessContainer>
            <ProgressWrapper>
                <ProgressContainer>
                    <ProfileCardHeaderWrapper>
                        <ProfileCardTitle>{t('profile:completeness.title')}: {completed.total}%</ProfileCardTitle>
                        {
                            // eslint-disable-next-line react/jsx-no-useless-fragment
                            completed.total === 100 ? <></> : showToComplete ?
                                <ArrowUpButton onClick={onToggleHandler} /> :
                                <ArrowDownButton onClick={onToggleHandler} />
                        }
                    </ProfileCardHeaderWrapper>
                    <ProgressBar completed={completed.total} />
                </ProgressContainer>
            </ProgressWrapper>
            {showToComplete && incompleteSections && <ProfileToCompleteSections sections={incompleteSections} setPreventModalBackgroundScroll={setPreventModalBackgroundScroll} />}
        </ProfileCompletenessContainer>
    )
}

export default ProfileCompleteness
