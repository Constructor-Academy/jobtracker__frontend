import React, { useState } from 'react'
import styled from 'styled-components'
import { BaseButton } from '../../../style/buttons'
import { DeleteRejectedConfirmationOverlay } from './DeleteRejectedConfirmationOverlay'
import { useTranslation } from 'react-i18next'

const StyledDeleteAllButton = styled(BaseButton)`
    margin-left: auto;
    max-width: 40%;
    height: 70%;    
    `

export const DeleteAllButton = () => {
    const { t } = useTranslation()
    const [deleteAllOverlayVisibility, setDeleteAllOverlayVisibility] = useState(false)
    return (
        <>
        <StyledDeleteAllButton onClick={() => {setDeleteAllOverlayVisibility(true)}}>
                {t('common:delete')}
            </StyledDeleteAllButton>
            {deleteAllOverlayVisibility && <DeleteRejectedConfirmationOverlay setVisibility={setDeleteAllOverlayVisibility} /> }
        </>
    )
}