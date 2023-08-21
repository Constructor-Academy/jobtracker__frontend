import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components/macro'

import astronaut from '../../assets/astronaut.svg'
import location_icon from '../../assets/location_icon.svg'
import {UserProfileCardButton} from '../../style/buttons'
import {AdministeredUserCardContainer} from '../../style/containers'
import {WorkingTitle} from '../../style/titles'
import {
    CardButtonWrapper,
    CardStatisticsWrapper,
    CardUserLocationWrapper,
} from '../../style/wrappers'


const CardUserStatisticItem = styled.div`
    height: 100%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-right: ${(props) =>
        props.middle ? 'solid rgba(211,211,211,0.86) 1px' : null};
    border-left: ${(props) =>
        props.middle ? 'solid rgba(211,211,211,0.86) 1px' : null};

    p {
        font-size: 16px;
        font-style: normal;
        color: rgba(32, 32, 32, 0.73);
        font-weight: bold;
    }

    label {
        font-size: 12px;
        font-style: normal;
        color: #adadad;
    }
`

const UserProfileCard = ({user, handleUserSelected}) => {
    const {t} = useTranslation()
    const currentUserSelected = useSelector(state => state.jobsReducer.displayedUser.id)
    const userId = user.id
    const working = user.is_working
    const history = useHistory()

    return (
        <AdministeredUserCardContainer
            selected={currentUserSelected === userId}
            working={working}
        >
            <img
                alt="user-avatar"
                src={!user.avatar ? astronaut : user.avatar}
            />
            <p>
                {user.first_name} {user.last_name}
            </p>
            <CardUserLocationWrapper>
                <img
                    alt="user-avatar"
                    src={location_icon}
                    style={
                        {
                            height: '20px',
                            width: '20px',
                            border: 'none',
                            marginRight: '4px',
                        }
                    }
                />
                <label>
                    {user.location === '' ? t('common:not_available') : user.location}
                </label>
            </CardUserLocationWrapper>
            {
                !user.is_admin && (
                    <CardStatisticsWrapper>
                        <CardUserStatisticItem>
                            <p>{user.jobs_count}</p>
                            <label>{t('components/user_card:total_jobs')}</label>
                        </CardUserStatisticItem>
                        <CardUserStatisticItem middle>
                            <p>{user.interviews_count}</p>
                            <label>{t('components/user_card:interviews')}</label>
                        </CardUserStatisticItem>
                        <CardUserStatisticItem>
                            <WorkingTitle working={working}>
                                {user.is_working ? t('common:yes') : t('common:no')}
                            </WorkingTitle>
                            <label>{t('components/user_card:working')}?</label>
                        </CardUserStatisticItem>
                    </CardStatisticsWrapper>
                )
            }
            <CardButtonWrapper>
                {
                    !user.is_admin ? (
                        <>
                            <UserProfileCardButton
                                onClick={
                                    () =>
                                        history.push(`/userprofile/${user.id}`)
                                }
                            >
                                {t('components/user_card:full_profile')}
                            </UserProfileCardButton>
                            <UserProfileCardButton
                                dashboard
                                onClick={(e) => handleUserSelected(e, user.id)}
                            >
                                {t('components/user_card:dashboard')}
                            </UserProfileCardButton>
                        </>
                    ) : (
                        <>
                            <UserProfileCardButton>
                                <a href={`mailto: ${user.email}`}>{t('components/user_card:send_email')}</a>
                            </UserProfileCardButton>
                            <UserProfileCardButton
                                dashboard
                                onClick={
                                    () =>
                                        history.push(`/userprofile/${user.id}`)
                                }
                            >
                                {t('components/user_card:profile')}
                            </UserProfileCardButton>
                        </>
                    )
                }
            </CardButtonWrapper>
        </AdministeredUserCardContainer>
    )
}

export default UserProfileCard
