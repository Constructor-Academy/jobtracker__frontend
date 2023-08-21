import React from 'react'
import {useTranslation} from 'react-i18next'

import {BaseButtonInverted, BaseButton} from '../../style/buttons'
import {
    OverlayContainerDialog,
    OverlayContent,
    OverlayBackground,
    OverlayFooter,
} from '../../style/overlay'


const DeleteData = ({setShowDeleteConfirmation, onDeleteHandler, message}) => {
    const {t} = useTranslation()

    return (
        <OverlayBackground>
            <OverlayContainerDialog>
                <OverlayContent>
                    {message ? message : t('profile:delete_confirmation')}
                </OverlayContent>
                <OverlayFooter>
                    <BaseButtonInverted
                        onClick={() => setShowDeleteConfirmation(false)}
                    >
                        {t('common:cancel')}
                    </BaseButtonInverted>
                    <BaseButton onClick={onDeleteHandler}>{t('common:delete')}</BaseButton>
                </OverlayFooter>
            </OverlayContainerDialog>
        </OverlayBackground>
    )
}

export default DeleteData
