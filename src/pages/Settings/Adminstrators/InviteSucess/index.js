import React from 'react'
import {useTranslation} from 'react-i18next'

import check from '../../../../assets/icons/check_icon.svg'
import {SuccessWrapper} from '../../../../style/wrappers'
import {ConfirmationIcon, IconWrapper} from './styles'



const InviteSuccess = () => {
    const {t} = useTranslation()

    return (
        <SuccessWrapper>
            {t('common:success')}!
            <IconWrapper>
                <ConfirmationIcon src={check} />
            </IconWrapper>
        </SuccessWrapper>
    )
}

export default InviteSuccess
