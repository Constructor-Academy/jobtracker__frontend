import Cookie from 'js-cookie'
import moment from 'moment'
import React from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components/macro'

import {device} from '../../style/devices'

const LangSwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  :hover{
    cursor: pointer;
  }
  margin-bottom: 16px;
  @media ${device.mobileL} {
    margin: 0 16px 0 auto;
  }
  ${props => props.customStyles}
`

const LangSwitchItem = styled.div`
    color: white;
    text-decoration: ${props => props.underline ? 'underline': ''};
`


const LangSwitch = ({customStyles}) => {
    const {i18n} = useTranslation()

    const setMomentLocale = (locale) => {
        moment.locale(locale)
        Cookie.set('i18nLocale', locale, {secure: true})
    }

    return (
        <LangSwitchContainer customStyles={customStyles}>
            <LangSwitchItem onClick={() => i18n.changeLanguage('en', () => setMomentLocale('en'))} underline={i18n.language==='en'}>EN</LangSwitchItem>
            <LangSwitchItem>&nbsp;|&nbsp;</LangSwitchItem>
            <LangSwitchItem onClick={() => i18n.changeLanguage('de', () => setMomentLocale('de'))} underline={i18n.language==='de'}>DE</LangSwitchItem>
        </LangSwitchContainer>
    )
}
export default LangSwitch
