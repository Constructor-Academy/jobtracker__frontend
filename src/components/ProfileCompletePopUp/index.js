import React  from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'
import styled from 'styled-components/macro'

import ProfileCompleteness from '../../pages/Profile/ProfileCompleteness'
import {setShowProfileCompletenessPopUp} from '../../store/actions/auth/userLoginAction'
import {CloseIconButton} from '../../style/buttons'
import {ModalBackground} from '../../style/containers'
import {device} from '../../style/devices'

const ModalContentContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding: ${props => props.theme.spaceM};
    border-radius: 8px;
    background-color: #fff;
    @media ${device.laptop} {
        width: 60%;
        height: auto;
    }
`

const ScrollWrapper = styled.div`
    max-height: 100%;
    overflow: scroll;
    background-color: #fff;
`

const CloseModalButtonContainer = styled.div`
    display: flex;
    margin-bottom: ${props => props.theme.spaceS};
    justify-content: flex-end;
    align-items: center;
`

const CallToAction = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme.primaryBlue};
    text-align: center;
    margin-bottom: ${props => props.theme.spaceS};
`

const ActionRequestP = styled.p`
    margin-bottom: ${props => props.theme.spaceS};
    border-radius: 10px;
    text-align: center;
`

const ProfileCompletePopUp = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()

    const closeModalHandler = () => dispatch(setShowProfileCompletenessPopUp(false))

    return (
        <ModalBackground>
            <ModalContentContainer>
                <CloseModalButtonContainer>
                    <CloseIconButton onClick={closeModalHandler} />
                </CloseModalButtonContainer>
                <CallToAction>
                    {t('components/profile_popup:title')}
                </CallToAction>
                <ActionRequestP>
                    {t('components/profile_popup:description_1')}
                </ActionRequestP>
                <ActionRequestP>
                    {t('components/profile_popup:description_2')}
                </ActionRequestP>
                <ScrollWrapper>
                    <ProfileCompleteness open />
                </ScrollWrapper>
            </ModalContentContainer>
        </ModalBackground>
    )
}

export default ProfileCompletePopUp
