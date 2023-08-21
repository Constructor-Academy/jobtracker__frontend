import React from "react"
import { OverlayBackground, OverlayContainerForm } from "../../../../style/overlay"
import { BaseButton, BaseButtonInverted } from "../../../../style/buttons"
import styled from "styled-components"
import Axios from "../../../../axios"
import { useDispatch, useSelector } from "react-redux"
import { deleteRejected } from "../../../../store/actions/jobAction"
import { addMessage } from '../../../../store/actions/messageAction'
import { useTranslation } from 'react-i18next'

const ClearRejectedOverlayDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
div {
    margin-top: 16px;
    display: flex; 
    width: 100%;
    justify-content: space-around;
}
`

export const DeleteRejectedConfirmationOverlay = ({ setVisibility }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const token = useSelector(state => state.userLoginReducer.accessToken)
    const displayedUser = useSelector(state => state.jobsReducer.displayedUser)
    const jobs = useSelector(state => state.jobsReducer.jobs)

    const handleBackgroundClick = (e) => {
        e.preventDefault()
        if (e.target.id === 'overlay-background') {
            setVisibility(false)
        }
    }


    const clearRejectedHandler = async (e) => {  
        e.preventDefault()

        let data = JSON.stringify({
            "for_user": displayedUser.id
        });

        let config = {
            headers : {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            data: data 
        }
            
        const response = await Axios.delete('jobs/clear-rejected/', config );
        if (response.status === 204) {
            dispatch(deleteRejected())
            setVisibility(false)
        } else {
            setVisibility(false)
            dispatch(
                addMessage({
                    detail: t('errors:general.unknown'),
                    type: 'warning',
                })
            )
        }
    }
    return (
        <OverlayBackground id='overlay-background' onClick={(e) => { handleBackgroundClick(e) }}>
            <OverlayContainerForm>
                <ClearRejectedOverlayDiv>
                    <p>{t('components/clearRejected:text')}</p>
                    <div>
                        <BaseButtonInverted onClick={() => setVisibility(false)}>{t('common:cancel')}</BaseButtonInverted>
                        <BaseButton onClick={(e) => clearRejectedHandler(e)}>{t('common:delete')}</BaseButton>
                    </div>
                </ClearRejectedOverlayDiv>
            </OverlayContainerForm>
        </OverlayBackground>)
}