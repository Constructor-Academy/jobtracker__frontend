import React from 'react'
import {useTranslation} from 'react-i18next'

import {useAdministeredUsers} from '../../hooks'
import {
    BasePageContainerStyled,
    HeaderSectionContainer,
    PageContentsContainerDefault,
} from '../../style/containers'
import {PageTitle} from '../../style/titles'
import {HeaderTitleWrapper} from '../../style/wrappers'
import AdministeredUsers from './AdministeredUsers'

const AdminBoard = () => {
    const {t} = useTranslation()
    const administeredUsers = useAdministeredUsers(true)

    return (
        <BasePageContainerStyled>
            <PageContentsContainerDefault>
                <HeaderSectionContainer>
                    <HeaderTitleWrapper>
                        <PageTitle>{t('settings:administred_users')}</PageTitle>
                    </HeaderTitleWrapper>
                </HeaderSectionContainer>
                {
                    administeredUsers.length !== 0 ? (
                        <AdministeredUsers
                            administeredUsers={administeredUsers}
                        />
                    ) : (
                        <p>{t('settings:no_administred_users')}</p>
                    )
                }
            </PageContentsContainerDefault>
        </BasePageContainerStyled>
    )
}

export default AdminBoard
