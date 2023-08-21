import React, {useEffect, useRef, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import UserProfileCard from '../../../components/UserProfileCard'
import {
    getAdmins,
    inviteAdminAction,
    notifyAdminsFoundJob,
} from '../../../store/actions/socialAction'
import {
    BaseButton,
    NotifyAdminsFoundJob,
    BaseButtonInverted,
} from '../../../style/buttons'
import {
    AdministratorListContainer,
    HeaderSectionContainer,
} from '../../../style/containers'
import {BaseInputStyled} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {
    OverlayBackground,
    OverlayContainerDialog,
    OverlayContent,
    OverlayFooter,
    OverlayTitle,
} from '../../../style/overlay'
import {PageTitle} from '../../../style/titles'
import {HeaderTitleWrapper} from '../../../style/wrappers'
import InviteSuccess from './InviteSucess'


const Administrators = () => {
    const {t} = useTranslation()
    const [showSuccess, setShowSuccess] = useState(false)
    const [showInvitation, setShowInvitation] = useState(false)
    const admins = useSelector(state => state.userLoginReducer.userAdmins)
    const {error} = useSelector(state => state.errorReducer)
    const {jobs} = useSelector(state => state.jobsReducer)
    const dispatch = useDispatch()
    const history = useHistory()
    let email = useRef('')

    useEffect(() => {
        // Without the null check we get an infinite loop. I think it's because of the withAuth but couldn't fix it in a clean manner
        if (admins === null) dispatch(getAdmins())
    }, [admins, dispatch])

    const sendInviteHandler = async (e) => {
        e.preventDefault()
        const data = await dispatch(inviteAdminAction(email.current.value))
        if (data) {
            setShowSuccess(true)
        }
        setTimeout(async () => {
            setShowSuccess(false)
            setShowInvitation(!showInvitation)
            await dispatch(getAdmins())
        }, 2000)
    }

    const sendNotifyAdmin = async () => {
        const data = await dispatch(notifyAdminsFoundJob())
        if (data) {
            setShowSuccess(true)
        }
        setTimeout(async () => {
            setShowSuccess(false)
            history.push('/dashboard')
        }, 2000)
    }
    const handleBackgroundClick = (event) => {
        if (event.target.id === 'overlay-background') {
            setShowInvitation(false)
        }
    }
    return (
        <>
            <HeaderSectionContainer>
                <HeaderTitleWrapper>
                    <PageTitle>{t('settings:admins')}</PageTitle>
                </HeaderTitleWrapper>
                <span />
                <BaseButton onClick={() => setShowInvitation(!showInvitation)}>
                    {t('settings:add_admin')}
                </BaseButton>
            </HeaderSectionContainer>
            {
                Array.isArray(admins) && admins.length !== 0 ? (
                    <AdministratorListContainer>
                        {
                            admins.map(user => (
                                <UserProfileCard key={user.id} user={user} />
                            ))
                        }
                    </AdministratorListContainer>
                ) : (
                    <p>{t('settings:no_admins')}</p>
                )
            }
            {showSuccess && <InviteSuccess />}
            {
                showInvitation ? (
                    <OverlayBackground id='overlay-background' onClick={(e) => { handleBackgroundClick(e) }}>
                        <OverlayContainerDialog>
                            <OverlayTitle>{t('settings:invite_admin')}</OverlayTitle>
                            <OverlayContent>
                                <BaseInputStyled
                                    name="email"
                                    placeholder={t('settings:email_placeholder')}
                                    ref={email}
                                    type="text"
                                />
                            </OverlayContent>
                            {showSuccess && <InviteSuccess />}
                            {
                                error && (
                                    <ErrorMessage>{error.admin_email}</ErrorMessage>
                                )
                            }
                            <OverlayFooter>
                                <BaseButtonInverted
                                    onClick={
                                        () =>
                                            setShowInvitation(!showInvitation)
                                    }
                                >
                                    {t('common:cancel')}
                                </BaseButtonInverted>

                                <BaseButton onClick={sendInviteHandler}>
                                    {t('settings:send_invite')}
                                </BaseButton>
                            </OverlayFooter>
                        </OverlayContainerDialog>
                    </OverlayBackground>
                ) : null
            }

            {
                jobs['AC'].length !== 0 ? (
                    <NotifyAdminsFoundJob onClick={sendNotifyAdmin}>
                        <p>{/*Needed for flexbox*/}</p>{t('settings:found_job')}
                        <p>{t('settings:notify_admin')}</p>
                    </NotifyAdminsFoundJob>
                ) : null
            }
        </>
    )
}

export default Administrators
