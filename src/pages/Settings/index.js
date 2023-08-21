import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import {
    BasePageContainerStyled,
    PageContentsContainerDefault,
} from '../../style/containers'
import Administrators from './Adminstrators'


const Settings = () => {
    const {t} = useTranslation()
    const user = useSelector((state) => state.userLoginReducer.user)

    return (
        <BasePageContainerStyled>
            <PageContentsContainerDefault>
                {user && !user.is_admin ? <Administrators /> : t('settings:coming_soon')}
            </PageContentsContainerDefault>
        </BasePageContainerStyled>
    )
}

export default Settings
