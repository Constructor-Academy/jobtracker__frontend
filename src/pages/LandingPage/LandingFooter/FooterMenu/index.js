import React from 'react'
import {useTranslation} from 'react-i18next'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components/macro'

import {device} from '../../../../style/devices'

const FooterMenuContainer = styled.div`
    color: #5F5F5F;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.mobileL} {
       visibility: ${props => props.isOpen ? 'visible': 'hidden'};
    }
`

const MenuItem = styled(NavLink)`
      cursor: pointer;
      font-size: 13px;
      color: #5F5F5F;
      text-decoration: none;

      :hover {
        font-weight: bold;
      }
`

const FooterMenu = () => {
    const {t} = useTranslation()

    return (
        <FooterMenuContainer>
            <MenuItem to="/contact" >{t('landing_page:footer.contact')}</MenuItem>
            <MenuItem to='/legalnotice'>{t('landing_page:footer.legal_notice')}</MenuItem>
            <MenuItem to='/terms'>{t('landing_page:footer.terms_and_conds')}</MenuItem>
            <MenuItem to='/privacy'>{t('landing_page:footer.privacy')}</MenuItem>
        </FooterMenuContainer>
    )
}

export default FooterMenu
